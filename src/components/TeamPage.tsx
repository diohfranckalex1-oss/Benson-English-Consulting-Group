import React from 'react';
import { Users, Award, ShieldCheck, ArrowRight, Info } from 'lucide-react';
import { Language, Page } from '../types';
import { translations } from '../translations';

interface TeamPageProps {
  lang: Language;
  onNavigate: (page: Page) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ lang, onNavigate }) => {
  const t = translations[lang].teamPage;

  return (
    <div className="py-12 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 sm:space-y-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-xs font-bold tracking-widest text-[#D71935] uppercase">
            {lang === 'fr' ? 'Pédagogie & Gouvernance' : 'Leadership & Instructors'}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10264F] tracking-tight">
            {t.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 1. Founder Detailed Profile Section */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8 bg-[#10264F] text-white flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                {t.founderSectionTitle}
              </span>
              <h2 className="text-2xl font-extrabold mt-1">
                {translations[lang].aboutPage.founderPlaceholderName}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                {translations[lang].aboutPage.founderRole}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-xs font-medium text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'fr' ? 'Direction certifiée' : 'Executive Leadership'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            {/* Solo Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-sm rounded-2xl overflow-hidden shadow-md bg-slate-900 border border-slate-200">
                <img
                  src="/assets/aistudio/20261102_121018_88b47b49.jpg"
                  alt="Portrait officiel du fondateur"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Founder details */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h3 className="text-xl font-bold text-[#10264F]">
                  {lang === 'fr' ? 'Philosophie & Vision Pédagogique' : 'Philosophy & Educational Vision'}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {lang === 'fr'
                    ? "« Notre vocation est de donner à chaque apprenant le courage d'oser s'exprimer. L'anglais n'est pas un obstacle réservé aux élites : c'est un outil d'émancipation qui transforme les carrières et démultiplie le potentiel de notre jeunesse et de nos cadres. »"
                    : '“Our calling is to empower every learner with the courage to speak. English is not an elite barrier: it is a practical catalyst for personal autonomy and professional achievement.”'}
                </p>
              </div>

              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#173B8F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#10264F]">{lang === 'fr' ? 'Rôle & Coordination :' : 'Role & Coordination:'}</strong>
                    <p className="text-slate-600">
                      Supervision des cursus, conception des méthodes d’immersion orale et formation continue du corps professoral.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#D71935] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#10264F]">{lang === 'fr' ? 'Engagement apprenants :' : 'Commitment to learners:'}</strong>
                    <p className="text-slate-600">
                      Disponibilité, écoute personnalisée et accompagnement des apprenants vers l’obtention de leur attestation de compétences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-start gap-2">
                <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  {t.placeholderNotice}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Associates & Pedagogical Team with Group Photograph */}
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10264F]">
              {t.teamSectionTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              {t.teamDesc}
            </p>
          </div>

          {/* Group Photo Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-900">
              <img
                src="/assets/aistudio/20261102_121028_193f39d9.jpg"
                alt="Photographie officielle de l'équipe et des associés de Benson English Consulting Group"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    {lang === 'fr' ? 'Photographie Officielle' : 'Official Portrait'}
                  </span>
                  <p className="text-base sm:text-lg font-bold">
                    {lang === 'fr'
                      ? 'L’Équipe Benson English Consulting Group'
                      : 'The Benson English Consulting Group Team'}
                  </p>
                </div>
                <span className="text-xs text-slate-300">
                  Bouaké, Côte d'Ivoire
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-slate-50/70 border-t border-slate-200 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <p className="text-xs text-slate-500 font-medium">
                    {lang === 'fr' ? 'Pôle Pédagogique' : 'Instructional Faculty'}
                  </p>
                  <p className="text-sm font-bold text-[#10264F] mt-1">
                    {lang === 'fr' ? 'Formateurs Certifiés' : 'Certified Instructors'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <p className="text-xs text-slate-500 font-medium">
                    {lang === 'fr' ? 'Pôle Entreprises & Pro' : 'Corporate Services'}
                  </p>
                  <p className="text-sm font-bold text-[#10264F] mt-1">
                    {lang === 'fr' ? 'Coachs en Communication' : 'Communication Coaches'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <p className="text-xs text-slate-500 font-medium">
                    {lang === 'fr' ? 'Pôle Linguistique' : 'Language Services'}
                  </p>
                  <p className="text-sm font-bold text-[#10264F] mt-1">
                    {lang === 'fr' ? 'Traducteurs & Interprètes' : 'Translators & Interpreters'}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-500 text-center italic">
                {lang === 'fr'
                  ? 'Pour respecter l’authenticité des membres sans inventer de détails non confirmés, les biographies nominatives des associés seront configurées lors de la mise en service contractuelle du site.'
                  : 'To honor genuine staff members without inventing unverified facts, individual associate bios will be finalized upon project delivery.'}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center pt-4">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-[#D71935] hover:bg-[#b8122a] rounded-xl shadow-md transition-all cursor-pointer"
          >
            <span>{lang === 'fr' ? 'Rejoindre la prochaine session' : 'Join the Upcoming Cohort'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
