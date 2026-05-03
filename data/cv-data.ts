export const personalInfo = {
  name: "Mayeul de Charentenay",
  tagline: "Builder IA · Data Product Owner",
  subtitle: "Data PO IA chez Orange · Co-fondateur IA-Opti · ESSEC BBA Global",
  pitch:
    "Alternant Data Product Owner IA chez Orange Business et co-fondateur d'IA-Opti, cabinet d'implémentation IA pour PME sélectionné par ESSEC Ventures. Je conçois et déploie des solutions IA en production. Disponible en CDI à Paris en janvier 2027.",
  email: "mayeuldecharentenay@gmail.com",
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
  emoji: string;
  url?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Outil IA de préparation RDV commerciaux",
    company: "Grand groupe télécom",
    description:
      "Outil IA générant des fiches de préparation RDV personnalisées pour la force de vente.",
    longDescription:
      "Outil IA déployé auprès de 3 000+ commerciaux terrain. Génère des fiches de préparation RDV personnalisées avec : mails contextualisés par secteur d'activité, résumé de l'activité client (CRM), veille sectorielle automatique, et contexte réseaux sociaux. Alimenté par des données CRM Salesforce, des API d'enrichissement (Pappers), et un LLM interne + GPT-4.1 pour la génération. Pipeline orchestré sur Dataiku avec logs BigQuery.",
    tags: ["Dataiku", "LLM", "API REST", "Python", "BigQuery"],
    metric: "3 000+ commerciaux équipés",
    gradient: "from-blue-500/20 to-cyan-500/20",
    emoji: "🤖",
  },
  {
    title: "Système IA local pour PME",
    company: "Side project",
    description:
      "Infrastructure IA clé en main déployable sur Mac Mini avec 6 modules métier.",
    longDescription:
      "Système IA complet déployable sur Mac Mini ou mini-PC chez un client PME. Architecture Docker Compose : N8N (orchestration de workflows), Ollama (LLM local Mistral/Qwen), Qdrant (base vectorielle), PostgreSQL. Frontend Next.js avec interface chat RAG, pilotage des automatisations, et dashboard KPIs. 6 modules : RAG documentaire, chatbot site web, OCR factures, CRM/RDV, automatisation SMS, SEO/GEO. Tout tourne en local — pas de dépendance cloud.",
    tags: ["N8N", "Ollama", "Qdrant", "Docker", "Next.js", "PostgreSQL"],
    metric: "6 modules métier opérationnels",
    gradient: "from-emerald-500/20 to-teal-500/20",
    emoji: "⚙️",
    demo: "/projects/box-demo.gif",
  },
  {
    title: "Site web Restaurant du Golf",
    company: "Projet client",
    description:
      "Site complet pour un restaurant gastronomique : réservation, carte, administration.",
    longDescription:
      "Site web complet pour Le Green, restaurant gastronomique au golf de Vichy. Fonctionnalités : réservation en ligne, carte interactive du menu, interface d'administration pour le restaurateur, authentification Supabase, design responsive. Stack moderne React + TypeScript + Tailwind, déployé sur Vercel avec CI/CD automatique.",
    tags: ["React", "TypeScript", "Tailwind", "Supabase", "Vite"],
    metric: "En production",
    gradient: "from-orange-500/20 to-amber-500/20",
    emoji: "🍽️",
    url: "https://restaurantdugolf-legreen.vercel.app",
    demo: "/projects/restaurant-demo.gif",
  },
  {
    title: "Réseau social interne d'équipe",
    company: "Grand groupe télécom",
    description:
      "Plateforme pour connecter les collaborateurs : profils, compétences, carte collaborative.",
    longDescription:
      "Hub digital interne pour une équipe IA. Permet aux collaborateurs de partager leur profil (rôle, compétences, bio), de rechercher des experts par compétence, et de contribuer à une carte collaborative des restaurants à proximité avec géolocalisation Leaflet.js + OpenStreetMap. Construit en JavaScript vanilla pour une intégration légère sans dépendances lourdes.",
    tags: ["JavaScript", "Leaflet.js", "OpenStreetMap", "CSS Grid"],
    metric: "Déployé en interne",
    gradient: "from-red-500/20 to-orange-500/20",
    emoji: "👥",
    demo: "/projects/entrenoo-demo.gif",
  },
  {
    title: "Boutique de beats en ligne",
    company: "Projet client",
    description:
      "E-commerce Shopify pour un producteur musical. Catalogue, préécoute, paiement.",
    longDescription:
      "Boutique e-commerce Shopify pour Trave, producteur musical. Catalogue de beats avec préécoute intégrée, paiement en ligne (Stripe via Shopify), design custom sur thème Liquid, pages produit optimisées. Le client gère son catalogue en autonomie depuis le back-office Shopify.",
    tags: ["Shopify", "Liquid", "E-commerce", "Design"],
    metric: "En production",
    gradient: "from-yellow-500/20 to-orange-500/20",
    emoji: "🎵",
    url: "https://travebeats.com",
    demo: "/projects/beats-demo.gif",
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
    company: "Orange Business",
    period: "Sep 2025 — Déc 2026",
    description:
      "Conception et optimisation de solutions IA pour les équipes commerciales B2B (génération d'emails de prospection, outils d'aide à la vente). Évaluation comparative de LLMs sur cas d'usage commerciaux, restitution en CODIR. Animation d'une communauté interne IA et organisation d'ateliers d'acculturation pour 50+ collaborateurs. Pilotage qualité des données et conformité des réponses générées par l'IA.",
    highlight: "Poste actuel",
  },
  {
    role: "Co-fondateur",
    company: "IA-Opti",
    period: "Mai 2025 — Févr 2026",
    description:
      "Cabinet d'implémentation IA dédié aux PME. Solutions IA opérationnelles en 2 à 5 semaines à prix fixe : qualification de leads, chatbots, dashboards automatisés, génération documentaire, automatisation CRM. Audit des processus métier et identification des gains de productivité par l'IA. Formation des équipes et création de playbooks IA par poste (prompts, workflows, bonnes pratiques).",
    highlight: "ESSEC Ventures",
  },
  {
    role: "Stage Assistant Gestion Privée",
    company: "DNCA Finance",
    period: "Déc 2024 — Mars 2025",
    description:
      "Mises à jour KYC et conformité réglementaire des dossiers clients HNW, ouvertures et clôtures de comptes en middle-office. Préparation des rendez-vous gérants, maintien et enrichissement des outils CRM.",
  },
  {
    role: "Responsable Communication",
    company: "BDE Global BBA ESSEC (RNK)",
    period: "Janv 2024 — Janv 2025",
    description:
      "Pilotage de la stratégie de communication (identité visuelle, supports print et digitaux, réseaux sociaux). Création et lancement d'une application web utilisée par 800+ étudiants (gestion d'événements, vie associative). Montée en compétences autonome After Effects et Premiere Pro en 2 mois.",
  },
  {
    role: "BBA Global",
    company: "ESSEC Business School",
    period: "2022 — 2026",
    description:
      "Programme Grande École à Cergy. Mobilité intercampus au Maroc (jan – avr 2024). Échange au Japon (mars – août 2025).",
  },
];

export interface SkillCategory {
  name: string;
  emoji: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "IA & Automatisation",
    emoji: "🧠",
    skills: [
      "Claude API",
      "OpenAI",
      "Ollama",
      "Prompt Engineering",
      "RAG",
      "Agents IA",
      "MCP",
      "n8n",
    ],
  },
  {
    name: "Data",
    emoji: "📊",
    skills: ["Dataiku", "BigQuery", "Python", "SQL", "Qdrant", "PostgreSQL", "Supabase"],
  },
  {
    name: "Développement",
    emoji: "💻",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Flutter", "Docker"],
  },
  {
    name: "Business",
    emoji: "💼",
    skills: [
      "Product Management",
      "Salesforce",
      "Apollo",
      "Prospection",
      "Notion",
      "Obsidian",
    ],
  },
];
