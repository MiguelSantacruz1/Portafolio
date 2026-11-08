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
    type: "academica",
    startDate: "2023",
    endDate: "Presente",
    institution: "Ingeniería de Software — Pasto, Colombia",
    role: "5to semestre de Ingeniería de Software",
    description:
      "Formación en fundamentos de ingeniería del software, estructuras de datos, bases de datos relacionales y no relacionales, desarrollo web, programación orientada a objetos y metodologías ágiles. Participación activa en proyectos académicos como SkillVibes, TRACE y Eternal Sleep.",
    badge: "🎓 Académica",
    tags: ["Ingeniería de Software", "POO", "Bases de Datos", "Metodologías Ágiles"],
  },
  {
    id: "exp-2",
    type: "academica",
    startDate: "2022",
    endDate: "2023",
    institution: "Cursos & Autoformación Técnica",
    role: "Especialización en Desarrollo Web y Móvil",
    description:
      "Aprendizaje autodidacta en desarrollo frontend con React y Next.js, backend con Node.js y Express, diseño de interfaces con Tailwind CSS, y desarrollo móvil con Kotlin y Jetpack Compose. Exploración de desarrollo de videojuegos con Unity 6 y C#.",
    badge: "🎓 Académica",
    tags: ["React", "Next.js", "Node.js", "Kotlin", "Unity"],
  },
];
