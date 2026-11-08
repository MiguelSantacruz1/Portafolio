import React from "react";
import { skillCategories, techStackLogos } from "@/data/skills";

export default function Skills() {
  return (
    <section id="habilidades" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
        <div>
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FF5A1F] block mb-2">
            Stack Técnico & Dominio
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Habilidades
          </h2>
        </div>
        <p className="text-white/55 text-sm sm:text-base max-w-md">
          Especialización profunda en el ecosistema JavaScript moderno,
          arquitectura orientada a componentes y estándares web de última generación.
        </p>
      </div>

      {/* 1. Dark Rounded Ribbon with Tech Logos (Like the logo band in the design) */}
      <div className="mb-14 rounded-[28px] sm:rounded-[36px] bg-[#151515] border border-white/[0.06] p-6 sm:p-8 shadow-xl shadow-black/30">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="lg:w-1/4">
            <span className="text-xs uppercase tracking-widest text-[#FF5A1F] font-bold block mb-1">
              Ecosistema
            </span>
            <p className="text-sm font-bold text-white tracking-tight">
              Herramientas que impulsan mis proyectos
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center">
            {techStackLogos.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0F0F0F] border border-white/[0.04] hover:border-white/20 transition-all group"
              >
                {/* Tech Icon / Symbol */}
                <div className="w-7 h-7 rounded-lg bg-white/[0.05] flex items-center justify-center text-xs font-black text-white/80 group-hover:text-[#FF5A1F] transition-colors">
                  {tech.name === "Next.js" && "▲"}
                  {tech.name === "TypeScript" && "TS"}
                  {tech.name === "Tailwind" && "≈"}
                  {tech.name === "React" && "⚛"}
                  {tech.name === "GitHub" && "⌂"}
                  {tech.name === "Vercel" && "▼"}
                  {tech.name === "Node.js" && "⬢"}
                  {tech.name === "PostgreSQL" && "🐘"}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Animated Orange Level Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {skillCategories.map((skill) => (
          <div
            key={skill.name}
            className="bg-[#151515] border border-white/[0.06] rounded-[28px] p-6 sm:p-7 hover:border-white/15 transition-all duration-300"
          >
            {/* Skill Name & Level */}
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {skill.name}
              </h3>
              <span className="text-sm font-extrabold text-[#FF5A1F] tracking-wider">
                {skill.level}%
              </span>
            </div>

            {/* Description */}
            <p className="text-white/55 text-xs sm:text-sm leading-relaxed mb-4">
              {skill.description}
            </p>

            {/* Progress Bar Container */}
            <div className="w-full h-2.5 bg-[#0F0F0F] rounded-full overflow-hidden p-0.5 border border-white/[0.05]">
              <div
                className="h-full bg-gradient-to-r from-[#FF4A1C] to-[#FF5A1F] rounded-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(255,90,31,0.5)]"
                style={{ width: `${skill.level}%` }}
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

