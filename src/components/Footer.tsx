import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language, Page } from '../types';
import { translations } from '../translations';
import { BECG_PHONE, getWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onNavigate: (page: Page) => void;
  onOpenAdminDemo?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  setLang,
  onNavigate,
  onOpenAdminDemo,
}) => {
  const t = translations[lang];

  return (
    <footer className="bg-[#10264F] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand presentation & Logo */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 shadow-sm ring-1 ring-white/20">
                <img
                  src="/assets/aistudio/20261102_121008_0f5bea7a.jpg"
                  alt="Logo officiel Benson English Consulting Group"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="block text-white font-extrabold text-lg leading-tight">
                  Benson English
                </span>
                <span className="text-xs font-semibold text-[#D71935] uppercase tracking-wider">
                  Consulting Group
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {lang === 'fr'
                ? "Cabinet de référence pour l'apprentissage pratique de l'anglais, le coaching d'expression orale et les services de traduction & interprétation à Abidjan."
                : 'Premier corporate language consultancy for practical spoken English, fluency coaching, and certified translation & conference interpretation in Abidjan.'}
            </p>

            <p className="text-xs italic text-slate-400">
              « {t.brand.slogan} »
            </p>

            {/* Language switch */}
            <div className="pt-2 flex items-center gap-2 text-xs">
              <span className="text-slate-400">Langue / Language:</span>
              <button
                onClick={() => setLang('fr')}
                className={`px-2 py-1 rounded transition-colors ${
                  lang === 'fr' ? 'bg-[#173B8F] text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Français
              </button>
              <span className="text-slate-600">·</span>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  lang === 'en' ? 'bg-[#173B8F] text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                English
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.nav.programs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-us')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.nav.whyUs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('team')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.nav.team}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs Highlights */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.programs}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>{lang === 'fr' ? 'Anglais Débutant (Bases & Phonétique)' : 'English for Beginners'}</li>
              <li>{lang === 'fr' ? 'Anglais Intermédiaire & Fluidité' : 'Intermediate English'}</li>
              <li>{lang === 'fr' ? 'Expression Orale & Conversation' : 'Spoken English & Fluency'}</li>
              <li>{lang === 'fr' ? 'Anglais Professionnel & Entreprises' : 'Professional & Corporate English'}</li>
              <li>{lang === 'fr' ? 'Services de Traduction de Documents' : 'Document Translation Services'}</li>
              <li>{lang === 'fr' ? 'Interprétation de Conférence' : 'Conference Interpretation'}</li>
              <li>{lang === 'fr' ? 'Coaching Individuel & Groupe' : 'Group & Individual Mentorship'}</li>
            </ul>
          </div>

          {/* Column 4: Contact & Direct WhatsApp */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.contact}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D71935] shrink-0" />
                <a
                  href={`tel:${BECG_PHONE.replace(/\s+/g, '')}`}
                  className="hover:text-white font-mono tabular-nums"
                >
                  {BECG_PHONE}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#173B8F] shrink-0" />
                <span>contact@bensonenglish.ci</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Abidjan, Côte d'Ivoire</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl(undefined, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Officiel BECG</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 Benson English Consulting Group. Tous droits réservés.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              {lang === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
            </button>
            <span className="text-slate-600">·</span>
            {onOpenAdminDemo && (
              <button
                onClick={onOpenAdminDemo}
                className="hover:text-white text-slate-400 transition-colors cursor-pointer"
              >
                {t.nav.adminDemo}
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
