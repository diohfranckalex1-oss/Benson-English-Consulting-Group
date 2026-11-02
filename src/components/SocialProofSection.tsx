import React from 'react';
import { Award, CheckCircle2, PlusCircle, Sparkles } from 'lucide-react';
import { Language, Page } from '../types';
import { translations } from '../translations';

interface SocialProofSectionProps {
  lang: Language;
  onNavigate: (page: Page) => void;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ lang, onNavigate }) => {
  const t = translations[lang].socialProof;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <p className="text-xs font-bold tracking-widest text-[#D71935] uppercase">
            {lang === 'fr' ? 'Preuve d’Activité & Reconnaissance' : 'Authentic Training Activity'}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10264F] tracking-tight">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Feature Split: Certificate Presentation Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          {/* Photo Column with authentic certificate presentation */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 group bg-slate-900">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/assets/aistudio/20261102_120942_27abcd10.jpg"
                  alt="Cérémonie de remise de certificat de formation Benson English Consulting Group"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'fr' ? 'Remise officielle d’attestation de fin de cursus' : 'Official Course Completion Certificate Award'}</span>
                </div>
                <p className="text-xs text-slate-300/90 mt-1">
                  {lang === 'fr'
                    ? 'Session de clôture avec remise de certificat attestant de la maîtrise orale et de l’assiduité.'
                    : 'Graduation ceremony celebrating learner milestone and spoken fluency breakthrough.'}
                </p>
              </div>
            </div>
          </div>

          {/* Text & Content Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#173B8F] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? 'Parcours certifiant' : 'Certified curriculum'}</span>
            </div>

            <h3 className="text-2xl font-bold text-[#10264F] leading-snug">
              {t.certificateTitle}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t.certificateDesc}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  {lang === 'fr'
                    ? 'Évaluation continue et bilan oral complet en fin de parcours'
                    : 'Continuous oral assessments and full exit evaluation'}
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  {lang === 'fr'
                    ? 'Attestation valorisable dans votre parcours académique et professionnel'
                    : 'Certificate recognized for CV enrichment and career development'}
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  {lang === 'fr'
                    ? 'Encadrement attentif par des formateurs d’expérience'
                    : 'Attentive mentorship by experienced language trainers'}
                </span>
              </div>
            </div>

            {/* Honest Testimonials Container Note */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-xs text-slate-600 space-y-2">
              <p className="font-semibold text-slate-700">
                {lang === 'fr' ? 'Espace témoignages apprenants' : 'Learner Reviews Portal'}
              </p>
              <p className="leading-relaxed">
                {t.notice}
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#173B8F] hover:text-[#10264F] pt-1"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>{t.placeholderCta}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
