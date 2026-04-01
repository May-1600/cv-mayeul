export const personalInfo = {
  name: "Mayeul de Charentenay",
  tagline: "Je vibe-code des outils IA qui tournent en prod",
  subtitle: "Data PO IA chez Orange \u00b7 ESSEC BBA Global",
  pitch:
    "3 000 commerciaux utilisent un outil que j\u2019ai con\u00e7u chez Orange. La nuit, je construis des syst\u00e8mes IA pour PME. Dashboards, automatisations, int\u00e9grations API \u2014 livr\u00e9s en jours, pas en mois.",
  email: "mayeul.mareschaldecharentenay@essec.edu",
  linkedin: "https://www.linkedin.com/in/mayeul-de-charentenay/",
  photo: "/photo-mayeul.jpg",
};

export interface Project {
  title: string;
  company: string;
  description: string;
  longDescription: string;
  tags: string[];
  metric?: string;
  gradient: string;
  icon: string;
  url?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    title: "Outil IA de pr\u00e9paration RDV commerciaux",
    company: "Grand groupe t\u00e9l\u00e9com",
    description:
      "Outil IA g\u00e9n\u00e9rant des fiches de pr\u00e9paration RDV personnalis\u00e9es pour la force de vente.",
    longDescription:
      "Outil IA d\u00e9ploy\u00e9 aupr\u00e8s de 3 000+ commerciaux terrain. G\u00e9n\u00e8re des fiches de pr\u00e9paration RDV personnalis\u00e9es avec : mails contextualis\u00e9s par secteur d\u2019activit\u00e9, r\u00e9sum\u00e9 de l\u2019activit\u00e9 client (CRM), veille sectorielle automatique, et contexte r\u00e9seaux sociaux. Aliment\u00e9 par des donn\u00e9es CRM Salesforce, des API d\u2019enrichissement (Pappers), et un LLM interne + GPT-4.1 pour la g\u00e9n\u00e9ration. Pipeline orchestr\u00e9 sur Dataiku avec logs BigQuery.",
    tags: ["Dataiku", "LLM", "API REST", "Python", "BigQuery"],
    metric: "3 000+ commerciaux \u00e9quip\u00e9s",
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: "bot",
    images: ["/projects/frpv-placeholder.svg"],
  },
  {
    title: "Syst\u00e8me IA local pour PME",
    company: "Side project",
    description:
      "Infrastructure IA cl\u00e9 en main d\u00e9ployable sur Mac Mini avec 6 modules m\u00e9tier.",
    longDescription:
      "Syst\u00e8me IA complet d\u00e9ployable sur Mac Mini ou mini-PC chez un client PME. Architecture Docker Compose : N8N (orchestration de workflows), Ollama (LLM local Mistral/Qwen), Qdrant (base vectorielle), PostgreSQL. Frontend Next.js avec interface chat RAG, pilotage des automatisations, et dashboard KPIs. 6 modules : RAG documentaire, chatbot site web, OCR factures, CRM/RDV, automatisation SMS, SEO/GEO. Tout tourne en local \u2014 pas de d\u00e9pendance cloud.",
    tags: ["N8N", "Ollama", "Qdrant", "Docker", "Next.js", "PostgreSQL"],
    metric: "6 modules m\u00e9tier op\u00e9rationnels",
    gradient: "from-emerald-500/20 to-teal-500/20",
    icon: "workflow",
    images: ["/projects/box-1.png", "/projects/box-2.png"],
  },
  {
    title: "Site web Restaurant du Golf",
    company: "Projet client",
    description:
      "Site complet pour un restaurant gastronomique : r\u00e9servation, carte, administration.",
    longDescription:
      "Site web complet pour Le Green, restaurant gastronomique au golf de Vichy. Fonctionnalit\u00e9s : r\u00e9servation en ligne, carte interactive du menu, interface d\u2019administration pour le restaurateur, authentification Supabase, design responsive. Stack moderne React + TypeScript + Tailwind, d\u00e9ploy\u00e9 sur Vercel avec CI/CD automatique.",
    tags: ["React", "TypeScript", "Tailwind", "Supabase", "Vite"],
    metric: "En production",
    gradient: "from-orange-500/20 to-amber-500/20",
    icon: "globe",
    url: "https://restaurantdugolf-legreen.vercel.app",
    images: ["/projects/restaurant-1.png", "/projects/restaurant-2.png"],
  },
  {
    title: "R\u00e9seau social interne d\u2019\u00e9quipe",
    company: "Grand groupe t\u00e9l\u00e9com",
    description:
      "Plateforme pour connecter les collaborateurs : profils, comp\u00e9tences, carte collaborative.",
    longDescription:
      "Hub digital interne pour une \u00e9quipe IA. Permet aux collaborateurs de partager leur profil (r\u00f4le, comp\u00e9tences, bio), de rechercher des experts par comp\u00e9tence, et de contribuer \u00e0 une carte collaborative des restaurants \u00e0 proximit\u00e9 avec g\u00e9olocalisation Leaflet.js + OpenStreetMap. Construit en JavaScript vanilla pour une int\u00e9gration l\u00e9g\u00e8re sans d\u00e9pendances lourdes.",
    tags: ["JavaScript", "Leaflet.js", "OpenStreetMap", "CSS Grid"],
    metric: "D\u00e9ploy\u00e9 en interne",
    gradient: "from-red-500/20 to-orange-500/20",
    icon: "globe",
    images: ["/projects/entrenoo-1.jpg", "/projects/entrenoo-2.png"],
  },
  {
    title: "Boutique de beats en ligne",
    company: "Projet client",
    description:
      "E-commerce Shopify pour un producteur musical. Catalogue, pr\u00e9\u00e9coute, paiement.",
    longDescription:
      "Boutique e-commerce Shopify pour Trave, producteur musical. Catalogue de beats avec pr\u00e9\u00e9coute int\u00e9gr\u00e9e, paiement en ligne (Stripe via Shopify), design custom sur th\u00e8me Liquid, pages produit optimis\u00e9es. Le client g\u00e8re son catalogue en autonomie depuis le back-office Shopify.",
    tags: ["Shopify", "Liquid", "E-commerce", "Design"],
    metric: "En production",
    gradient: "from-yellow-500/20 to-orange-500/20",
    icon: "globe",
    url: "https://travebeats.com",
    images: ["/projects/travebeats-1.png", "/projects/travebeats-2.png"],
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
