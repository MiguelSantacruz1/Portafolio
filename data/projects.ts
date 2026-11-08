export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  demoLabel?: string;
}

export const projects: Project[] = [
  {
    title: "SkillVibes",
    description:
      "Plataforma de tutorías universitarias y gestión de habilidades, con autenticación segura, roles diferenciados de tutor y estudiante, y notificaciones en tiempo real para sesiones y mensajes.",
    image: "/images/project-1.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "REST API"],
    github: "https://github.com/MiguelSantacruz1/SkillVibe-B",
    demo: "https://github.com/MiguelSantacruz1/SkillVibe-B",
    demoLabel: "Ver Repo",
  },
  {
    title: "Eternal Sleep",
    description:
      "Videojuego de plataformas 2D en pixel art ambientado en un mundo de sueños oscuros. Explora pesadillas generadas proceduralmente, combate enemigos y jefes, y desbloquea habilidades para despertar a los aldeanos.",
    image: "/images/project-eternal-sleep.webp",
    tags: ["Unity 6", "C#", "URP 2D", "Cloudflare Workers", "Gemini AI"],
    github: "https://github.com/benavidesandres/eternal_sleep",
    demo: "https://github.com/benavidesandres/eternal_sleep",
    demoLabel: "Ver Repo",
  },
  {
    title: "TRACE",
    description:
      "Aplicación Android que escanea códigos de barras para consultar el origen, fabricación e impacto ambiental de productos, evaluando su sostenibilidad con datos de fuentes externas.",
    image: "/images/project-trace.webp",
    tags: ["Kotlin", "Jetpack Compose", "CameraX", "ML Kit", "Node.js", "Hilt"],
    github: "https://github.com/MiguelSantacruz1/TRACE",
    demo: "https://github.com/MiguelSantacruz1/TRACE",
    demoLabel: "Ver Repo",
  },
];
