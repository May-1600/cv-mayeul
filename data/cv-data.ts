export const personalInfo = {
  name: "Mayeul de Charentenay",
  tagline: "Data Product Owner IA chez Orange",
  subtitle: "ESSEC BBA Global",
  pitch:
    "Je con\u00e7ois des outils IA qui remplacent des process manuels et font gagner du temps. Dashboards, automatisations, int\u00e9grations API \u2014 du concret, livr\u00e9 vite.",
  email: "mayeuldecharentenay@gmail.com",
  phone: "06 37 35 88 86",
  linkedin: "https://www.linkedin.com/in/mayeul-mareschal-de-charentenay/",
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
}

export const projects: Project[] = [
  {
    title: "Outil IA de pr\u00e9paration RDV",
    company: "Grand groupe t\u00e9l\u00e9com",
    description:
      "Outil IA g\u00e9n\u00e9rant des fiches personnalis\u00e9es pour 3 000+ commerciaux terrain. Mails contextualis\u00e9s, r\u00e9sum\u00e9 d\u2019activit\u00e9 client, veille sectorielle \u2014 le tout aliment\u00e9 par des donn\u00e9es CRM et web.",
    tags: ["Dataiku", "LLM", "API REST", "Python", "BigQuery"],
    metric: "3 000+ commerciaux \u00e9quip\u00e9s",
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: "bot",
  },
  {
    title: "Dashboard pilotage commercial",
    company: "Grand groupe t\u00e9l\u00e9com",
    description:
      "Dashboard de suivi performance commerciale et conformit\u00e9 des donn\u00e9es. Analyse de tables CRM vs backlog d\u2019exigences fonctionnelles, g\u00e9n\u00e9ration de livrables automatis\u00e9e.",
    tags: ["Salesforce", "Python", "Data Quality", "Automatisation"],
    metric: "Livrables g\u00e9n\u00e9r\u00e9s automatiquement",
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: "chart",
  },
  {
    title: "Site vitrine Next.js",
    company: "Side project",
    description:
      "Site web complet con\u00e7u et d\u00e9ploy\u00e9 en une soir\u00e9e. Design dark, animations Framer Motion, formulaire de contact, d\u00e9ploiement Vercel avec CI/CD automatique.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    metric: "Con\u00e7u et d\u00e9ploy\u00e9 en une soir\u00e9e",
    gradient: "from-emerald-500/20 to-teal-500/20",
    icon: "globe",
  },
  {
    title: "Pipelines d\u2019automatisation IA",
    company: "Side project",
    description:
      "Workflows N8N : RAG sur documents (Qdrant + LLM), prospection automatis\u00e9e (enrichissement Apollo, emails), int\u00e9gration multi-API avec orchestration intelligente.",
    tags: ["N8N", "RAG", "Qdrant", "Claude API", "Docker"],
    metric: "Processus manuels \u2192 automatis\u00e9s",
    gradient: "from-orange-500/20 to-amber-500/20",
    icon: "workflow",
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
      "Pilotage d\u2019outils IA pour la force de vente Pro/PME. Conception produit, coordination tech, d\u00e9ploiement d\u2019un outil utilis\u00e9 par 3 000+ commerciaux.",
    highlight: "Poste actuel",
  },
  {
    role: "Assistant Gestion Priv\u00e9e",
    company: "DNCA Finance",
    period: "D\u00e9c 2024 \u2014 Mar 2025",
    description:
      "Analyse financi\u00e8re et gestion de portefeuilles. KYC, conformit\u00e9 r\u00e9glementaire, relation client.",
  },
  {
    role: "BBA Global",
    company: "ESSEC Business School",
    period: "2022 \u2014 2026",
    description:
      "Programme Grande \u00c9cole avec sp\u00e9cialisation finance et entrepreneuriat. Saint-Malo, Paris, Cergy.",
  },
];

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "IA & LLM",
    icon: "brain",
    skills: [
      "Claude",
      "GPT-4",
      "Prompt Engineering",
      "RAG",
      "Fine-tuning",
      "Agents IA",
    ],
  },
  {
    name: "Data",
    icon: "database",
    skills: ["Dataiku", "BigQuery", "Python", "SQL", "API REST", "Qdrant"],
  },
  {
    name: "D\u00e9veloppement",
    icon: "code",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "N8N", "Docker"],
  },
  {
    name: "Business",
    icon: "briefcase",
    skills: [
      "Product Management",
      "Salesforce",
      "Gestion de projet",
      "Prospection",
    ],
  },
];
