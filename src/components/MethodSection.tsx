import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language, Page } from '../types';
import { translations } from '../translations';

interface MethodSectionProps {
  lang: Language;
  onNavigate: (page: Page) => void;
}

export const MethodSection: React.FC<MethodSectionProps> = ({ lang, onNavigate }) => {
  const t = translations[lang].method;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <p className="text-xs font-bold tracking-widest text-[#D71935] uppercase">
            {lang === 'fr' ? 'Méthodologie Pédagogique' : 'Learning Methodology'}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10264F] tracking-tight">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {t.steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative p-6 sm:p-7 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-[#173B8F]/40 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number badge in clean typography */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold text-[#173B8F] font-mono tabular-nums">
                    {step.num}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-500">
                    {lang === 'fr' ? `Étape ${idx + 1}` : `Stage ${idx + 1}`}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#10264F] mb-2 group-hover:text-[#173B8F] transition-colors">
                  {step.name}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-[#D71935]" />
                <span>
                  {idx === 0 && (lang === 'fr' ? 'Diagnostic initial' : 'Initial assessment')}
                  {idx === 1 && (lang === 'fr' ? 'Acquisition ciblée' : 'Targeted skills')}
                  {idx === 2 && (lang === 'fr' ? 'Immersion active' : 'Active practice')}
                  {idx === 3 && (lang === 'fr' ? 'Bilan & Attestation' : 'Outcome & Certificate')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#173B8F] hover:bg-[#10264F] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <span>{t.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
