import React from "react";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="proyectos" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div>
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FF5A1F] block mb-2">
            Trabajo Seleccionado
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Mis Proyectos
          </h2>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group flex flex-col bg-[#151515] border border-white/[0.06] rounded-[32px] sm:rounded-[36px] overflow-hidden p-4 sm:p-5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/30"
          >
            {/* Image */}
            <div
              style={{ position: "relative", aspectRatio: "16/10", borderRadius: "24px", overflow: "hidden" }}
              className="bg-[#0A0A0A] mb-5"
            >
              <Image
                src={project.image}
                alt={`Captura del proyecto ${project.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
              />
              {/* Number Badge */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold tracking-wider">
                <span className="text-[#FF5A1F]">#</span>
                <span className="text-white">0{index + 1}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between space-y-4 px-2 pb-2">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#FF5A1F] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/[0.04] text-white/70 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/75 hover:text-white transition-colors group/link"
                  aria-label={`Ver código de ${project.title} en GitHub`}
                >
                  <svg
                    className="w-4 h-4 text-white/50 group-hover/link:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FF5A1F]/10 hover:bg-[#FF5A1F] text-[#FF5A1F] hover:text-white border border-[#FF5A1F]/20 hover:border-transparent transition-all duration-200"
                  aria-label={`Ver repositorio de ${project.title}`}
                >
                  <span>{project.demoLabel ?? "Ver Repo"}</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
