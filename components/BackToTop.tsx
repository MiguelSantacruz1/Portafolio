"use client";

import React from "react";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white/80 hover:text-white text-xs font-semibold transition-all cursor-pointer"
      aria-label="Volver arriba de la página"
    >
      <span>Volver arriba</span>
      <span className="w-5 h-5 rounded-full bg-[#FF5A1F] text-white flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
        ↑
      </span>
    </button>
  );
}

