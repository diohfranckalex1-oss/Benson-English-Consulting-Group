import React, { useState } from 'react';
import { Menu, X, Globe, Phone, ArrowRight } from 'lucide-react';
import { Language, Page } from '../types';
import { translations } from '../translations';
import { BECG_PHONE, getWhatsAppUrl } from '../utils/whatsapp';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenAdminDemo?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  lang,
  setLang,
  onOpenAdminDemo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: t.nav.home },
    { page: 'about', label: t.nav.about },
    { page: 'programs', label: t.nav.programs },
    { page: 'why-us', label: t.nav.whyUs },
    { page: 'team', label: t.nav.team },
    { page: 'contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top micro-bar: quick phone & intake note */}
      <div className="bg-[#10264F] text-white text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D71935]" aria-hidden="true" />
            <span className="font-medium text-slate-200 truncate">
              {lang === 'fr'
                ? 'Rentrées 3 Mois : Inscriptions ouvertes en présentiel & en ligne'
                : '3-Month Cohorts: In-person and online registrations open'}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-slate-300 shrink-0">
            <a
              href={`tel:${BECG_PHONE.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D71935]" />
              <span className="font-mono tabular-nums">{BECG_PHONE}</span>
            </a>
            <span className="text-slate-500">|</span>
            <button
              onClick={onOpenAdminDemo}
              className="text-xs text-slate-300 hover:text-white transition-colors cursor-pointer underline-offset-2 hover:underline"
              title="Aperçu du panneau administrateur"
            >
              {t.nav.adminDemo}
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Navigation: 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Official BECG Logo & Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group shrink-0 focus:outline-none"
            aria-label="Benson English Consulting Group - Accueil"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-sm ring-1 ring-slate-200/80 flex items-center justify-center p-0.5 group-hover:ring-[#173B8F] transition-all">
              <img
                src="/assets/aistudio/20261102_121008_0f5bea7a.jpg"
                alt="Logo officiel Benson English Consulting Group"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight text-[#10264F] group-hover:text-[#173B8F] transition-colors">
                Benson English
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#D71935]">
                Consulting Group
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-[#173B8F] font-semibold'
                      : 'text-slate-600 hover:text-[#10264F]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#173B8F] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language Selector & Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200/80">
              <button
                onClick={() => setLang('fr')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  lang === 'fr'
                    ? 'bg-white text-[#173B8F] shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                aria-label="Afficher le site en français"
              >
                FR
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white text-[#173B8F] shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                aria-label="Switch website to English"
              >
                EN
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#D71935] hover:bg-[#b8122a] rounded-lg shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              <span>{t.nav.joinCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu & Lang button for small screens */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                className="flex items-center gap-1 px-2 py-1 text-xs font-semibold text-slate-700"
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>{lang.toUpperCase()}</span>
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#173B8F] hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 py-6 space-y-4 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-[#173B8F] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <div className="flex items-center justify-between text-sm text-slate-600 px-3">
              <span>{lang === 'fr' ? 'Langue / Language' : 'Language'}</span>
              <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
                <button
                  onClick={() => setLang('fr')}
                  className={`px-3 py-1 text-xs font-semibold rounded ${
                    lang === 'fr' ? 'bg-[#173B8F] text-white' : 'text-slate-600'
                  }`}
                >
                  Français
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 text-xs font-semibold rounded ${
                    lang === 'en' ? 'bg-[#173B8F] text-white' : 'text-slate-600'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#D71935] hover:bg-[#b8122a] rounded-lg shadow-sm"
            >
              <span>{t.nav.joinCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-2 px-3">
              <a
                href={getWhatsAppUrl(undefined, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#173B8F] font-medium hover:underline"
              >
                WhatsApp Direct : {BECG_PHONE}
              </a>
              {onOpenAdminDemo && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdminDemo();
                  }}
                  className="text-slate-500 hover:text-slate-800 underline"
                >
                  {t.nav.adminDemo}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
