import React from "react";
import Image from "next/image";
import PillButton from "./PillButton";

export default function About() {
  const quickFacts = [
    { label: "Ubicación", value: "Bogotá, Colombia (Remoto Global)", icon: "📍" },
    { label: "Educación", value: "Ingeniería de Sistemas (Últimos semestres)", icon: "🎓" },
    { label: "Enfoque", value: "Arquitectura Web & Sistemas de Diseño", icon: "⚡" },
    { label: "Intereses", value: "Next.js, UX Editorial, Performance, IA", icon: "💡" },
  ];

  const skillBadges = [
    "Next.js 15", "TypeScript", "React 19", "Tailwind CSS",
    "Node.js", "PostgreSQL", "Prisma ORM", "UI/UX Design",
    "Git & GitHub", "Vercel Deployments",
  ];

  return (
    <section id="sobre-mi" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
        <div className="lg:col-span-7 space-y-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FF5A1F]">
            Behind the Code
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Transformando ideas complejas en experiencias digitales memorables.
          </h2>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-between items-start space-y-5 pt-2">
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Soy un desarrollador de software y diseñador enfocado en construir
            interfaces limpias, intuitivas y sistemas técnicos robustos que
            resuelven problemas del mundo real.
          </p>
          <PillButton href="#contacto" variant="orange" ariaLabel="Contactar a Albeiro">
            Iniciemos un proyecto
          </PillButton>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-[#151515] border border-white/[0.06] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-xl shadow-black/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Photo Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "380px",
                height: "420px",
                borderRadius: "28px",
                overflow: "hidden",
                borderWidth: "1px",
                borderColor: "rgba(255,255,255,0.1)",
                borderStyle: "solid",
              }}
              className="group"
            >
              <Image
                src="/images/about.jpg"
                alt="Albeiro trabajando en proyectos de desarrollo de software"
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-[#FF5A1F] text-white text-xs font-bold rounded-full mb-2">
                  Enfoque Full Stack
                </span>
                <p className="text-white font-semibold text-sm">
                  Apasionado por el detalle tipográfico y la solidez de código.
                </p>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Hola, un placer saludarte 👋
              </h3>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Soy Albeiro, desarrollador full stack con un marcado criterio
                editorial y de diseño UI/UX. Mi labor se centra en dar vida a
                aplicaciones web completas, escalables y ultra rápidas utilizando
                el ecosistema de Next.js, TypeScript y Tailwind CSS. Disfruto
                cuidar cada microinteracción y escribir código limpio, legible y
                preparado para producción continua.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-[#0F0F0F] border border-white/[0.05] rounded-2xl p-4 flex items-start gap-3 hover:border-white/15 transition-colors"
                >
                  <span className="text-2xl" aria-hidden="true">{fact.icon}</span>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white/40 block font-semibold">
                      {fact.label}
                    </span>
                    <span className="text-sm font-medium text-white/90">{fact.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Skill Badges */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/50 block">
                Herramientas principales
              </span>
              <div className="flex flex-wrap gap-2">
                {skillBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] text-white/90 border border-white/10 hover:border-[#FF5A1F]/60 hover:text-white transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
