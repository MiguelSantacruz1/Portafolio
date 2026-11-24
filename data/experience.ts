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
    id: "exp-2",
    type: "academica",
    startDate: "2022",
    endDate: "2023",
    institution: "Cursos & Autoformación Técnica",
    role: "Especialización en Desarrollo Web y Móvil",
    description:
      "Aprendizaje autodidacta en desarrollo frontend con React y Next.js, backend con Node.js y Express, diseño de interfaces con Tailwind CSS, y desarrollo móvil con Kotlin y Jetpack Compose. Exploración de desarrollo de videojuegos con Unity 6 y C#.",
    badge: "🚀 Autoformación",
    tags: ["React", "Next.js", "Node.js", "Kotlin", "Unity"],
  },
];
