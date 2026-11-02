/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, Page } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { TrustBenefits } from './components/TrustBenefits';
import { ProgramsSection } from './components/ProgramsSection';
import { MethodSection } from './components/MethodSection';
import { PricingSection } from './components/PricingSection';
import { DiagnosticQuiz } from './components/DiagnosticQuiz';
import { FAQSection } from './components/FAQSection';
import { SocialProofSection } from './components/SocialProofSection';
import { AboutPage } from './components/AboutPage';
import { TeamPage } from './components/TeamPage';
import { WhyChooseUsPage } from './components/WhyChooseUsPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AdminDemoDrawer } from './components/AdminDemoDrawer';
import { translations } from './translations';

export default function App() {
  // Language state with localStorage persistence (defaults to 'fr' as required)
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('becg_lang');
      if (saved === 'en' || saved === 'fr') return saved;
    } catch {
      // fallback
    }
    return 'fr';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('becg_lang', newLang);
    } catch {
      // ignore
    }
  };

  // Page state with hash navigation sync
  const [currentPage, setCurrentPageState] = useState<Page>(() => {
    try {
      const hash = window.location.hash.replace('#', '') as Page;
      const validPages: Page[] = ['home', 'about', 'programs', 'why-us', 'team', 'contact', 'privacy'];
      if (validPages.includes(hash)) return hash;
    } catch {
      // fallback
    }
    return 'home';
  });

  const [preselectedProgram, setPreselectedProgram] = useState<string>('');
  const [adminDemoOpen, setAdminDemoOpen] = useState(false);

  const navigateTo = (page: Page) => {
    setCurrentPageState(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync hash changes (browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      const validPages: Page[] = ['home', 'about', 'programs', 'why-us', 'team', 'contact', 'privacy'];
      if (validPages.includes(hash)) {
        setCurrentPageState(hash);
      } else {
        setCurrentPageState('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update HTML title & lang attribute on change
  useEffect(() => {
    document.documentElement.lang = lang;
    const pageKey = currentPage === 'why-us' ? 'whyUs' : currentPage;
    const currentNav = translations[lang].nav;
    const titleLabel = (currentNav as Record<string, string>)[pageKey] || 'Page';

    if (lang === 'fr') {
      document.title =
        currentPage === 'home'
          ? 'Benson English Consulting Group (BECG) | Formations en Anglais & Services Linguistiques'
          : `${titleLabel} | Benson English Consulting Group`;
    } else {
      document.title =
        currentPage === 'home'
          ? 'Benson English Consulting Group (BECG) | English Language Training & Consulting'
          : `${titleLabel} | Benson English Consulting Group`;
    }
  }, [lang, currentPage]);

  const handleSelectProgramForContact = (programTitle: string) => {
    setPreselectedProgram(programTitle);
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-[#172033] font-sans selection:bg-[#173B8F] selection:text-white">
      {/* Universal Top Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={navigateTo}
        lang={lang}
        setLang={setLang}
        onOpenAdminDemo={() => setAdminDemoOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* 1. Hero Section */}
            <Hero lang={lang} onNavigate={navigateTo} />

            {/* 2. Trust & Benefits Section */}
            <TrustBenefits lang={lang} />

            {/* 3. Training Programs Showcase */}
            <ProgramsSection
              lang={lang}
              onNavigate={navigateTo}
              onSelectProgramForContact={handleSelectProgramForContact}
            />

            {/* 4. Interactive Level Placement Diagnostic */}
            <DiagnosticQuiz
              lang={lang}
              onSelectProgramAndNavigate={handleSelectProgramForContact}
            />

            {/* 5. Training Method & Learning Journey */}
            <MethodSection lang={lang} onNavigate={navigateTo} />

            {/* 6. Indicative Pricing & Authentic Promotional Material */}
            <PricingSection lang={lang} onNavigate={navigateTo} />

            {/* 7. Social Proof with Authentic Certificate Presentation */}
            <SocialProofSection lang={lang} onNavigate={navigateTo} />

            {/* 8. Frequently Asked Questions */}
            <FAQSection lang={lang} onNavigate={navigateTo} />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage lang={lang} onNavigate={navigateTo} />
        )}

        {currentPage === 'programs' && (
          <ProgramsSection
            lang={lang}
            onNavigate={navigateTo}
            onSelectProgramForContact={handleSelectProgramForContact}
            isStandalonePage={true}
          />
        )}

        {currentPage === 'why-us' && (
          <WhyChooseUsPage lang={lang} onNavigate={navigateTo} />
        )}

        {currentPage === 'team' && (
          <TeamPage lang={lang} onNavigate={navigateTo} />
        )}

        {currentPage === 'contact' && (
          <ContactPage lang={lang} preselectedProgram={preselectedProgram} />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicyPage lang={lang} onNavigate={navigateTo} />
        )}
      </main>

      {/* Universal Corporate Footer */}
      <Footer
        lang={lang}
        setLang={setLang}
        onNavigate={navigateTo}
        onOpenAdminDemo={() => setAdminDemoOpen(true)}
      />

      {/* Direct WhatsApp Floating Action */}
      <FloatingWhatsApp lang={lang} />

      {/* Admin Demo Portal Drawer */}
      <AdminDemoDrawer
        isOpen={adminDemoOpen}
        onClose={() => setAdminDemoOpen(false)}
        lang={lang}
      />
    </div>
  );
}
