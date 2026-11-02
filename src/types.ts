export type Language = 'fr' | 'en';

export type Page = 'home' | 'about' | 'programs' | 'why-us' | 'team' | 'contact' | 'privacy';

export type ProgramCategory = 'all' | 'general' | 'business' | 'coaching' | 'services';

export interface Program {
  id: string;
  category: ProgramCategory;
  titleFr: string;
  titleEn: string;
  shortDescFr: string;
  shortDescEn: string;
  fullDescFr: string;
  fullDescEn: string;
  levelFr: string;
  levelEn: string;
  durationFr: string;
  durationEn: string;
  formatFr: string;
  formatEn: string;
  targetFr: string;
  targetEn: string;
  modulesFr: string[];
  modulesEn: string[];
  outcomesFr: string[];
  outcomesEn: string[];
  icon: string;
  featured?: boolean;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  program: string;
  level: string;
  format: 'in_person' | 'online' | 'hybrid';
  preferredContact: 'whatsapp' | 'phone' | 'email';
  message: string;
}
