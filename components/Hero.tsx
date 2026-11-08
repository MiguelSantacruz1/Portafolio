import React from "react";
import Image from "next/image";
import PillButton from "./PillButton";

export default function Hero() {
  const specialties = [
    { number: "01", title: "Arquitectura Frontend", subtitle: "Next.js & SSR" },
    { number: "02", title: "Desarrollo Full Stack", subtitle: "TypeScript & APIs" },
    { number: "03", title: "Diseño UI/UX & Sistemas", subtitle: "Tailwind CSS & Figma" },
    { number: "04", title: "Cloud & Performance", subtitle: "Vercel & Core Web Vitals" },
  ];

  return (
    <section id="inicio" className="w-full pt-4 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Outer Card */}
      <div className="relative w-full rounded-[32px] sm:rounded-[40px] md:rounded-[48px] overflow-hidden bg-gradient-to-b from-[#FF4A1C] via-[#5A1A10] via-60% to-[#0F0F0F] border border-white/10 shadow-[0_20px_60px_-15px_rgba(255,74,28,0.3)]">
        {/* Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.25),transparent_60%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 px-6 sm:px-10 lg:px-14 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left: Headline */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4 text-left z-20">
              <span className="text-white/80 font-medium text-lg sm:text-xl tracking-wide">
                Hola, soy
              </span>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tighter leading-[1.05]">
                Full Stack <br />
                <span className="text-white drop-shadow-sm">Developer</span>
              </h1>
              <p className="text-white/70 text-sm sm:text-base max-w-sm pt-2 lg:hidden">
                Construyendo interfaces memorables, limpias y sistemas robustos
                que resuelven desafíos reales de negocio.
              </p>
            </div>

            {/* Center: Portrait */}
            <div className="lg:col-span-3 flex justify-center items-center my-4 lg:my-0">
              <div
                style={{
                  position: "relative",
                  width: "280px",
                  height: "380px",
                  borderRadius: "36px",
                  overflow: "hidden",
                }}
                className="shadow-2xl shadow-black/60 group sm:w-72 sm:h-96 md:w-80 md:h-[440px]"
              >
                {/* Duotone overlays */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#FF5A1F]/30 via-transparent to-[#FF4A1C]/20 mix-blend-color" />
                <Image
                  src="/images/hero-portrait.jpg"
                  alt="Retrato profesional de Albeiro - Desarrollador Full Stack"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, (max-width: 1200px) 340px, 380px"
                  className="object-cover object-center filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Right: Quote & Buttons */}
            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end text-left lg:text-right space-y-6 z-20">
              <div className="space-y-3 max-w-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  El gran código debe sentirse invisible.
                </h2>
                <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                  De la arquitectura técnica al último píxel, creo aplicaciones
                  web veloces, accesibles y diseñadas para conectar y convertir.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <PillButton
                  href="/cv.pdf"
                  download="CV_Albeiro_FullStack.pdf"
                  variant="white"
                  ariaLabel="Descargar Curriculum Vitae en PDF"
                >
                  Descargar CV
                </PillButton>
                <PillButton
                  href="#proyectos"
                  variant="orange"
                  ariaLabel="Explorar proyectos destacados"
                >
                  Ver proyectos
                </PillButton>
              </div>
            </div>
          </div>

          {/* Specialties Row */}
          <div className="mt-14 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {specialties.map((item) => (
              <div key={item.number} className="flex flex-col space-y-1">
                <div className="flex items-baseline text-sm font-bold tracking-wider">
                  <span className="text-[#FF5A1F] text-base">#</span>
                  <span className="text-white/50">{item.number}</span>
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/50 text-xs">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
