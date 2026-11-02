import React from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { Language, Page } from '../types';
import { translations } from '../translations';

interface PrivacyPolicyPageProps {
  lang: Language;
  onNavigate: (page: Page) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  lang,
  onNavigate,
}) => {
  const t = translations[lang].privacy;

  return (
    <div className="py-12 sm:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#173B8F] hover:text-[#10264F] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'fr' ? "Retour à l'accueil" : 'Back to Home'}</span>
        </button>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-12 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#173B8F] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#10264F]">
                {t.title}
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">{t.lastUpdated}</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line border-t border-slate-100 pt-6">
            {t.content}
          </div>

          <div className="pt-6 border-t border-slate-100 text-xs text-slate-500">
            <p>
              Benson English Consulting Group (BECG) · Abidjan, Côte d'Ivoire · Contact : +225 07 89 82 35 31
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
