import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonios" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FF5A1F] block mb-2">
          Opiniones & Referencias
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Testimonios
        </h2>
        <p className="text-white/55 text-sm sm:text-base mt-3">
          Lo que dicen quienes han trabajado conmigo.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="flex flex-col justify-between bg-[#151515] border border-white/[0.06] rounded-[32px] p-6 sm:p-8 hover:border-[#FF5A1F]/30 transition-all duration-300 shadow-lg shadow-black/20 group"
          >
            {/* Stars & Quote */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-serif text-[#FF5A1F] leading-none select-none">&ldquo;</span>
                <div className="flex items-center gap-1 text-[#FF5A1F]" aria-label="Calificación 5 de 5 estrellas">
                  {[...Array(item.stars || 5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed italic">{item.text}</p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 mt-6 border-t border-white/[0.06]">
              <Image
                src={item.avatar}
                alt={item.name}
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-cover shrink-0 border-[1.5px] border-[#FF5A1F]/40 group-hover:border-[#FF5A1F]/70 transition-colors"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">{item.name}</h3>
                <p className="text-xs text-white/50 truncate">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
