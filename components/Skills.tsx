import React from "react";
import { techStackLogos } from "@/data/skills";

export default function Skills() {
  return (
    <section id="habilidades" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FF5A1F] block mb-2">
            Stack Técnico
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Habilidades
          </h2>
        </div>
      </div>

      {/* Tech Logos Ribbon */}
      <div className="rounded-[28px] sm:rounded-[36px] bg-[#151515] border border-white/[0.06] p-6 sm:p-10 shadow-xl shadow-black/30">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="lg:w-1/4">
            <span className="text-xs uppercase tracking-widest text-[#FF5A1F] font-bold block mb-1">
              Ecosistema
            </span>
            <p className="text-sm font-bold text-white tracking-tight">
              Tecnologías que impulsan mis proyectos
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStackLogos.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0F0F0F] border border-white/[0.04] hover:border-[#FF5A1F]/40 transition-all group cursor-default"
              >
                <div className="w-7 h-7 rounded-lg bg-white/[0.05] flex items-center justify-center text-xs font-black text-white/80 group-hover:text-[#FF5A1F] transition-colors flex-shrink-0">
                  {tech.name === "Next.js"      && "▲"}
                  {tech.name === "TypeScript"   && "TS"}
                  {tech.name === "Tailwind"     && "≈"}
                  {tech.name === "React"        && "⚛"}
                  {tech.name === "GitHub"       && "⌂"}
                  {tech.name === "Vercel"       && "▼"}
                  {tech.name === "Node.js"      && "⬢"}
                  {tech.name === "PostgreSQL"   && "🐘"}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
