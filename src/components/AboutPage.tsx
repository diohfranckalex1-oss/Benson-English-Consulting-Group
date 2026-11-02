import React from 'react';
import { Target, Eye, Award, CheckCircle, ArrowRight, UserCheck, Shield, BookOpen } from 'lucide-react';
import { Language, Page } from '../types';
import { translations } from '../translations';

interface AboutPageProps {
  lang: Language;
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, onNavigate }) => {
  const t = translations[lang].aboutPage;

  return (
    <div className="py-12 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 sm:space-y-24">
        {/* Page Hero */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-[#173B8F] text-xs font-bold uppercase tracking-wider">
            <span>{lang === 'fr' ? 'Notre Identité & Raison d’Être' : 'Our Identity & Purpose'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10264F] tracking-tight">
            « {t.headline} »
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.intro}
          </p>
        </div>

        {/* Founder Spotlight Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Founder Image */}
            <div className="lg:col-span-5 bg-slate-900 relative aspect-[4/5] lg:aspect-auto lg:h-full overflow-hidden">
              <img
                src="/assets/aistudio/20261102_121018_88b47b49.jpg"
                alt="Portrait du fondateur de Benson English Consulting Group"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <p className="text-xs font-semibold text-slate-300">{t.founderRole}</p>
                <p className="text-sm font-bold">{t.founderPlaceholderName}</p>
              </div>
            </div>

            {/* Founder Philosophy & Bio */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-5">
              <div className="hidden lg:block">
                <span className="text-xs font-bold text-[#D71935] uppercase tracking-wider">
                  {t.founderTitle}
                </span>
                <h2 className="text-2xl font-extrabold text-[#10264F] mt-1">
                  {t.founderPlaceholderName}
                </h2>
                <p className="text-sm font-semibold text-[#173B8F]">{t.founderRole}</p>
              </div>

              <blockquote className="border-l-2 border-[#173B8F] pl-4 italic text-slate-700 text-sm sm:text-base leading-relaxed">
                « L'anglais n'est pas simplement une matière académique ; c'est le passeport de vos projets, un outil d'influence et une clé d'accès vers le monde. »
              </blockquote>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.founderBio}
              </p>

              <div className="pt-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#173B8F] shrink-0" />
                <span>
                  {lang === 'fr'
                    ? 'Section personnalisable avec la biographie officielle confirmée du fondateur.'
                    : 'Customizable section ready for confirmed founder bio & credentials.'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#173B8F] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#10264F]">{t.missionTitle}</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t.missionDesc}
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D71935] flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#10264F]">{t.visionTitle}</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t.visionDesc}
            </p>
          </div>
        </div>

        {/* Core Values: 6 values */}
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-extrabold text-[#10264F]">
              {t.valuesTitle}
            </h3>
            <p className="text-sm text-slate-500">
              {lang === 'fr'
                ? 'Les principes immuables qui guident nos formations au quotidien'
                : 'The enduring principles guiding every session at BECG'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.values.map((val) => (
              <div
                key={val.name}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#173B8F]/40 transition-colors space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D71935]" />
                  <h4 className="font-bold text-[#10264F] text-base">{val.name}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Call to Action */}
        <div className="max-w-3xl mx-auto text-center pt-8">
          <button
            onClick={() => onNavigate('programs')}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-[#173B8F] hover:bg-[#10264F] rounded-xl shadow-md transition-all cursor-pointer"
          >
            <span>{lang === 'fr' ? 'Découvrir nos 8 programmes' : 'Explore our 8 programs'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
