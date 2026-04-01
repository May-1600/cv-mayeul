export const personalInfo = {
  name: "Mayeul de Charentenay",
  tagline: "Je vibe-code des outils IA qui tournent en prod",
  subtitle: "Data PO IA chez Orange \u00b7 ESSEC BBA Global",
  pitch:
    "3 000 commerciaux utilisent un outil que j\u2019ai con\u00e7u chez Orange. La nuit, je construis des syst\u00e8mes IA pour PME. Dashboards, automatisations, int\u00e9grations API \u2014 livr\u00e9s en jours, pas en mois.",
  email: "mayeuldecharentenay@gmail.com",
  linkedin: "https://www.linkedin.com/in/mayeul-de-charentenay/",
  photo: "/photo-mayeul.jpg",
};

export interface Project {
  title: string;
  company: string;
  description: string;
  tags: string[];
  metric?: string;
  gradient: string;
  icon: string;
  url?: string;
}

export const projects: Project[] = [
  {
    title: "Outil IA de pr\u00e9paration RDV commerciaux",
    company: "Grand groupe t\u00e9l\u00e9com",
    description:
      "Outil IA g\u00e9n\u00e9rant des fiches de pr\u00e9paration RDV personnalis\u00e9es pour la force de vente. Mails contextualis\u00e9s, r\u00e9sum\u00e9 d\u2019activit\u00e9 client, veille sectorielle automatique. Aliment\u00e9 par CRM, API d\u2019enrichissement et LLM.",
    tags: ["Dataiku", "LLM", "API REST", "Python", "BigQuery"],
    metric: "3 000+ commerciaux \u00e9quip\u00e9s",
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: "bot",
  },
  {
    title: "Syst\u00e8me IA local pour PME",
    company: "Side project",
    description:
      "Infrastructure IA cl\u00e9 en main d\u00e9ployable sur Mac Mini. Modules : RAG documentaire, chatbot, OCR de factures, CRM, automatisation SMS. Orchestration N8N + LLM local + base vectorielle.",
    tags: ["N8N", "Ollama", "Qdrant", "Docker", "Next.js", "PostgreSQL"],
    metric: "6 modules m\u00e9tier op\u00e9rationnels",
    gradient: "from-emerald-500/20 to-teal-500/20",
    icon: "workflow",
  },
  {
    title: "Site web Restaurant du Golf",
    company: "Projet client",
    description:
      "Site complet pour un restaurant gastronomique : r\u00e9servation, carte interactive, administration. Design responsive, authentification et base de donn\u00e9es cloud.",
    tags: ["React", "TypeScript", "Tailwind", "Supabase", "Vite"],
    metric: "En production",
    gradient: "from-orange-500/20 to-amber-500/20",
    icon: "globe",
    url: "https://restaurantdugolf-legreen.vercel.app",
  },
  {
    title: "R\u00e9seau social interne d\u2019\u00e9quipe",
    company: "Grand groupe t\u00e9l\u00e9com",
    description:
      "Plateforme sociale interne pour connecter les collaborateurs : profils, comp\u00e9tences, recommandations, carte collaborative des restaurants avec g\u00e9olocalisation.",
    tags: ["JavaScript", "Leaflet.js", "OpenStreetMap", "CSS Grid"],
    metric: "D\u00e9ploy\u00e9 en interne",
    gradient: "from-red-500/20 to-orange-500/20",
    icon: "globe",
  },
  {
    title: "Life Dashboard",
    company: "Side project",
    description:
      "Application mobile centralisant emails (Gmail/Outlook), agent IA, et commandes vocales. Chiffrement AES-256, OAuth2, speech-to-text et synth\u00e8se vocale int\u00e9gr\u00e9s.",
    tags: ["Flutter", "Dart", "Supabase", "Google APIs", "IA vocale"],
    metric: "App cross-platform iOS/Android",
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: "chart",
  },
  {
    title: "Boutique de beats en ligne",
    company: "Projet client",
    description:
      "E-commerce Shopify pour un producteur musical. Catalogue de beats, pr\u00e9\u00e9coute int\u00e9gr\u00e9e, paiement en ligne, design custom sur th\u00e8me Liquid.",
    tags: ["Shopify", "Liquid", "E-commerce", "Design"],
    metric: "En production",
    gradient: "from-yellow-500/20 to-orange-500/20",
    icon: "globe",
    url: "https://travebeats.com",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlight?: string;
}

export const experiences: Experience[] = [
  {
    role: "Data Product Owner IA",
    company: "Orange",
    period: "Sep 2025 \u2014 Pr\u00e9sent",
    description:
      "Conception et pilotage d\u2019outils IA pour la force de vente Pro/PME. Coordination tech (Dataiku, LLM, API), sp\u00e9cifications produit, d\u00e9ploiement \u00e0 l\u2019\u00e9chelle.",
    highlight: "Poste actuel",
  },
  {
    role: "BBA Global",
    company: "ESSEC Business School",
    period: "2022 \u2014 2026",
    description:
      "Programme Grande \u00c9cole. Sp\u00e9cialisation finance et entrepreneuriat. Responsable communication du BDE.",
  },
];

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "IA & Automatisation",
    icon: "brain",
    skills: [
      "Claude",
      "Ollama",
      "Prompt Engineering",
      "RAG",
      "Agents IA",
      "N8N",
    ],
  },
  {
    name: "Data",
    icon: "database",
    skills: ["Dataiku", "BigQuery", "Python", "SQL", "Qdrant", "Supabase"],
  },
  {
    name: "D\u00e9veloppement",
    icon: "code",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Flutter", "Docker"],
  },
  {
    name: "Business",
    icon: "briefcase",
    skills: [
      "Product Management",
      "Salesforce",
      "Prospection",
      "Gestion de projet",
    ],
  },
];
