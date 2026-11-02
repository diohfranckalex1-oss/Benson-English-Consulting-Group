export const BECG_PHONE = '+225 07 89 82 35 31';
export const BECG_WHATSAPP_NUMBER = '2250789823531';

export const DEFAULT_WHATSAPP_MESSAGE_FR =
  "Bonjour Benson English Consulting Group, je souhaite obtenir des informations sur vos formations en anglais. Pourriez-vous m'indiquer les programmes disponibles, les tarifs et les prochaines sessions ? Merci.";

export const DEFAULT_WHATSAPP_MESSAGE_EN =
  "Hello Benson English Consulting Group, I would like to receive information about your English training programs. Could you please share the available tracks, pricing, and upcoming cohorts? Thank you.";

export function getWhatsAppUrl(message?: string, lang: 'fr' | 'en' = 'fr'): string {
  const defaultText = lang === 'fr' ? DEFAULT_WHATSAPP_MESSAGE_FR : DEFAULT_WHATSAPP_MESSAGE_EN;
  const text = message || defaultText;
  return `https://wa.me/${BECG_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function formatInquiryWhatsAppMessage(data: {
  fullName: string;
  phone: string;
  email?: string;
  program: string;
  level: string;
  format: string;
  message?: string;
}): string {
  return `Bonjour Benson English Consulting Group,
Je souhaite m'inscrire ou obtenir des informations :
- Nom : ${data.fullName}
- Téléphone : ${data.phone}
${data.email ? `- Email : ${data.email}\n` : ''}- Programme : ${data.program}
- Niveau estimé : ${data.level}
- Format souhaité : ${data.format}
${data.message ? `- Note : ${data.message}\n` : ''}
Pourriez-vous m'indiquer les modalités d'admission et les prochaines dates de rentrée ? Merci.`;
}
