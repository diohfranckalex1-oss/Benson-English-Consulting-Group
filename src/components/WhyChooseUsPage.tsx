import React from 'react';
import {
  CheckCircle2,
  Sparkles,
  Users2,
  Clock4,
  BriefcaseBusiness,
  Award,
  ArrowRight,
} from 'lucide-react';
import { Language, Page } from '../types';
import { translations } from '../translations';

interface WhyChooseUsPageProps {
  lang: Language;
  onNavigate: (page: Page) => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ lang, onNavigate }) => {
  const t = translations[lang].whyUsPage;

  const icons = [
    <Sparkles className="w-6 h-6 text-[#173B8F]" key="sparkles" />,
    <Users2 className="w-6 h-6 text-[#D71935]" key="users" />,
    <BriefcaseBusiness className="w-6 h-6 text-[#173B8F]" key="briefcase" />,
    <Clock4 className="w-6 h-6 text-[#173B8F]" key="clock" />,
    <Award className="w-6 h-6 text-[#D71935]" key="award" />,
    <CheckCircle2 className="w-6 h-6 text-[#173B8F]" key="check" />,
  ];

  return (
    <div className="py-12 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 sm:space-y-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-xs font-bold tracking-widest text-[#173B8F] uppercase">
            {lang === 'fr' ? 'La Différence BECG' : 'The BECG Advantage'}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10264F] tracking-tight">
            {t.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.points.map((pt, idx) => (
            <div
              key={pt.title}
              className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#173B8F]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {icons[idx]}
                </div>
                <h3 className="text-xl font-bold text-[#10264F] mb-3 group-hover:text-[#173B8F] transition-colors">
                  {pt.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Pilier 0{idx + 1}</span>
                <span className="font-semibold text-[#173B8F]">Benson English</span>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Guarantee Statement */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-[#10264F] text-white space-y-4">
          <div className="flex items-center gap-2 text-[#D71935] font-bold text-xs uppercase tracking-wider">
            <span>Engagement Pédagogique Transparent</span>
          </div>
          <h2 className="text-2xl font-bold">
            {lang === 'fr'
              ? 'Pas de fausses promesses : une méthode rigoureuse axée sur la régularité'
              : 'No unrealistic shortcuts: a disciplined method built on consistent practice'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {lang === 'fr'
              ? "Chez Benson English Consulting Group, nous refusons les promesses irréalistes de bilinguisme magique en quelques jours. L'apprentissage durable d'une langue exige de la méthode, de la répétition guidée et un environnement bienveillant qui valorise la prise de parole. C'est précisément ce cadre que nous vous offrons à chaque séance."
              : 'At Benson English Consulting Group, we believe lasting spoken fluency stems from steady practice, personalized coaching, and a safe learning space where you dare to speak up. That is the exact supportive structure we deliver every single week.'}
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D71935] hover:bg-[#b8122a] text-white text-sm font-semibold transition-all shadow-sm"
            >
              <span>{lang === 'fr' ? 'Démarrer mon orientation' : 'Start My Orientation'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
