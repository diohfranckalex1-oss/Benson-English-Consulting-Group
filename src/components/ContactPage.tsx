import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Info,
  ShieldCheck,
} from 'lucide-react';
import { Language, ContactFormData } from '../types';
import { translations } from '../translations';
import { programsData } from '../data/programs';
import {
  BECG_PHONE,
  BECG_WHATSAPP_NUMBER,
  getWhatsAppUrl,
  formatInquiryWhatsAppMessage,
} from '../utils/whatsapp';

interface ContactPageProps {
  lang: Language;
  preselectedProgram?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  lang,
  preselectedProgram = '',
}) => {
  const t = translations[lang].contactPage;

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    program: preselectedProgram || '',
    level: '',
    format: 'in_person',
    preferredContact: 'whatsapp',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
  const [showDemoModal, setShowDemoModal] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = lang === 'fr' ? 'Le nom complet est obligatoire.' : 'Full name is required.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone =
        lang === 'fr'
          ? 'Le numéro de téléphone est obligatoire.'
          : 'Phone number is required.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone =
        lang === 'fr'
          ? 'Veuillez saisir un numéro de téléphone valide.'
          : 'Please enter a valid phone number.';
    }
    if (!formData.program) {
      newErrors.program =
        lang === 'fr'
          ? 'Veuillez sélectionner un programme.'
          : 'Please select a program.';
    }
    if (!formData.level) {
      newErrors.level =
        lang === 'fr'
          ? 'Veuillez indiquer votre niveau actuel estimé.'
          : 'Please indicate your estimated level.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate immediate frontend validation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setShowDemoModal(true);
    }, 600);
  };

  const directWhatsAppUrl = getWhatsAppUrl(undefined, lang);

  const inquiryWhatsAppUrl = submittedData
    ? `https://wa.me/${BECG_WHATSAPP_NUMBER}?text=${encodeURIComponent(
        formatInquiryWhatsAppMessage({
          fullName: submittedData.fullName,
          phone: submittedData.phone,
          email: submittedData.email,
          program: submittedData.program,
          level: submittedData.level,
          format:
            submittedData.format === 'in_person'
              ? 'Présentiel à Abidjan'
              : submittedData.format === 'online'
              ? 'En ligne / Distanciel'
              : 'Hybride',
          message: submittedData.message,
        })
      )}`
    : directWhatsAppUrl;

  return (
    <div className="py-12 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-xs font-bold tracking-widest text-[#D71935] uppercase">
            {lang === 'fr' ? 'Orientation & Inscription' : 'Admissions & Inquiries'}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10264F] tracking-tight">
            {t.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Split: Contact Coordinates + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Coordinates Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#173B8F] uppercase tracking-wider">
                  Benson English Consulting Group
                </span>
                <h2 className="text-xl font-bold text-[#10264F] mt-1">
                  {t.infoTitle}
                </h2>
              </div>

              {/* Coordinates List */}
              <div className="space-y-4 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <Phone className="w-5 h-5 text-[#D71935] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-slate-500">{t.phoneLabel}</p>
                    <a
                      href={`tel:${BECG_PHONE.replace(/\s+/g, '')}`}
                      className="font-bold text-[#10264F] hover:text-[#173B8F] font-mono tabular-nums text-base"
                    >
                      {BECG_PHONE}
                    </a>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {lang === 'fr' ? 'Numéro officiel issu des supports BECG' : 'Official number from BECG banners'}
                    </p>
                  </div>
                </div>

                {/* Direct WhatsApp Callout */}
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Direct</span>
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    {lang === 'fr'
                      ? 'Échangez instantanément avec nos conseillers pédagogiques pour toute question urgente.'
                      : 'Chat instantly with our academic advisors for any urgent enrollment questions.'}
                  </p>
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
                  >
                    <span>{t.whatsappBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <Mail className="w-5 h-5 text-[#173B8F] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-slate-500">{t.emailLabel}</p>
                    <p className="font-semibold text-slate-800">contact@bensonenglish.ci</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {lang === 'fr' ? '(Adresse indicative de contact)' : '(Indicative contact email)'}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <MapPin className="w-5 h-5 text-[#173B8F] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-slate-500">{t.locationLabel}</p>
                    <p className="font-medium text-slate-800">{t.locationDesc}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {lang === 'fr'
                        ? 'La localisation exacte des salles de cours est communiquée lors du rendez-vous d’orientation.'
                        : 'Exact campus location is provided during the initial orientation interview.'}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <Clock className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-slate-500">{t.hoursLabel}</p>
                    <p className="font-medium text-slate-800">
                      {translations[lang].brand.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note on Transparency & No Fake Maps */}
            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-500 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {lang === 'fr'
                  ? "Conformément aux directives de déontologie, aucun plan fictif n'est affiché. La carte interactive sera intégrée dès validation de l'adresse géographique exacte de l'établissement."
                  : 'In line with transparency standards, no speculative map is shown. An interactive Google map will be connected once the official physical street address is finalized.'}
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
            <div className="mb-6 space-y-1">
              <h2 className="text-2xl font-bold text-[#10264F]">
                {t.formTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                {t.formSubtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t.fullName} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  placeholder={lang === 'fr' ? 'Ex: Jean-Marc Kouadio' : 'E.g., John Kouadio'}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors ${
                    errors.fullName
                      ? 'border-red-400 bg-red-50/30'
                      : 'border-slate-300 focus:border-[#173B8F]'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.phone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+225 07..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors ${
                      errors.phone
                        ? 'border-red-400 bg-red-50/30'
                        : 'border-slate-300 focus:border-[#173B8F]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#173B8F] text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Program & Level Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.program} <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) =>
                      setFormData({ ...formData, program: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors bg-white ${
                      errors.program
                        ? 'border-red-400 bg-red-50/30'
                        : 'border-slate-300 focus:border-[#173B8F]'
                    }`}
                  >
                    <option value="">{t.programPlaceholder}</option>
                    {programsData.map((p) => {
                      const name = lang === 'fr' ? p.titleFr : p.titleEn;
                      return (
                        <option key={p.id} value={name}>
                          {name}
                        </option>
                      );
                    })}
                  </select>
                  {errors.program && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.program}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.level} <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.level}
                    onChange={(e) =>
                      setFormData({ ...formData, level: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors bg-white ${
                      errors.level
                        ? 'border-red-400 bg-red-50/30'
                        : 'border-slate-300 focus:border-[#173B8F]'
                    }`}
                  >
                    <option value="">{t.levelPlaceholder}</option>
                    <option value="Débutant complet (A0)">
                      {lang === 'fr' ? 'Débutant complet (A0)' : 'Complete Beginner (A0)'}
                    </option>
                    <option value="Faux débutant / Notions scolaires (A1-A2)">
                      {lang === 'fr'
                        ? 'Faux débutant / Notions scolaires (A1-A2)'
                        : 'False Beginner / Basic Notions (A1-A2)'}
                    </option>
                    <option value="Intermédiaire / Comprend mais bloque à l'oral (B1)">
                      {lang === 'fr'
                        ? "Intermédiaire / Comprend mais bloque à l'oral (B1)"
                        : 'Intermediate / Understands but hesitates orally (B1)'}
                    </option>
                    <option value="Intermédiaire supérieur / Avancé (B2-C1)">
                      {lang === 'fr'
                        ? 'Intermédiaire supérieur / Avancé (B2-C1)'
                        : 'Upper Intermediate / Advanced (B2-C1)'}
                    </option>
                    <option value="Besoin d'un test d'évaluation">
                      {lang === 'fr'
                        ? "Je souhaite faire un test d'orientation"
                        : 'I would like a diagnostic assessment'}
                    </option>
                  </select>
                  {errors.level && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.level}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Format & Contact Method Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.format}
                  </label>
                  <select
                    value={formData.format}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        format: e.target.value as 'in_person' | 'online' | 'hybrid',
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#173B8F] text-sm bg-white"
                  >
                    <option value="in_person">{t.inPerson}</option>
                    <option value="online">{t.online}</option>
                    <option value="hybrid">{t.hybrid}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.contactMethod}
                  </label>
                  <select
                    value={formData.preferredContact}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredContact: e.target.value as 'whatsapp' | 'phone' | 'email',
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#173B8F] text-sm bg-white"
                  >
                    <option value="whatsapp">{t.contactWhatsApp}</option>
                    <option value="phone">{t.contactPhone}</option>
                    <option value="email">{t.contactEmail}</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t.message}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={t.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#173B8F] text-sm transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white bg-[#173B8F] hover:bg-[#10264F] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-70 active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <span>{t.submitting}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.submitBtn}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Honest Demo Feedback Modal */}
      {showDemoModal && submittedData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
          onClick={() => setShowDemoModal(false)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                {lang === 'fr' ? 'Validation Réussie (Démonstration)' : 'Validation Successful (Demo)'}
              </span>
              <h3 className="text-xl font-bold text-[#10264F] mt-1">
                {lang === 'fr' ? 'Demande Prête à Être Transmise' : 'Inquiry Ready for Routing'}
              </h3>
            </div>

            {/* Honest Demo notice as required by Section 13 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
              <p className="leading-relaxed">
                {lang === 'fr'
                  ? 'Toutes les informations ont été validées avec succès sur l’interface de présentation.'
                  : 'All information was successfully checked and validated on this presentation interface.'}
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">
                {lang === 'fr'
                  ? 'Pour cette version de démonstration commerciale, aucune transmission silencieuse par faux serveur n’est simulée. Dans le site final en production, vos données seront expédiées directement à l’équipe administrative de BECG.'
                  : 'For this commercial proposal demo, no fake background delivery is simulated. In the deployed production site, your inquiry will be delivered directly to the BECG admissions office.'}
              </p>
            </div>

            {/* Summary */}
            <div className="p-3 bg-blue-50/60 rounded-xl text-xs space-y-1 text-slate-700 font-mono">
              <p><strong>Candidat :</strong> {submittedData.fullName}</p>
              <p><strong>Téléphone :</strong> {submittedData.phone}</p>
              <p><strong>Programme :</strong> {submittedData.program}</p>
              <p><strong>Niveau :</strong> {submittedData.level}</p>
            </div>

            {/* Action buttons */}
            <div className="space-y-2 pt-2">
              <a
                href={inquiryWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.transferToWhatsApp}</span>
              </a>

              <button
                onClick={() => setShowDemoModal(false)}
                className="w-full py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                {lang === 'fr' ? 'Fermer cette fenêtre' : 'Close this window'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
