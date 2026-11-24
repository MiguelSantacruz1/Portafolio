import React from "react";
import Image from "next/image";
import PillButton from "./PillButton";

export default function About() {
  const quickFacts = [
    { label: "Ubicación", value: "Pasto, Colombia — Disponible remoto" },
    { label: "Perfil", value: "Desarrollador de Software" },
    { label: "Enfoque", value: "Web, Móvil & Videojuegos" },
    { label: "Intereses", value: "Next.js, Android, Unity, Cloud" },
  ];

  const skillBadges = [
    "Next.js", "TypeScript", "React", "Tailwind CSS",
    "Node.js", "Kotlin", "Jetpack Compose", "Unity 6",
    "C#", "MongoDB", "Git & GitHub",
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
            Transformando ideas complejas en experiencias digitales que importan.
          </h2>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-between items-start space-y-5 pt-2">
          <PillButton href="#contacto" variant="orange" ariaLabel="Contactar a Miguel">
            Iniciemos un proyecto
          </PillButton>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-[#151515] border border-white/[0.06] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-xl shadow-black/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Avatar Placeholder Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "380px",
                height: "380px",
                borderRadius: "28px",
                overflow: "hidden",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "rgba(255,255,255,0.08)",
                background: "linear-gradient(135deg, #1a0a05 0%, #2a1008 50%, #151515 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
              }}
              className="group"
            >
              <Image
                src="/images/miguel-perfil.jpg"
                alt="Foto de Miguel Santacruz"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-[50%_30%]"
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 px-4 pb-5 pt-16 bg-gradient-to-t from-black/85 to-transparent">
                <span className="text-[#FF5A1F] font-bold text-lg tracking-tight">Miguel Santacruz</span>
                <span className="text-white/60 text-xs">Desarrollador de Software · Pasto, Colombia</span>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Hola, un placer saludarte
              </h3>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Soy Miguel Santacruz Beltrán, desarrollador de software en Pasto,
                Colombia. Me apasiona construir soluciones
                tecnológicas que combinan diseño limpio con arquitectura sólida, desde
                aplicaciones web hasta videojuegos y apps móviles. Disfruto explorar
                nuevas tecnologías y enfrentar retos de desarrollo que tengan impacto
                real en las personas.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-[#0F0F0F] border border-white/[0.05] rounded-2xl p-4 flex items-start gap-3 hover:border-white/15 transition-colors"
                >
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
