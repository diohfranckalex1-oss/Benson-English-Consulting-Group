import React, { useState } from 'react';
import {
  BookOpen,
  TrendingUp,
  MessageSquare,
  Briefcase,
  FileText,
  Mic,
  GraduationCap,
  Users,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { Program, ProgramCategory, Language, Page } from '../types';
import { programsData } from '../data/programs';
import { translations } from '../translations';
import { ProgramDetailModal } from './ProgramDetailModal';

interface ProgramsSectionProps {
  lang: Language;
  onNavigate: (page: Page) => void;
  onSelectProgramForContact?: (programTitle: string) => void;
  isStandalonePage?: boolean;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  lang,
  onNavigate,
  onSelectProgramForContact,
  isStandalonePage = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProgramCategory>('all');
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  const t = translations[lang].programsSection;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#173B8F]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#173B8F]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-[#D71935]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#173B8F]" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-[#173B8F]" />;
      case 'Mic':
        return <Mic className="w-6 h-6 text-[#D71935]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#173B8F]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#D71935]" />;
      default:
        return <BookOpen className="w-6 h-6 text-[#173B8F]" />;
    }
  };

  const filteredPrograms = programsData.filter((prog) => {
    if (selectedCategory === 'all') return true;
    return prog.category === selectedCategory;
  });

  const handleEnrollFromModal = (programTitle: string) => {
    if (onSelectProgramForContact) {
      onSelectProgramForContact(programTitle);
    }
    onNavigate('contact');
  };

  const filterTabs: { id: ProgramCategory; label: string }[] = [
    { id: 'all', label: t.filterAll },
    { id: 'general', label: t.filterGeneral },
    { id: 'business', label: t.filterBusiness },
    { id: 'coaching', label: t.filterCoaching },
    { id: 'services', label: t.filterServices },
  ];

  return (
    <section
      id="programs-section"
      className={`py-16 sm:py-24 ${
        isStandalonePage ? 'bg-slate-50' : 'bg-slate-50/60'
      } border-b border-slate-200/80`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <p className="text-xs font-bold tracking-widest text-[#173B8F] uppercase">
            {lang === 'fr' ? 'Formations & Services Linguistiques' : 'Language Programs & Services'}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10264F] tracking-tight">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === tab.id
                  ? 'bg-[#10264F] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Programs Grid: 8 Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => {
            const title = lang === 'fr' ? program.titleFr : program.titleEn;
            const shortDesc = lang === 'fr' ? program.shortDescFr : program.shortDescEn;
            const duration = lang === 'fr' ? program.durationFr : program.durationEn;
            const level = lang === 'fr' ? program.levelFr : program.levelEn;

            return (
              <div
                key={program.id}
                className="rounded-2xl bg-white border border-slate-200/90 hover:border-[#173B8F]/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Top line: Icon & Category Indicator */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(program.icon)}
                    </div>
                    {program.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#D71935] bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                        <Sparkles className="w-3 h-3" />
                        <span>{lang === 'fr' ? 'Populaire' : 'Flagship'}</span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#10264F] group-hover:text-[#173B8F] transition-colors leading-snug">
                    {title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {shortDesc}
                  </p>

                  {/* Meta Specs: Clean unboxed metadata with separators */}
                  <div className="pt-2 text-xs text-slate-500 space-y-1">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{duration}</span>
                    </div>
                    <div className="text-slate-500 font-medium">
                      <span>{level}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 bg-white border-t border-slate-100 flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalProgram(program)}
                    className="flex-1 py-2.5 px-3 text-xs sm:text-sm font-semibold text-[#10264F] hover:text-[#173B8F] bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors cursor-pointer text-center"
                  >
                    {t.learnMore}
                  </button>

                  <button
                    onClick={() => {
                      if (onSelectProgramForContact) {
                        onSelectProgramForContact(title);
                      }
                      onNavigate('contact');
                    }}
                    className="py-2.5 px-3 text-xs sm:text-sm font-semibold text-white bg-[#173B8F] hover:bg-[#10264F] rounded-xl transition-colors cursor-pointer inline-flex items-center gap-1.5"
                    title={t.inquire}
                  >
                    <span>{t.inquire}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Context Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#10264F] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold">
              {lang === 'fr'
                ? 'Besoin d’un programme sur-mesure ou pour votre entreprise ?'
                : 'Need a customized corporate program or private training?'}
            </h4>
            <p className="text-sm text-slate-300">
              {lang === 'fr'
                ? 'Nous concevons des parcours intensifs personnalisés adaptés à vos effectifs et vos impératifs d’activité.'
                : 'We design personalized cohort tracks tailored to your staff and business schedule.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-sm font-semibold text-[#10264F] bg-white hover:bg-slate-100 rounded-xl transition-all whitespace-nowrap cursor-pointer shadow-sm"
          >
            {lang === 'fr' ? 'Demander un devis personnalisé' : 'Request a Custom Proposal'}
          </button>
        </div>
      </div>

      {/* Program Deep-Dive Modal */}
      <ProgramDetailModal
        program={activeModalProgram}
        onClose={() => setActiveModalProgram(null)}
        lang={lang}
        onEnroll={handleEnrollFromModal}
      />
    </section>
  );
};
