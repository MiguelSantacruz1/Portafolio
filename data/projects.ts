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
      "Plataforma de tutorías y gestión de habilidades, con autenticación segura, roles diferenciados de tutor y estudiante, y notificaciones en tiempo real para sesiones y mensajes.",
    image: "/images/project-skillvibes.jpg",
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
      
      "Aplicación Android para investigar lo que compras: fotografías un producto con la cámara (o eliges una imagen de la galería) y la IA de Gemini lo identifica y le asigna un puntaje de sostenibilidad. Muestra impacto ambiental, reparabilidad, reciclabilidad y transporte, el recorrido del producto desde la materia prima hasta su vida útil, un asistente para resolver dudas y el historial de lo analizado.",
    image: "/images/project-trace.webp",
    tags: ["Kotlin", "Jetpack Compose", "Material 3", "CameraX", "Gemini API", "Navigation Compose"],
    github: "https://github.com/MiguelSantacruz1/TRACE",
    demo: "https://github.com/MiguelSantacruz1/TRACE",
    demoLabel: "Ver Repo",
  },
  {
    title: "MicroAlert",
    description:
      "Prototipo de aplicación para relojes inteligentes que analiza sensores y utiliza aprendizaje automático local para identificar posibles señales de somnolencia y emitir alertas visuales y por vibración.",
    image: "/images/project-microalert.png",
    tags: ["Kotlin", "Wear OS", "Jetpack Compose", "Room", "Health Services", "Random Forest"],
    github: "https://github.com/MiguelSantacruz1/MicroAlert",
    demo: "https://github.com/MiguelSantacruz1/MicroAlert",
    demoLabel: "Ver Repo",
  },
  {
    title: "PARKEASY",
    description:
      
      "Aplicación de escritorio para administrar un parqueadero: pisos y puestos con un plano editable, registro de entrada y salida con cobro automático por tiempo, historial con filtros y exportación a CSV, copias de seguridad y asistente con IA opcional. Funciona sin internet, con datos locales en SQLite.",
    image: "/images/project-parkeasy.jpg",
    tags: ["Kotlin", "Compose Multiplatform", "SQLDelight", "SQLite", "Koin", "Coroutines"],
    github: "https://github.com/MiguelSantacruz1/ParkEasy",
    demo: "https://github.com/MiguelSantacruz1/ParkEasy",
    demoLabel: "Ver Repo",
  },
  {
    title: "Synap",
    description:
      "Plataforma de flashcards con repetición espaciada basada en el método Leitner: las tarjetas suben de caja al acertar y se reprograman automáticamente. Incluye mazos, seguimiento de progreso por usuario y recordatorios por correo.",
    image: "/images/project-synap.png",
    tags: ["Java", "Spring Boot", "MongoDB", "JavaScript", "REST API"],
    github: "https://github.com/MiguelSantacruz1/Synap-F",
    demo: "https://github.com/MiguelSantacruz1/Synap-F",
    demoLabel: "Ver Repo",
  },
  {
    title: "MusicVibes",
    description:
      "Reproductor de música web con biblioteca local y búsqueda en Deezer. Cola de reproducción propia, control de volumen, modo aleatorio y bucle, y visualizaciones de espectro y ondas en tiempo real.",
    image: "/images/project-musicvibes.png",
    tags: ["TypeScript", "Vite", "Web Audio API", "Canvas", "Vercel"],
    github: "https://github.com/MiguelSantacruz1/MusicVibes",
    demo: "https://github.com/MiguelSantacruz1/MusicVibes",
    demoLabel: "Ver Repo",
  },
  {
    title: "Avionsito",
    description:
      "Interfaz de selección de asientos para un vuelo Bogotá–Medellín. Mapa de cabina por secciones con precios por clase, estados de asiento disponible, ocupado y seleccionado, y cálculo del total.",
    image: "/images/project-avionsito.png",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "UI/UX"],
    github: "https://github.com/MiguelSantacruz1/Avionsito_Clon",
    demo: "https://github.com/MiguelSantacruz1/Avionsito_Clon",
    demoLabel: "Ver Repo",
  },
];
