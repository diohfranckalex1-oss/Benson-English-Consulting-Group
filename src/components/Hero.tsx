import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle2, Award, Clock, MapPin, Users } from 'lucide-react';
import { Language, Page } from '../types';
import { translations } from '../translations';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  lang: Language;
  onNavigate: (page: Page) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onNavigate }) => {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-[#F4F6FA] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/70">
      {/* Subtle brand geometry in background */}
      <div
        className="absolute -top-24 right-0 -z-10 w-96 h-96 rounded-full bg-[#173B8F]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-0 -z-10 w-80 h-80 rounded-full bg-[#D71935]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand, Headline, Paragraph, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small Brand Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs font-semibold tracking-wider text-[#173B8F] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D71935]" aria-hidden="true" />
              <span>{t.hero.label}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10264F] tracking-tight leading-[1.15] text-balance">
              « {t.hero.headline} »
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {t.hero.subheadline}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('programs')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#173B8F] hover:bg-[#10264F] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#10264F] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <span>{t.hero.secondaryCta}</span>
              </button>

              <a
                href={getWhatsAppUrl(undefined, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 rounded-xl transition-all whitespace-nowrap"
                title="Poser une question rapide sur WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Subtle Trust Statement */}
            <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-[#D71935] shrink-0" />
              <span className="font-medium italic">{t.hero.trustQuote}</span>
            </div>
          </div>

          {/* Right Column: Authentic Founder Portrait & Brand Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative brand offset framing */}
              <div
                className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#173B8F] via-[#10264F] to-[#D71935] opacity-20 blur-lg transform -rotate-1"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-900/10">
                {/* Authentic Founder Portrait */}
                <div className="aspect-[4/5] w-full overflow-hidden bg-slate-900 relative">
                  <img
                    src="/assets/aistudio/20261102_121018_88b47b49.jpg"
                    alt="Fondateur de Benson English Consulting Group"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />

                  {/* Gentle gradient scrim at base for readable contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10264F]/90 via-[#10264F]/20 to-transparent pointer-events-none" />

                  {/* Floating authentic badge inside photo */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm border border-slate-200 flex items-center gap-2">
                    <img
                      src="/assets/aistudio/20261102_121008_0f5bea7a.jpg"
                      alt="BECG"
                      className="w-5 h-5 rounded-full object-contain"
                    />
                    <span className="text-[11px] font-bold text-[#10264F] tracking-wide">
                      BECG CÔTE D'IVOIRE
                    </span>
                  </div>

                  {/* Caption card at bottom of image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      {t.hero.founderBadge}
                    </p>
                    <p className="text-sm font-medium text-white italic leading-snug">
                      {t.hero.founderQuote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Strip Below the Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/70 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#173B8F] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Cursus Pédagogique</p>
              <p className="text-sm font-bold text-[#10264F]">Sessions de 3 Mois</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/70 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-red-50 text-[#D71935] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Formats Flexibles</p>
              <p className="text-sm font-bold text-[#10264F]">Présentiel & En ligne</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/70 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#173B8F] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Validation d'Acquis</p>
              <p className="text-sm font-bold text-[#10264F]">Attestation & Certificat</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/70 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Localisation</p>
              <p className="text-sm font-bold text-[#10264F]">Abidjan, Côte d'Ivoire</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
