export interface ExperienceItem {
  id: string;
  type: "laboral" | "academica";
  startDate: string;
  endDate: string;
  institution: string;
  role: string;
  description: string;
  badge: string;
  tags?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    type: "laboral",
    startDate: "2024",
    endDate: "Presente",
    institution: "Freelance & Consultoría Digital",
    role: "Senior Frontend Engineer & UI/UX Consultant",
    description: "Desarrollo de aplicaciones web y plataformas SaaS utilizando Next.js App Router, TypeScript y Tailwind CSS. Implementación de diseño editorial y optimización de métricas Core Web Vitals alcanzando 98+ en PageSpeed.",
    badge: "💼 Laboral",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    id: "exp-2",
    type: "laboral",
    startDate: "2023",
    endDate: "2024",
    institution: "Kuantum Digital Studio",
    role: "Desarrollador Full Stack & UI Specialist",
    description: "Lideré la migración de aplicaciones monolíticas a arquitecturas modernas en React y Next.js. Creé sistemas de diseño unificados con Tailwind CSS y componentes accesibles que redujeron los tiempos de desarrollo en un 35%.",
    badge: "💼 Laboral",
    tags: ["React", "Node.js", "PostgreSQL", "Figma"],
  },
  {
    id: "exp-3",
    type: "academica",
    startDate: "2022",
    endDate: "2024",
    institution: "Universidad Nacional / Ingeniería de Sistemas",
    role: "Pregrado en Ingeniería de Sistemas y Computación",
    description: "Formación especializada en estructuras de datos, diseño de algoritmos, arquitecturas de software distribuidas y bases de datos relacionales y NoSQL. Participación activa en semilleros de desarrollo web.",
    badge: "🎓 Académica",
    tags: ["Algoritmos", "Sistemas Distribuidos", "Arquitectura"],
  },
  {
    id: "exp-4",
    type: "academica",
    startDate: "2022",
    endDate: "2023",
    institution: "Certificación Profesional Frontend & Cloud",
    role: "Especialización Avanzada en React, Next.js & Cloud Deployments",
    description: "Programa intensivo enfocado en TypeScript estricto, gestión de estado con Zustand, optimización de renderizado en servidor (SSR/SSG/ISR), CI/CD automatizado y despliegue continuo en Vercel y AWS.",
    badge: "🎓 Académica",
    tags: ["Certificación", "Next.js", "CI/CD", "AWS"],
  },
];

