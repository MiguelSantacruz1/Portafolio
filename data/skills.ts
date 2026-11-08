export interface SkillCategory {
  name: string;
  level: number; // percentage 0-100
  description: string;
}

export interface TechLogo {
  name: string;
  iconName: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Next.js & React (App Router / SSR)",
    level: 96,
    description: "Arquitectura moderna con Server Components, rutas dinámicas y optimización integral de rendimiento.",
  },
  {
    name: "TypeScript & JavaScript Moderno",
    level: 92,
    description: "Tipado estricto, interfaces sólidas, programación funcional y patrones de diseño limpios.",
  },
  {
    name: "Tailwind CSS & Diseño UI/UX",
    level: 95,
    description: "Sistemas de diseño escalables, microanimaciones, maquetación responsive y estética editorial premium.",
  },
  {
    name: "Node.js, APIs REST & Bases de Datos",
    level: 88,
    description: "Creación de endpoints seguros, integración de APIs de terceros, ORMs (Prisma) y PostgreSQL.",
  },
  {
    name: "Git, GitHub & Flujos CI/CD",
    level: 90,
    description: "Control de versiones profesional, pull requests, conventional commits y pipelines de entrega continua.",
  },
  {
    name: "Vercel, Cloud & Performance (SEO/Core Web Vitals)",
    level: 94,
    description: "Despliegues sin fricción, analítica web, dominios personalizados y optimización extrema de carga.",
  },
];

export const techStackLogos = [
  { name: "Next.js", label: "Next.js 15" },
  { name: "TypeScript", label: "TypeScript" },
  { name: "Tailwind", label: "Tailwind CSS" },
  { name: "React", label: "React 19" },
  { name: "GitHub", label: "GitHub" },
  { name: "Vercel", label: "Vercel" },
  { name: "Node.js", label: "Node.js" },
  { name: "PostgreSQL", label: "PostgreSQL" },
];

