import React from "react";
import PillButton from "./PillButton";

export default function Hero() {
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
                Miguel <br />
                <span className="text-white drop-shadow-sm">Santacruz</span>
              </h1>
              <p className="text-white/70 text-sm sm:text-base max-w-sm pt-2 lg:hidden">
                Construyendo interfaces memorables, limpias y sistemas robustos
                que resuelven desafíos reales.
              </p>
            </div>

            {/* Center: Initials Placeholder (tu foto va aquí) */}
            <div className="lg:col-span-3 flex justify-center items-center my-4 lg:my-0">
              <div
                style={{
                  position: "relative",
                  width: "240px",
                  height: "320px",
                  borderRadius: "36px",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
                className="shadow-2xl shadow-black/60 sm:w-64 sm:h-80 md:w-72 md:h-96"
              >
                {/* Placeholder gradient con iniciales */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4A1C]/60 via-[#5A1A10]/80 to-[#0F0F0F] flex flex-col items-center justify-center gap-3">
                  <div
                    style={{
                      width: "96px",
                      height: "96px",
                      borderRadius: "9999px",
                      background: "rgba(255,90,31,0.25)",
                      border: "2px solid rgba(255,90,31,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span className="text-3xl font-extrabold text-white tracking-tight">MS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Buttons */}
            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end text-left lg:text-right space-y-6 z-20">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <PillButton
                  href="#proyectos"
                  variant="orange"
                  ariaLabel="Explorar proyectos"
                >
                  Ver proyectos
                </PillButton>
                <PillButton
                  href="/cv-miguel-santacruz.html"
                  variant="white"
                  ariaLabel="Ver CV de Miguel Santacruz"
                  target="_blank"
                >
                  Ver CV
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
