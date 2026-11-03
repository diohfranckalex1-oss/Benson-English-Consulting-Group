import { Program } from '../types';

export const programsData: Program[] = [
  {
    id: 'beginners',
    category: 'general',
    titleFr: 'Anglais Débutant',
    titleEn: 'English for Beginners',
    shortDescFr: 'Construisez des bases solides pour commencer à vous exprimer en anglais dans la vie quotidienne.',
    shortDescEn: 'Build a strong foundation to start communicating in English in everyday situations.',
    fullDescFr: "Cette formation s'adresse aux apprenants n'ayant jamais pratiqué l'anglais ou souhaitant reprendre les fondamentaux de zéro avec une méthode rassurante, progressive et interactive.",
    fullDescEn: 'Designed for learners who have never studied English or want to restart from scratch with a supportive, step-by-step, and interactive methodology.',
    levelFr: 'A0 - A1 (Débutant complet & Faux débutant)',
    levelEn: 'A0 - A1 (Complete Beginner & False Beginner)',
    durationFr: '3 Mois (Sessions intensives ou régulières)',
    durationEn: '3 Months (Intensive or Regular cohorts)',
    formatFr: 'En présentiel à Bouaké & En ligne',
    formatEn: 'In-person in Bouaké & Live Online',
    targetFr: 'Étudiants, jeunes diplômés, adultes et professionnels souhaitant acquérir les bases sans blocage.',
    targetEn: 'Students, graduates, adults, and professionals seeking strong basics without hesitation.',
    modulesFr: [
      'Prononciation phonétique de base et sonorités anglaises',
      'Vocabulaire essentiel du quotidien (salutations, chiffres, famille, voyage)',
      'Grammaire pratique sans jargon : verbes d’action, présent, passé simple',
      'Écoute active et compréhension orale guidée',
      'Jeux de rôles et premières interactions orales sans stress'
    ],
    modulesEn: [
      'Basic phonetic pronunciation and English key sounds',
      'Essential daily vocabulary (greetings, numbers, family, travel)',
      'Practical intuitive grammar: action verbs, present, simple past',
      'Active listening and guided auditory comprehension',
      'Role-play exercises and stress-free first spoken conversations'
    ],
    outcomesFr: [
      'Comprendre des phrases simples et courantes',
      'Se présenter, poser des questions et donner des réponses basiques',
      'Vaincre l’inhibition et la peur de faire des erreurs à l’oral'
    ],
    outcomesEn: [
      'Understand simple everyday sentences and questions',
      'Introduce yourself, ask questions, and give basic answers',
      'Overcome anxiety and the fear of making mistakes while speaking'
    ],
    icon: 'BookOpen',
    featured: true
  },
  {
    id: 'intermediate',
    category: 'general',
    titleFr: 'Anglais Intermédiaire',
    titleEn: 'Intermediate English',
    shortDescFr: 'Perfectionnez votre fluidité, enrichissez votre vocabulaire et gagnez en spontanéité.',
    shortDescEn: 'Enhance your fluency, expand your vocabulary, and develop natural conversational ease.',
    fullDescFr: "Pour les personnes qui comprennent déjà les bases mais manquent de vocabulaire, hésitent lors de la prise de parole ou souhaitent structurer leurs idées en anglais avec aisance.",
    fullDescEn: 'Tailored for individuals who grasp the basics but lack vocabulary, hesitate when speaking, or wish to structure their thoughts smoothly in English.',
    levelFr: 'B1 - B2 (Intermédiaire)',
    levelEn: 'B1 - B2 (Intermediate)',
    durationFr: '3 Mois (Modules évolutifs)',
    durationEn: '3 Months (Progressive modules)',
    formatFr: 'En présentiel & En ligne (Cours du jour/soir)',
    formatEn: 'In-person & Online (Day/Evening schedules)',
    targetFr: 'Professionnels, étudiants universitaires et cadres ayant besoin d’élever leur niveau général.',
    targetEn: 'Professionals, university students, and managers seeking to step up their overall English proficiency.',
    modulesFr: [
      'Fluidité de l’élocution et réduction des pauses hésitantes',
      'Temps verbaux avancés, conditionnel et connecteurs logiques',
      'Compréhension de contenus audio et vidéo authentiques',
      'Débats thématiques d’actualité et argumentation',
      'Rédaction d’emails et synthèses claires'
    ],
    modulesEn: [
      'Speech fluency and hesitation reduction techniques',
      'Advanced tenses, conditionals, and logical connectors',
      'Comprehension of authentic audio and video media',
      'Thematic discussions, current affairs, and debate argumentation',
      'Writing clear structured emails and summaries'
    ],
    outcomesFr: [
      'Participer activement à des conversations sans chercher ses mots',
      'Exprimer son opinion, négocier et nuancer ses propos',
      'Comprendre des locuteurs natifs dans des situations variées'
    ],
    outcomesEn: [
      'Actively join discussions without constantly searching for words',
      'Express opinions, negotiate, and nuance arguments clearly',
      'Understand native speakers in diverse real-world contexts'
    ],
    icon: 'TrendingUp',
    featured: true
  },
  {
    id: 'spoken-english',
    category: 'coaching',
    titleFr: 'Expression Orale & Conversation',
    titleEn: 'Spoken English & Conversation',
    shortDescFr: 'Ateliers 100% oraux, mises en situation concrètes et perfectionnement de la prononciation.',
    shortDescEn: '100% oral workshops, real-life simulations, and pronunciation refinement.',
    fullDescFr: "Le programme phare pour débloquer votre parole. Fini la théorie passive : ici, vous parlez dès la première minute grâce à des conversations guidées et des scénarios de la vie réelle.",
    fullDescEn: 'Our flagship conversational program to unlock your spoken English. Move beyond passive learning: speak from minute one through guided interactions and real-life scenarios.',
    levelFr: 'Tous niveaux (Groupes homogènes par niveau)',
    levelEn: 'All levels (Grouped by proficiency cohorts)',
    durationFr: '3 Mois (Immersion interactive)',
    durationEn: '3 Months (Interactive immersion)',
    formatFr: 'Présentiel & Ateliers virtuels interactifs',
    formatEn: 'In-person & Interactive virtual workshops',
    targetFr: 'Toute personne bloquée par la gêne à l’oral ou cherchant un entraînement continu.',
    targetEn: 'Anyone feeling shy or hesitant when speaking English, or seeking regular practice.',
    modulesFr: [
      'Scénarios de conversation courante et improvisations dirigées',
      'Perfectionnement de l’accent, rythme de phrase et intonation',
      'Expressions idiomatiques modernes et tournures naturelles',
      'Débats interactifs sur l’entrepreneuriat, les voyages et la culture',
      'Techniques pour penser directement en anglais sans traduire'
    ],
    modulesEn: [
      'Everyday conversation scenarios and guided improvisations',
      'Accent refinement, sentence rhythm, and natural intonation',
      'Modern idioms, colloquial phrasing, and practical expressions',
      'Interactive debates on entrepreneurship, travel, and society',
      'Techniques to think directly in English without translating in your head'
    ],
    outcomesFr: [
      'Prendre la parole spontanément sans stress',
      'Adopter une prononciation claire et compréhensible',
      'Communiquer avec naturel et assurance'
    ],
    outcomesEn: [
      'Speak spontaneously and confidently without anxiety',
      'Adopt clear, intelligible, and professional pronunciation',
      'Communicate naturally and effortlessly with diverse speakers'
    ],
    icon: 'MessageSquare',
    featured: true
  },
  {
    id: 'professional-english',
    category: 'business',
    titleFr: 'Anglais Professionnel & des Affaires',
    titleEn: 'Professional & Business English',
    shortDescFr: 'Maîtrisez la communication en entreprise, les réunions, présentations et négociations.',
    shortDescEn: 'Master corporate communication, meetings, presentations, and business negotiations.',
    fullDescFr: "Conçu pour les cadres, managers, consultants et entrepreneurs qui évoluent dans un contexte bilingue ou international. Développez une posture assurée et un vocabulaire d'affaires précis.",
    fullDescEn: 'Tailored for executives, managers, consultants, and entrepreneurs operating in bilingual or international environments. Cultivate an authoritative business posture and precise corporate vocabulary.',
    levelFr: 'B1 à C1 (Intermédiaire à Avancé)',
    levelEn: 'B1 to C1 (Intermediate to Advanced)',
    durationFr: '3 Mois (Formule Corporate adaptable)',
    durationEn: '3 Months (Flexible corporate schedule)',
    formatFr: 'En présentiel, en entreprise ou en ligne',
    formatEn: 'In-person, On-site for companies, or Online',
    targetFr: 'Dirigeants, managers, commerciaux, professionnels RH, consultants et fonctionnaires internationaux.',
    targetEn: 'Executives, team leads, sales managers, HR professionals, consultants, and international officers.',
    modulesFr: [
      'Animation et participation active à des réunions en anglais',
      'Techniques de présentation percutante et pitch d’affaires',
      'Rédaction professionnelle : emails diplomatiques, mémos et rapports',
      'Négociation commerciale et gestion des objections clients',
      'Vocabulaire spécialisé : finance, management, tech, logistique'
    ],
    modulesEn: [
      'Leading and participating actively in business meetings in English',
      'Delivering persuasive presentations and executive pitches',
      'Professional correspondence: diplomatic emails, memos, and reports',
      'Commercial negotiations and addressing client objections',
      'Specialized business lexicon: finance, management, tech, logistics'
    ],
    outcomesFr: [
      'Diriger des réunions et échanger avec des partenaires étrangers en toute aisance',
      'Défendre des propositions commerciales avec conviction',
      'Valoriser son profil pour des postes à responsabilité internationale'
    ],
    outcomesEn: [
      'Lead meetings and engage international partners with authority',
      'Defend commercial proposals persuasively',
      'Boost your career profile for international and high-impact roles'
    ],
    icon: 'Briefcase',
    featured: true
  },
  {
    id: 'translation',
    category: 'services',
    titleFr: 'Services de Traduction de Documents',
    titleEn: 'Document Translation Services',
    shortDescFr: 'Traduction rigoureuse de documents professionnels, académiques et institutionnels.',
    shortDescEn: 'Precise translation of corporate, academic, and institutional documents.',
    fullDescFr: "Notre pôle de services linguistiques assure la traduction fidèle et contextualisée de vos documents de l'anglais vers le français et du français vers l'anglais, respectant la terminologie de votre secteur d'activité.",
    fullDescEn: 'Our language services department provides accurate, context-aware translations between English and French, respecting the exact terminology of your industry sector.',
    levelFr: 'Service aux entreprises et particuliers',
    levelEn: 'Corporate & Individual Language Service',
    durationFr: 'Délais adaptés à vos urgences (sur devis)',
    durationEn: 'Turnaround tailored to your deadlines (upon quote)',
    formatFr: 'Livraison numérique sécurisée et certifiée',
    formatEn: 'Secure and certified digital delivery',
    targetFr: 'Entreprises, institutions, ONG, chercheurs, étudiants préparant des candidatures à l’étranger.',
    targetEn: 'Companies, institutions, NGOs, researchers, and students applying abroad.',
    modulesFr: [
      'Traduction de rapports d’activité, bilans et projets institutionnels',
      'Traduction de CVs, lettres de motivation et dossiers académiques',
      'Traduction de supports marketing, brochures et sites web',
      'Relecture, révision stylistique et harmonisation terminologique'
    ],
    modulesEn: [
      'Activity reports, financial summaries, and institutional projects',
      'CVs, cover letters, and academic application portfolios',
      'Marketing materials, sales brochures, and website content',
      'Proofreading, stylistic editing, and terminology consistency checks'
    ],
    outcomesFr: [
      'Des documents prêts à être transmis à vos partenaires internationaux',
      'Respect strict de la confidentialité et des délais',
      'Qualité stylistique et exactitude sémantique garantie'
    ],
    outcomesEn: [
      'Documents ready for international partners and overseas institutions',
      'Strict confidentiality and on-time turnaround guaranteed',
      'Stylistic elegance and semantic precision preserved'
    ],
    icon: 'FileText'
  },
  {
    id: 'interpretation',
    category: 'services',
    titleFr: 'Interprétation de Conférence',
    titleEn: 'Conference Interpretation',
    shortDescFr: 'Interprétation simultanée et consécutive pour séminaires, colloques et réunions d’affaires.',
    shortDescEn: 'Simultaneous and consecutive interpretation for conferences, seminars, and business summits.',
    fullDescFr: "Facilitez les échanges lors de vos événements bilingues en Côte d'Ivoire et dans la sous-région. Des interprètes professionnels pour garantir une communication fluide et dynamique entre vos intervenants et participants.",
    fullDescEn: 'Facilitate seamless communication at your bilingual summits in Côte d’Ivoire and across the region. Professional interpreters delivering fluid and dynamic message delivery for your speakers and attendees.',
    levelFr: 'Prestation événementielle B2B',
    levelEn: 'Corporate & Event Service',
    durationFr: 'À la demi-journée, journée ou mission plurijournalière',
    durationEn: 'Half-day, full-day, or multi-day deployments',
    formatFr: 'Sur site (Bouaké & région) ou en visioconférence',
    formatEn: 'On-site (Bouaké & region) or Remote webinars',
    targetFr: 'Organisateurs d’événements, ministères, agences internationales, associations professionnelles, multinationales.',
    targetEn: 'Event organizers, ministries, multilateral agencies, trade associations, and multinational corporations.',
    modulesFr: [
      'Interprétation simultanée de conférence (avec cabines et casques)',
      'Interprétation consécutive pour allocutions, conférences de presse et délégations',
      'Interprétation de liaison pour négociations bilatérales et visites de sites',
      'Coordination technique et logistique des régies d’interprétation'
    ],
    modulesEn: [
      'Simultaneous conference interpretation (booths and headsets)',
      'Consecutive interpretation for speeches, press events, and delegations',
      'Liaison interpretation for bilateral negotiations and site visits',
      'Technical coordination and audio interpretation booth logistics'
    ],
    outcomesFr: [
      'Compréhension immédiate entre participants anglophones et francophones',
      'Crédibilité et prestige renforcés pour vos événements internationaux',
      'Fluidité totale des débats et séances de questions-réponses'
    ],
    outcomesEn: [
      'Instant comprehension between English and French participants',
      'Elevated credibility and prestige for your international events',
      'Seamless Q&A sessions and interactive panel discussions'
    ],
    icon: 'Mic'
  },
  {
    id: 'exam-prep',
    category: 'general',
    titleFr: 'Préparation aux Certifications & Examens',
    titleEn: 'Certification & Exam Preparation',
    shortDescFr: 'Entraînement méthodologique ciblé pour réussir vos tests officiels d’anglais.',
    shortDescEn: 'Targeted methodological coaching to succeed in official English examinations.',
    fullDescFr: "Préparez vos tests d'anglais requis pour vos études à l'international, bourses ou opportunités d'expatriation. Méthodologie d'épreuves, gestion du temps et entraînements intensifs sous conditions d'examen.",
    fullDescEn: 'Prepare for English tests required for international studies, scholarship programs, or global relocations. Master test strategies, timing, and intensive simulated practice sessions.',
    levelFr: 'B1 à C2 (Selon l’examen visé)',
    levelEn: 'B1 to C2 (Depending on target test)',
    durationFr: 'Modules intensifs de 4 à 8 semaines',
    durationEn: '4 to 8 weeks intensive cohorts',
    formatFr: 'En présentiel & coaching numérique',
    formatEn: 'In-person & digital exam coaching',
    targetFr: 'Candidats aux études à l’étranger, professionnels visant une mobilité internationale ou une immigration qualifiée.',
    targetEn: 'Candidates for overseas universities, professionals aiming for international mobility or qualified relocation.',
    modulesFr: [
      'Stratégies décisives pour chaque section : Listening, Reading, Writing, Speaking',
      'Examens blancs chronométrés et correction détaillée individualisée',
      'Enrichissement lexical académique et formules d’argumentation',
      'Techniques de gestion du temps et maîtrise du stress le jour J'
    ],
    modulesEn: [
      'Decisive strategies for each section: Listening, Reading, Writing, Speaking',
      'Timed mock exams with detailed individualized feedback',
      'Academic vocabulary building and essay structure templates',
      'Time management tactics and test-day anxiety management'
    ],
    outcomesFr: [
      'Maîtriser le format exact et les exigences de notation',
      'Optimiser son score pour décrocher l’admission ou le visa visé',
      'Gagner en rapidité et efficacité face aux pièges courants'
    ],
    outcomesEn: [
      'Master the exact format and evaluation criteria of the examination',
      'Maximize your score to secure university admission or visa requirements',
      'Develop speed and precision while avoiding common test traps'
    ],
    icon: 'GraduationCap'
  },
  {
    id: 'coaching',
    category: 'coaching',
    titleFr: 'Coaching Individuel & en Groupe',
    titleEn: 'Group & Individual Coaching',
    shortDescFr: 'Accompagnement sur-mesure adapté à votre rythme, vos disponibilités et vos défis spécifiques.',
    shortDescEn: 'Customized coaching tailored to your schedule, learning pace, and individual goals.',
    fullDescFr: "Bénéficiez d'un suivi privilégié avec un formateur dédié. Que vous préfériez l'énergie stimulante d'un petit groupe ou la personnalisation absolue d'un tête-à-tête, nous adaptons les séances à votre agenda.",
    fullDescEn: 'Benefit from dedicated mentorship with an expert trainer. Whether you thrive in small collaborative groups or prefer the hyper-personalized focus of one-on-one sessions, we adapt to your calendar.',
    levelFr: 'Sur-mesure (Du grand débutant au perfectionnement C2)',
    levelEn: 'Tailored (From beginner to C2 refinement)',
    durationFr: 'Forfaits flexibles (10h, 20h, 40h ou programme 3 mois)',
    durationEn: 'Flexible packages (10h, 20h, 40h, or 3-month track)',
    formatFr: 'En présentiel (domicile / bureau) ou Visioconférence',
    formatEn: 'In-person (office / home) or Live Video calls',
    targetFr: 'Dirigeants très occupés, personnalités publiques, diplomates ou professionnels aux horaires atypiques.',
    targetEn: 'Busy executives, public figures, diplomats, or professionals with non-standard schedules.',
    modulesFr: [
      'Diagnostic complet personnalisé des forces et axes d’amélioration',
      'Programme 100% calibré sur vos objectifs réels du moment (présentation, entretien, voyage)',
      'Horaires flexibles : tôt le matin, pause déjeuner, soirées ou samedis',
      'Retours correctifs continus et enregistrements d’entraînement'
    ],
    modulesEn: [
      'Comprehensive personalized assessment of strengths and growth areas',
      '100% tailored curriculum focused on immediate needs (interview, pitch, trip)',
      'Flexible time slots: early morning, lunch hours, evenings, or Saturdays',
      'Continuous corrective feedback and audio/video practice analysis'
    ],
    outcomesFr: [
      'Progression accélérée sans contrainte rigide d’horaires de classe',
      'Résolution ciblée de vos blocages personnels de prononciation ou de vocabulaire',
      'Confiance absolue dans vos prises de parole stratégiques'
    ],
    outcomesEn: [
      'Accelerated learning curve without rigid classroom constraints',
      'Targeted resolution of personal speech blocks or specific vocabulary gaps',
      'Absolute confidence during critical presentations and interactions'
    ],
    icon: 'Users'
  }
];
