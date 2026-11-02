import React from 'react';
import { MessageSquareText, ShieldCheck, Briefcase, Compass } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface TrustBenefitsProps {
  lang: Language;
}

export const TrustBenefits: React.FC<TrustBenefitsProps> = ({ lang }) => {
  const t = translations[lang];

  const icons = [
    <MessageSquareText className="w-6 h-6 text-[#173B8F]" key="msg" />,
    <ShieldCheck className="w-6 h-6 text-[#D71935]" key="shield" />,
    <Briefcase className="w-6 h-6 text-[#173B8F]" key="briefcase" />,
    <Compass className="w-6 h-6 text-[#D71935]" key="compass" />,
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <p className="text-xs font-bold tracking-widest text-[#D71935] uppercase">
            {lang === 'fr' ? 'Nos Piliers Fondamentaux' : 'Our Core Pillars'}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10264F] tracking-tight">
            {t.benefits.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.benefits.subtitle}
          </p>
        </div>

        {/* 4 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.benefits.items.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-[#173B8F]/40 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {icons[index]}
                </div>
                <h3 className="text-lg font-bold text-[#10264F] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#173B8F]">
                <span>{lang === 'fr' ? 'Objectif clé' : 'Key outcome'}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#173B8F]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
