import React from "react";
import Link from "next/link";
import BackToTop from "./BackToTop";
import CurrentYear from "./CurrentYear";

export default function Footer() {
  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#0A0A0A] py-14 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-[1240px] mx-auto space-y-10">
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <Link
              href="#inicio"
              className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-1 group"
            >
              <span>Miguel</span>
              <span className="text-[#FF5A1F] transition-transform duration-300 group-hover:scale-125">.</span>
            </Link>
            <p className="text-white/50 text-xs sm:text-sm mt-1 max-w-sm">
              Estudiante de Ingeniería de Software apasionado por construir
              soluciones web, móviles y de videojuegos con impacto real.
            </p>
          </div>
          <BackToTop />
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-white/[0.06] text-xs sm:text-sm font-medium text-white/60">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#FF5A1F] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-xs text-white/40">
          <p>© <CurrentYear /> Miguel Santacruz Beltrán. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            <span>Hecho con</span>
            <span className="text-white/80 font-medium">Next.js</span>
            <span>+</span>
            <span className="text-white/80 font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
