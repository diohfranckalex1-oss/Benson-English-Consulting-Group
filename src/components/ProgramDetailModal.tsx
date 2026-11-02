import React from 'react';
import { X, CheckCircle2, Clock, MapPin, Target, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { Program, Language } from '../types';
import { translations } from '../translations';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ProgramDetailModalProps {
  program: Program | null;
  onClose: () => void;
  lang: Language;
  onEnroll: (programTitle: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  lang,
  onEnroll,
}) => {
  if (!program) return null;
  const t = translations[lang].programsSection;

  const title = lang === 'fr' ? program.titleFr : program.titleEn;
  const fullDesc = lang === 'fr' ? program.fullDescFr : program.fullDescEn;
  const level = lang === 'fr' ? program.levelFr : program.levelEn;
  const duration = lang === 'fr' ? program.durationFr : program.durationEn;
  const format = lang === 'fr' ? program.formatFr : program.formatEn;
  const target = lang === 'fr' ? program.targetFr : program.targetEn;
  const modules = lang === 'fr' ? program.modulesFr : program.modulesEn;
  const outcomes = lang === 'fr' ? program.outcomesFr : program.outcomesEn;

  const whatsappMessage =
    lang === 'fr'
      ? `Bonjour Benson English Consulting Group, je suis très intéressé(e) par la formation "${title}". Pourriez-vous m'indiquer les modalités d'inscription et la prochaine rentrée ? Merci.`
      : `Hello Benson English Consulting Group, I am very interested in the "${title}" training track. Could you please share admission details and the upcoming schedule? Thank you.`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header Ribbon */}
        <div className="bg-[#10264F] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label={t.modalClose}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#173B8F] text-[11px] font-semibold uppercase tracking-wider text-slate-200 mb-3">
            <span>BECG Academic Track</span>
          </div>

          <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {title}
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
            {fullDesc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Key Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#173B8F] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-slate-500">{t.durationLabel}</p>
                <p className="text-sm font-bold text-[#10264F]">{duration}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-[#D71935] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-slate-500">{t.levelLabel}</p>
                <p className="text-sm font-bold text-[#10264F]">{level}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:col-span-2">
              <MapPin className="w-5 h-5 text-[#173B8F] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-slate-500">{t.formatLabel}</p>
                <p className="text-sm font-medium text-slate-800">{format}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:col-span-2">
              <Sparkles className="w-5 h-5 text-[#D71935] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-slate-500">{t.targetLabel}</p>
                <p className="text-sm font-medium text-slate-800">{target}</p>
              </div>
            </div>
          </div>

          {/* Modules List */}
          <div>
            <h3 className="text-base font-bold text-[#10264F] mb-3">
              {t.modulesTitle}
            </h3>
            <ul className="space-y-2.5">
              {modules.map((mod, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-[#173B8F] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{mod}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
            <h3 className="text-sm font-bold text-emerald-950 mb-2">
              {t.outcomesTitle}
            </h3>
            <ul className="space-y-2">
              {outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={getWhatsAppUrl(whatsappMessage, lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200/80 rounded-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>Poser une question via WhatsApp</span>
          </a>

          <div className="w-full sm:w-auto flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded-xl"
            >
              {t.modalClose}
            </button>
            <button
              onClick={() => {
                onClose();
                onEnroll(title);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#D71935] hover:bg-[#b8122a] rounded-xl shadow-xs transition-colors"
            >
              <span>{lang === 'fr' ? "S'inscrire à ce programme" : 'Enroll in this program'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
