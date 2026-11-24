export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  stars?: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Andrés Benavides",
    role: "Compañero de proyecto — Eternal Sleep",
    text: "Colaboré con Miguel en el proyecto Eternal Sleep y su capacidad para organizar el código y mantener el proyecto avanzando fue clave. Siempre dispuesto a ayudar al equipo y proponer soluciones cuando nos bloqueábamos.",
    avatar: "/images/avatar-cat.jpg",
    stars: 5,
  },
  {
    name: "Laura Muñoz",
    role: "Compañera de proyectos",
    text: "Miguel tiene una forma muy clara de explicar los conceptos técnicos. En los proyectos grupales siempre va más allá de lo pedido y se nota que realmente disfruta lo que hace. Es de esas personas con las que da gusto trabajar.",
    avatar: "/images/avatar-cat.jpg",
    stars: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Compañero de proyectos",
    text: "Lo que más me sorprende de Miguel es que trabaja tanto en frontend como en backend y además se mete a hacer apps móviles y videojuegos. Tiene mucha curiosidad y eso se nota en la calidad de sus proyectos.",
    avatar: "/images/avatar-cat.jpg",
    stars: 5,
  },
];
