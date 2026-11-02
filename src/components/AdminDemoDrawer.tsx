import React, { useState } from 'react';
import {
  X,
  Settings,
  Database,
  Layers,
  Phone,
  DollarSign,
  Users,
  CheckCircle2,
  FileCheck,
  Send,
} from 'lucide-react';
import { Language } from '../types';
import { programsData } from '../data/programs';
import { BECG_PHONE } from '../utils/whatsapp';

interface AdminDemoDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const AdminDemoDrawer: React.FC<AdminDemoDrawerProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<'pricing' | 'programs' | 'inquiries' | 'leads'>('pricing');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Demo editable parameters for the client demonstration
  const [demoDuration, setDemoDuration] = useState('3 Mois');
  const [demoRegistration, setDemoRegistration] = useState('10 000 FCFA');
  const [demoTuition, setDemoTuition] = useState('40 000 FCFA');
  const [demoPhone, setDemoPhone] = useState(BECG_PHONE);

  if (!isOpen) return null;

  const handleSaveDemo = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        {/* Header */}
        <div className="bg-[#10264F] text-white p-6 sm:p-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#173B8F] text-white flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                {lang === 'fr' ? 'Architecture Back-Office & CMS' : 'Back-Office & CMS Architecture'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold">
                {lang === 'fr'
                  ? 'Aperçu de la Gestion Administrative BECG'
                  : 'BECG Management Portal Preview'}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-nav tabs */}
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-2.5 flex items-center gap-2 overflow-x-auto text-xs sm:text-sm font-medium">
          <button
            onClick={() => setActiveTab('pricing')}
            className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'pricing'
                ? 'bg-white text-[#173B8F] font-bold shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {lang === 'fr' ? 'Tarifs & Rentrées' : 'Pricing & Cohorts'}
          </button>
          <button
            onClick={() => setActiveTab('programs')}
            className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'programs'
                ? 'bg-white text-[#173B8F] font-bold shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {lang === 'fr' ? 'Gestion des Programmes (8)' : 'Catalog Management (8)'}
          </button>
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'inquiries'
                ? 'bg-white text-[#173B8F] font-bold shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {lang === 'fr' ? 'Boîte de Réception Inscriptions' : 'Lead Inbox'}
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
          {activeTab === 'pricing' && (
            <form onSubmit={handleSaveDemo} className="space-y-6">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-900">
                <p className="font-semibold mb-1">
                  {lang === 'fr'
                    ? 'Démonstration de mise à jour des paramètres'
                    : 'Interactive parameter demonstration'}
                </p>
                <p>
                  {lang === 'fr'
                    ? 'Le futur site permet à l’administrateur de modifier les tarifs de formation, les dates de sessions et le numéro de contact WhatsApp en quelques clics sans toucher au code.'
                    : 'The future CMS enables the BECG manager to change tuition fees, cohort dates, and WhatsApp numbers in seconds without coding.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Durée du cursus standard
                  </label>
                  <input
                    type="text"
                    value={demoDuration}
                    onChange={(e) => setDemoDuration(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Frais d'inscription
                  </label>
                  <input
                    type="text"
                    value={demoRegistration}
                    onChange={(e) => setDemoRegistration(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Scolarité mensuelle
                  </label>
                  <input
                    type="text"
                    value={demoTuition}
                    onChange={(e) => setDemoTuition(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Téléphone WhatsApp Officiel
                  </label>
                  <input
                    type="text"
                    value={demoPhone}
                    onChange={(e) => setDemoPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#173B8F] text-white text-xs sm:text-sm font-semibold hover:bg-[#10264F] transition-colors"
                >
                  {lang === 'fr' ? 'Simuler l’enregistrement' : 'Simulate Save Changes'}
                </button>

                {savedSuccess && (
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{lang === 'fr' ? 'Modifications validées dans la démo !' : 'Updated successfully in demo!'}</span>
                  </span>
                )}
              </div>
            </form>
          )}

          {activeTab === 'programs' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                {lang === 'fr'
                  ? 'Liste des 8 programmes configurés dans le catalogue. Cliquez pour activer/désactiver ou éditer les modules.'
                  : 'Catalog of the 8 configured tracks ready for CMS editing.'}
              </p>
              <div className="space-y-2">
                {programsData.map((p, idx) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md bg-blue-100 text-[#173B8F] font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="font-bold text-[#10264F]">{p.titleFr}</p>
                        <p className="text-slate-400 text-xs">{p.levelFr} · {p.durationFr}</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
                      Actif
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'inquiries' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500">
                {lang === 'fr'
                  ? 'Structure prête pour la réception et le tri des candidatures et demandes de contact des apprenants.'
                  : 'Ready structure for storing, filtering, and following up with learner inquiries.'}
              </p>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-600 space-y-2">
                <div className="flex items-center justify-between font-bold text-slate-800">
                  <span>Exemple d'enregistrement candidat</span>
                  <span className="text-[11px] text-[#173B8F]">Nouveau</span>
                </div>
                <p><strong>Candidat :</strong> Kouassi K. · +225 07 XX XX XX</p>
                <p><strong>Programme visé :</strong> Anglais Professionnel & des Affaires</p>
                <p><strong>Format :</strong> En présentiel (Cours du soir)</p>
                <p className="text-slate-400 text-[11px]">Canal favori : WhatsApp · Horaires souhaités : 18h30 - 20h30</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 px-6 flex items-center justify-between text-xs text-slate-500">
          <span>Module de présentation commerciale préparé pour les associés de BECG</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 hover:text-slate-900"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
