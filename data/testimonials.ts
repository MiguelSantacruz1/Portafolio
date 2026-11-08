export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  stars?: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Valeria Mendoza",
    role: "Directora de Producto en NexaTech",
    text: "Trabajar con Albeiro transformó por completo nuestra plataforma. Su atención al detalle visual y la calidad de su arquitectura frontend con Next.js elevaron la experiencia de nuestros usuarios a un nivel internacional.",
    avatar: "/images/avatar-1.jpg",
    stars: 5,
  },
  {
    name: "Carlos Eduardo Ríos",
    role: "Lead Tech Architect en StudioNova",
    text: "Pocos desarrolladores combinan un criterio de diseño editorial tan impecable con un código TypeScript limpio, modular y veloz. Cumplió los plazos antes de tiempo y con estándares que superaron toda expectativa.",
    avatar: "/images/avatar-2.jpg",
    stars: 5,
  },
  {
    name: "Sofía Arango",
    role: "Fundadora & CEO en Lumina Studio",
    text: "Nuestra web aumentó la tasa de conversión en un 42% tras el rediseño y desarrollo de Albeiro. La velocidad de carga en Vercel y el cuidado en cada interacción demuestran su profesionalismo sobresaliente.",
    avatar: "/images/avatar-3.jpg",
    stars: 5,
  },
];

