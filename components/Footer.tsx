"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState<number>(2025);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <Link
              href="#inicio"
              className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-1 group"
            >
              <span>Albeiro</span>
              <span className="text-[#FF5A1F] transition-transform duration-300 group-hover:scale-125">
                .
              </span>
            </Link>
            <p className="text-white/50 text-xs sm:text-sm mt-1 max-w-sm">
              Full Stack Developer enfocado en construir productos web
              modernos con arquitectura sólida y diseño premium.
            </p>
          </div>

          {/* Botón «volver arriba» */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white/80 hover:text-white text-xs font-semibold transition-all"
            aria-label="Volver arriba de la página"
          >
            <span>Volver arriba</span>
            <span className="w-5 h-5 rounded-full bg-[#FF5A1F] text-white flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
              ↑
            </span>
          </button>
        </div>

        {/* Middle Row: Navigation Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-white/[0.06] text-xs sm:text-sm font-medium text-white/60">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#FF5A1F] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom Row: Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-xs text-white/40">
          <p>© {currentYear} Albeiro. Todos los derechos reservados.</p>
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

