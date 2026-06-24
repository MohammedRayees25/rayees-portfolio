/**
 * Central content source for the portfolio.
 * Editing copy / links here updates the entire site.
 */

export const SITE = {
  name: "Mohammed Rayees",
  shortName: "Rayees",
  brand: "Mohammed Rayees Portfolio",
  brandTagline: "Data Engineer | Analytics Engineer | AI Engineer",
  roles: [
    "Data Engineer",
    "Analytics Engineer",
    "AI Engineer",
    "GenAI Builder",
    "Vibe Coder",
  ],
  tagline:
    "Building scalable data platforms, analytics solutions, and AI-powered applications.",
  url: "https://mohammedrayees.dev",
  email: "hello@flyingfish.in",
  whatsapp: "9500152689",
  whatsappLink: "https://wa.me/919500152689",
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/MohammedRayees25",
    githubUser: "MohammedRayees25",
    linkedin: "https://www.linkedin.com/in/mohammed-rayees25",
  },
};

export const ABOUT = {
  highlights: [
    { label: "Years Experience", value: "2+", suffix: "" },
    { label: "Former HCL Associate", value: "HCL", suffix: "" },
    { label: "Projects Shipped", value: "10", suffix: "+" },
    { label: "LLMs Integrated", value: "4", suffix: "+" },
  ],
  paragraphs: [
    "I'm a Data & AI Engineer with 2+ years of experience designing and shipping production-grade data platforms and intelligent applications.",
    "As a former Associate at HCL Technologies, I specialized in SQL analysis, data validation, and reporting automation — delivering measurable business impact in healthcare analytics.",
    "Today I build scalable data pipelines, cloud-native analytics solutions, and GenAI-powered products. My toolkit spans Databricks, PySpark, Airflow, dbt, Azure, AWS, and the modern LLM stack.",
  ],
  focus: ["SQL", "Data Engineering", "Cloud", "GenAI"],
};

export interface SkillCategory {
  title: string;
  accent: string; // tailwind gradient classes
  skills: { name: string; level: number }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Data Engineering",
    accent: "from-sky-500 to-blue-600",
    skills: [
      { name: "SQL", level: 95 },
      { name: "Python", level: 92 },
      { name: "PySpark", level: 88 },
      { name: "Spark SQL", level: 85 },
      { name: "Databricks", level: 87 },
      { name: "Airflow", level: 80 },
      { name: "dbt", level: 82 },
    ],
  },
  {
    title: "Cloud",
    accent: "from-cyan-500 to-teal-600",
    skills: [
      { name: "Azure", level: 88 },
      { name: "AWS", level: 80 },
    ],
  },
  {
    title: "Analytics",
    accent: "from-amber-500 to-orange-600",
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Excel", level: 92 },
    ],
  },
  {
    title: "AI / GenAI",
    accent: "from-fuchsia-500 to-purple-600",
    skills: [
      { name: "OpenAI", level: 90 },
      { name: "Anthropic", level: 88 },
      { name: "Ollama", level: 84 },
      { name: "LangChain", level: 85 },
      { name: "RAG", level: 86 },
      { name: "Prompt Engineering", level: 92 },
      { name: "AI Agents", level: 84 },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  category: string;
  stats?: { label: string; value: string }[];
  features?: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "LinkedIn Outreach Automation",
    description:
      "Production-ready LinkedIn outreach automation platform built using Playwright, Google Sheets, SQLite, OpenAI, Anthropic, OpenRouter, and Ollama.",
    category: "AI / Automation",
    featured: true,
    github: "https://github.com/MohammedRayees25/linkedin-outreach-automation",
    tech: [
      "Playwright",
      "Python",
      "SQLite",
      "OpenAI",
      "Anthropic",
      "Ollama",
      "OpenRouter",
    ],
    features: [
      "AI-generated personalization",
      "Follow-up scheduling",
      "Human review workflow",
      "Multi-LLM support",
      "Automated outreach pipeline",
    ],
    stats: [
      { label: "Automated Outreach", value: "100%" },
      { label: "AI Personalization", value: "AI" },
      { label: "Multi-LLM Architecture", value: "4+" },
    ],
  },
  {
    title: "Formula 1 Race Analytics Platform",
    description:
      "Built an end-to-end Azure Data Engineering solution using Azure Data Factory, Databricks, PySpark, and Formula 1 datasets.",
    category: "Data Engineering",
    tech: ["Azure Data Factory", "Databricks", "PySpark", "Azure", "Delta Lake"],
  },
  {
    title: "Business Insights 360",
    description:
      "Power BI executive dashboard delivering sales, finance, marketing, and supply chain insights.",
    category: "Analytics",
    tech: ["Power BI", "DAX", "Power Query", "SQL"],
  },
  {
    title: "Maple Hardware Analytics Dashboard",
    description:
      "Interactive Tableau dashboard improving decision-making and business visibility.",
    category: "Analytics",
    tech: ["Tableau", "SQL", "Data Modeling"],
  },
];

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "HCL Technologies",
    role: "Associate",
    period: "2022 — 2024",
    responsibilities: [
      "SQL Analysis",
      "Data Validation",
      "Reporting Automation",
      "Business Intelligence",
      "Healthcare Analytics",
    ],
    achievements: [
      "Reduced dispute resolution time by 30%",
      "Improved reporting accuracy",
      "Delivered actionable business insights",
    ],
  },
];

export const ARCHITECTURE_STEPS = [
  { label: "Data Sources", desc: "APIs, databases, files & streams", icon: "Database" },
  { label: "Airflow", desc: "Orchestration & scheduling", icon: "Workflow" },
  { label: "dbt", desc: "Transformation & modeling", icon: "Boxes" },
  { label: "Databricks", desc: "Lakehouse compute & PySpark", icon: "Cpu" },
  { label: "Data Warehouse", desc: "Curated, governed storage", icon: "Warehouse" },
  { label: "Power BI", desc: "Analytics & dashboards", icon: "BarChart3" },
  { label: "GenAI Applications", desc: "LLM-powered products", icon: "Sparkles" },
];

export const GITHUB_STATS = [
  { label: "Contributions", value: 1200, suffix: "+" },
  { label: "Repositories", value: 30, suffix: "+" },
  { label: "Languages", value: 8, suffix: "" },
  { label: "Stars Earned", value: 45, suffix: "+" },
];

export const TESTIMONIALS = [
  {
    name: "Engineering Lead",
    role: "Data Platform Team",
    quote:
      "Rayees consistently ships reliable pipelines. His attention to data quality and validation saved us countless hours downstream.",
  },
  {
    name: "Product Manager",
    role: "Analytics",
    quote:
      "The dashboards Rayees delivered turned raw numbers into decisions. Stakeholders finally trust the data.",
  },
  {
    name: "AI Collaborator",
    role: "GenAI Initiative",
    quote:
      "From RAG pipelines to multi-LLM agents, Rayees moves fast and builds things that actually work in production.",
  },
];

export const TECH_BADGES = [
  "Python",
  "SQL",
  "Databricks",
  "PySpark",
  "Airflow",
  "dbt",
  "Azure",
  "AWS",
  "Power BI",
  "LangChain",
  "OpenAI",
  "Anthropic",
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact", href: "#contact" },
];
