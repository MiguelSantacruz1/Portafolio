import React from "react";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experiencia" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
        <div>
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FF5A1F] block mb-2">
            Trayectoria Profesional
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experiencia
          </h2>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto">
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#FF5A1F] space-y-12">
          {experiences.map((exp) => {
            const isLaboral = exp.type === "laboral";

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot on the Orange Line */}
                <span
                  className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#FF5A1F] border-4 border-[#0F0F0F] group-hover:scale-125 transition-transform duration-300"
                  aria-hidden="true"
                />

                {/* Experience Card */}
                <div className="bg-[#151515] border border-white/[0.06] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 hover:border-white/15 transition-all duration-300 shadow-lg shadow-black/20">
                  {/* Top Header: Badge & Date */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                        isLaboral
                          ? "bg-[#FF5A1F]/15 text-[#FF5A1F] border border-[#FF5A1F]/30"
                          : "bg-blue-500/15 text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {exp.badge}
                    </span>

                    <span className="text-xs sm:text-sm font-semibold text-white/50 tracking-wider">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>

                  {/* Title & Institution */}
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#FF5A1F] transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-white/70 text-sm font-medium mb-3">
                    {exp.institution}
                  </p>

                  {/* Description of achievements */}
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  {exp.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.05]">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/[0.03] text-white/65"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

