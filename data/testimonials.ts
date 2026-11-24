export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  stars?: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Danilo Lara",
    role: "Colaborador en proyectos",
    text: "Colaboré con Miguel en varios proyectos y su capacidad para organizar el código y mantener el proyecto avanzando fue clave. Siempre dispuesto a ayudar al equipo y proponer soluciones cuando nos bloqueábamos.",
    avatar: "/images/testigo-danilo-lara.png",
    stars: 5,
  },
  {
    name: "Samuel Portillo",
    role: "Colaborador en proyectos",
    text: "Miguel tiene una forma muy clara de explicar los conceptos técnicos. En los proyectos siempre va más allá de lo pedido y se nota que realmente disfruta lo que hace. Es de esas personas con las que da gusto trabajar.",
    avatar: "/images/testigo-samuel-portillo.webp",
    stars: 5,
  },
  {
    name: "Camilo Lopez",
    role: "Colaborador en proyectos",
    text: "Lo que más me sorprende de Miguel es que trabaja tanto en frontend como en backend y además se mete a hacer apps móviles y videojuegos. Tiene mucha curiosidad y eso se nota en la calidad de sus proyectos.",
    avatar: "/images/testigo-camilo-lopez.webp",
    stars: 5,
  },
];
