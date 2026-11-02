import React, { useState } from 'react';
import { Clock, Calendar, Check, AlertCircle, ArrowRight, ShieldAlert, Sparkles, Eye } from 'lucide-react';
import { Language, Page } from '../types';
import { translations } from '../translations';

interface PricingSectionProps {
  lang: Language;
  onNavigate: (page: Page) => void;
  onOpenPosterModal?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  lang,
  onNavigate,
}) => {
  const [showPosterPreview, setShowPosterPreview] = useState(false);
  const [paymentPlan, setPaymentPlan] = useState<'monthly' | 'full'>('monthly');
  const t = translations[lang].pricing;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <p className="text-xs font-bold tracking-widest text-[#173B8F] uppercase">
            {lang === 'fr' ? 'Transparence & Modalités' : 'Tuition & Enrollment Info'}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10264F] tracking-tight">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Pricing Layout: Main Card + Authentic Poster Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Main Structured Pricing Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-[#173B8F]/30 shadow-xl p-6 sm:p-8 relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D71935]">
                  {lang === 'fr' ? 'Formule Principale' : 'Core Cohort Formula'}
                </span>
                <h3 className="text-2xl font-extrabold text-[#10264F] mt-1">
                  {lang === 'fr' ? 'Cursus Intensif Standard' : 'Standard Intensive Cohort'}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 font-medium">
                  {lang === 'fr' ? 'Session standard' : 'Standard track'}
                </span>
                <p className="text-lg font-bold text-[#173B8F]">3 Mois</p>
              </div>
            </div>

            {/* Interactive Formula Toggle */}
            <div className="py-4">
              <div className="flex p-1 bg-slate-100 rounded-xl mb-4 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setPaymentPlan('monthly')}
                  className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
                    paymentPlan === 'monthly'
                      ? 'bg-white text-[#173B8F] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lang === 'fr' ? 'Paiement Échelonné (Mensuel)' : 'Monthly Installments'}
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentPlan('full')}
                  className={`flex-1 py-2 rounded-lg transition-all cursor-pointer ${
                    paymentPlan === 'full'
                      ? 'bg-white text-[#173B8F] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lang === 'fr' ? 'Paiement Intégral (Comptant)' : 'Full Upfront Cycle'}
                </button>
              </div>

              {/* Figures Breakdown */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-[#173B8F] flex items-center justify-center font-bold text-xs">
                      01
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">{t.registrationLabel}</p>
                      <p className="text-base font-bold text-[#10264F] font-mono tabular-nums">
                        {t.registrationValue}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 italic">
                    {lang === 'fr' ? 'Frais fixes uniques' : 'One-time intake fee'}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-blue-50/60 border border-blue-200/70">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#173B8F] text-white flex items-center justify-center font-bold text-xs">
                      02
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-medium">
                        {paymentPlan === 'monthly' ? t.tuitionLabel : (lang === 'fr' ? 'Scolarité totale (3 mois)' : 'Total 3-Month Tuition')}
                      </p>
                      <p className="text-xl font-extrabold text-[#173B8F] font-mono tabular-nums">
                        {paymentPlan === 'monthly' ? t.tuitionValue : '120 000 FCFA'}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-[#173B8F] font-semibold">
                    {paymentPlan === 'monthly'
                      ? (lang === 'fr' ? 'x 3 mensualités' : '3 monthly payments')
                      : (lang === 'fr' ? 'Cycle complet' : 'Full 3-month track')}
                  </span>
                </div>

                {/* Total investment box */}
                <div className="p-3 rounded-xl bg-slate-900 text-white flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-medium">
                    {lang === 'fr' ? 'Investissement total (3 mois) :' : 'Total 3-Month Investment:'}
                  </span>
                  <span className="text-lg font-bold text-amber-300 font-mono tabular-nums">
                    130 000 FCFA
                  </span>
                </div>

                {/* Inclusions */}
                <div className="space-y-2 pt-2 text-sm text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      {lang === 'fr'
                        ? 'Cours en présentiel à Abidjan ou en ligne via classe virtuelle'
                        : 'In-person in Abidjan or live interactive online classes'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      {lang === 'fr'
                        ? 'Choix des créneaux : Cours du jour ou Cours du soir'
                        : 'Schedule choice: Daytime or Evening cohort'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      {lang === 'fr'
                        ? 'Délivrance de certificat de fin de formation après évaluation'
                        : 'End-of-cohort certificate awarded upon completion'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mandatory Indicative Pricing Disclaimer */}
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-900 mb-6">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {t.disclaimerNotice}
              </p>
            </div>

            {/* Action Button */}
            <button
              onClick={() => onNavigate('contact')}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#D71935] hover:bg-[#b8122a] rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              <span>{t.requestCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Authentic Supporting Poster Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white max-w-sm">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                <img
                  src="/assets/aistudio/20261102_120957_7499d549.jpg"
                  alt="Affiche promotionnelle officielle Benson English Consulting Group"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Overlay details */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                    {lang === 'fr' ? 'Support de Campagne Officiel' : 'Official Campaign Material'}
                  </p>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                    Affiche de communication présentant l’offre accélérée de 3 mois et les conditions de rentrée.
                  </p>
                  <button
                    onClick={() => setShowPosterPreview(true)}
                    className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-xs text-xs font-semibold text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{lang === 'fr' ? 'Agrandir l’affiche' : 'View full poster'}</span>
                  </button>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 text-center mt-3 max-w-xs">
              {lang === 'fr'
                ? 'Document public de référence issu des campagnes d’orientation BECG.'
                : 'Official public reference material from BECG admission announcements.'}
            </p>
          </div>
        </div>
      </div>

      {/* Poster Lightbox Modal */}
      {showPosterPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs"
          onClick={() => setShowPosterPreview(false)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#10264F] text-white flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider">
                Affiche Promotionnelle BECG
              </span>
              <button
                onClick={() => setShowPosterPreview(false)}
                className="text-white hover:text-red-300 text-sm font-bold px-2 py-1"
              >
                ✕
              </button>
            </div>
            <div className="max-h-[80vh] overflow-y-auto p-2 bg-slate-100 flex justify-center">
              <img
                src="/assets/aistudio/20261102_120957_7499d549.jpg"
                alt="Affiche promotionnelle BECG"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-lg shadow-xs"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
