import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const url = getWhatsAppUrl(undefined, lang);

  return (
    <aside
      aria-label={lang === 'fr' ? 'Contact WhatsApp direct' : 'Direct WhatsApp Contact'}
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
        title={lang === 'fr' ? 'Poser une question sur WhatsApp' : 'Chat with us on WhatsApp'}
      >
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-bold tracking-wide pr-1 hidden sm:inline-block">
          {lang === 'fr' ? 'WhatsApp Direct' : 'Direct WhatsApp'}
        </span>
      </a>
    </aside>
  );
};
