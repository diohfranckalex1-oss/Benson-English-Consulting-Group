import React, { useState } from 'react';
import { Sparkles, ArrowRight, ArrowLeft, RotateCcw, CheckCircle2, MessageCircle } from 'lucide-react';
import { Language, Page } from '../types';
import { translations } from '../translations';
import { getWhatsAppUrl, BECG_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface DiagnosticQuizProps {
  lang: Language;
  onSelectProgramAndNavigate: (programTitle: string) => void;
}

export const DiagnosticQuiz: React.FC<DiagnosticQuizProps> = ({
  lang,
  onSelectProgramAndNavigate,
}) => {
  const t = translations[lang].quiz;
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...selectedAnswers];
    updated[currentStep] = optionIndex;
    setSelectedAnswers(updated);
  };

  const handleNext = () => {
    if (currentStep < t.questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setIsCompleted(false);
  };

  // Determine recommendation based on answers
  const computeRecommendation = () => {
    const q1Answer = selectedAnswers[0] ?? 0;
    const q2Answer = selectedAnswers[1] ?? 0;

    if (q1Answer === 0 || q1Answer === 1) {
      return {
        title: lang === 'fr' ? 'Anglais Débutant' : 'English for Beginners',
        reason:
          lang === 'fr'
            ? 'Ce programme vous apportera des fondations rassurantes, la prononciation essentielle et le vocabulaire pratique sans blocage.'
            : 'This program will establish solid foundational speaking habits, core phonetic accuracy, and practical confidence.',
      };
    }
    if (q1Answer === 3 || q2Answer === 2) {
      return {
        title:
          lang === 'fr'
            ? 'Anglais Professionnel & des Affaires'
            : 'Professional & Business English',
        reason:
          lang === 'fr'
            ? 'Parfait pour maîtriser les réunions, les présentations persuasives et les négociations en contexte bilingue d’entreprise.'
            : 'Tailored to master executive presentations, bilingual negotiations, and corporate meetings.',
      };
    }
    if (q1Answer === 2 || q2Answer === 0) {
      return {
        title:
          lang === 'fr'
            ? 'Expression Orale & Conversation'
            : 'Spoken English & Conversation',
        reason:
          lang === 'fr'
            ? 'Ateliers 100% oraux pour surmonter l’hésitation et débloquer une élocution fluide et spontanée.'
            : '100% oral workshops to break hesitation barriers and develop natural conversational ease.',
      };
    }
    return {
      title: lang === 'fr' ? 'Anglais Intermédiaire' : 'Intermediate English',
      reason:
        lang === 'fr'
          ? 'Idéal pour perfectionner la fluidité, enrichir le vocabulaire et débattre avec nuance.'
          : 'Ideal to enrich vocabulary, elevate listening comprehension, and argue ideas fluently.',
    };
  };

  const recommendation = computeRecommendation();
  const currentQuestion = t.questions[currentStep];
  const hasSelectedCurrent = selectedAnswers[currentStep] !== undefined;

  const resultWhatsAppUrl = `https://wa.me/${BECG_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    lang === 'fr'
      ? `Bonjour Benson English Consulting Group, j'ai réalisé le test d'orientation en ligne et mon profil correspond au programme "${recommendation.title}". Je souhaite obtenir les dates de rentrée et finaliser mon inscription. Merci.`
      : `Hello Benson English Consulting Group, I completed your online orientation test and was recommended the "${recommendation.title}" program. Could you share the next intake dates and admission procedure? Thank you.`
  )}`;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#173B8F] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10264F] tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-10 relative overflow-hidden">
          {!isCompleted ? (
            <div className="space-y-8">
              {/* Progress bar */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span>
                    {lang === 'fr'
                      ? `Question ${currentStep + 1} sur ${t.questions.length}`
                      : `Question ${currentStep + 1} of ${t.questions.length}`}
                  </span>
                  <span>{Math.round(((currentStep + 1) / t.questions.length) * 100)}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-[#173B8F] rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentStep + 1) / t.questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Question title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#10264F] leading-snug">
                {currentQuestion.title}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((opt, idx) => {
                  const isSelected = selectedAnswers[currentStep] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${
                        isSelected
                          ? 'border-[#173B8F] bg-blue-50/70 text-[#10264F] font-semibold ring-1 ring-[#173B8F]'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span>{opt.text}</span>
                      <span
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'border-[#173B8F] bg-[#173B8F] text-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t.prevBtn}</span>
                </button>

                <button
                  onClick={handleNext}
                  disabled={!hasSelectedCurrent}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#173B8F] hover:bg-[#10264F] rounded-xl shadow-xs transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span>
                    {currentStep === t.questions.length - 1
                      ? lang === 'fr'
                        ? 'Voir ma recommandation'
                        : 'View My Recommendation'
                      : t.nextBtn}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="space-y-6 text-center animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {t.resultTitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#10264F] mt-2">
                  {recommendation.title}
                </h3>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-left max-w-xl mx-auto space-y-2">
                <p className="text-xs font-bold text-[#173B8F] uppercase tracking-wider">
                  {t.recommendationReason}
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {recommendation.reason}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => onSelectProgramAndNavigate(recommendation.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#D71935] hover:bg-[#b8122a] rounded-xl shadow-sm transition-all cursor-pointer"
                >
                  <span>{t.takeToContactBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={resultWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 rounded-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Transmettre ce résultat sur WhatsApp</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.restartBtn}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
