export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: "Apex Minimal Store",
    description: "Plataforma de comercio electrónico con arquitectura moderna, catálogo headless, pasarela de pago Stripe y diseño editorial minimalista de alta conversión.",
    image: "/images/project-1.jpg",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    github: "https://github.com/albeiro/apex-minimal-store",
    demo: "https://apex-minimal-store.vercel.app",
  },
  {
    title: "Pulse Audio Interface",
    description: "Aplicación web interactiva para control y ecualización de audio espacial, con visualizadores en tiempo real sobre Web Audio API y síntesis modular.",
    image: "/images/project-2.jpg",
    tags: ["React", "TypeScript", "Web Audio API", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/albeiro/pulse-audio-interface",
    demo: "https://pulse-audio.vercel.app",
  },
  {
    title: "Aura Essence Studio",
    description: "Sistema de gestión y landing page experimental para marca de fragancias de lujo, con animaciones 3D fluidas, microinteracciones y optimización SEO al 100%.",
    image: "/images/project-3.jpg",
    tags: ["Next.js", "Tailwind CSS", "Three.js", "Zustand", "Vercel"],
    github: "https://github.com/albeiro/aura-essence-studio",
    demo: "https://aura-essence.vercel.app",
  },
];

