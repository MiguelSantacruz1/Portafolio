"use client";

import React, { useState } from "react";
import PillButton from "./PillButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const contactEmail = "albeiro.dev@example.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // =========================================================================
    // CÓMO CONECTAR FORMSPREE O EMAILJS:
    //
    // Opción 1 - FORMSPREE:
    // Reemplaza este bloque por:
    // const response = await fetch("https://formspree.io/f/TU_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json", Accept: "application/json" },
    //   body: JSON.stringify(formData),
    // });
    // if (response.ok) { setStatus("success"); } else { setStatus("error"); }
    //
    // Opción 2 - EMAILJS:
    // Instala: npm install @emailjs/browser
    // import emailjs from '@emailjs/browser';
    // await emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", formData, "TU_PUBLIC_KEY");
    // =========================================================================

    // Simulación de envío exitoso para demostración:
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contacto" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FF5A1F] block mb-2">
          Hablemos
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Contacto
        </h2>
        <p className="text-white/55 text-sm sm:text-base mt-3">
          ¿Tienes una idea de proyecto, una vacante o deseas colaborar? Envíame
          un mensaje y te responderé en menos de 24 horas.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Direct Info & Social Links */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#151515] border border-white/[0.06] rounded-[32px] p-6 sm:p-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Construyamos algo extraordinario juntos.
            </h3>
            <p className="text-white/65 text-sm sm:text-base leading-relaxed">
              Disponible para proyectos freelance, colaboraciones en startups o
              posiciones a tiempo completo como desarrollador frontend / full stack.
            </p>

            {/* Email Box with Copy Action */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-white/40 block font-semibold mb-2">
                Correo Electrónico Directo
              </span>
              <div className="flex items-center justify-between gap-2 p-3 bg-[#0F0F0F] rounded-2xl border border-white/[0.08]">
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-[#FF5A1F] transition-colors truncate"
                >
                  {contactEmail}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-xs font-semibold text-white/80 hover:text-white transition-colors flex-shrink-0"
                  aria-label="Copiar correo electrónico"
                >
                  {copied ? "¡Copiado! ✓" : "Copiar"}
                </button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3 pt-4 border-t border-white/[0.08]">
            <span className="text-xs uppercase tracking-wider text-white/40 block font-semibold">
              Redes Profesionales
            </span>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://linkedin.com/in/albeiro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] text-white/80 hover:text-white hover:bg-white/[0.08] border border-white/10 text-xs font-semibold transition-all"
              >
                <span>LinkedIn</span>
                <span className="text-[#FF5A1F]">↗</span>
              </a>

              <a
                href="https://github.com/albeiro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] text-white/80 hover:text-white hover:bg-white/[0.08] border border-white/10 text-xs font-semibold transition-all"
              >
                <span>GitHub</span>
                <span className="text-[#FF5A1F]">↗</span>
              </a>

              <a
                href="https://wa.me/573000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/30 text-xs font-semibold transition-all"
              >
                <span>WhatsApp</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-[#151515] border border-white/[0.06] rounded-[32px] p-6 sm:p-10">
          {status === "success" ? (
            <div className="h-full flex flex-col justify-center items-center text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FF5A1F]/20 text-[#FF5A1F] flex items-center justify-center text-2xl font-bold border border-[#FF5A1F]/30 animate-bounce">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                ¡Mensaje enviado con éxito!
              </h3>
              <p className="text-white/60 text-sm max-w-sm">
                Gracias por comunicarte. He recibido tus datos y te responderé lo
                más pronto posible.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/15 text-white text-xs font-semibold transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2"
                >
                  Nombre Completo <span className="text-[#FF5A1F]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Tu nombre o empresa"
                  className="w-full px-4 py-3 rounded-2xl bg-[#0F0F0F] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-all text-sm"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2"
                >
                  Correo Electrónico <span className="text-[#FF5A1F]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="ejemplo@correo.com"
                  className="w-full px-4 py-3 rounded-2xl bg-[#0F0F0F] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-all text-sm"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2"
                >
                  Mensaje <span className="text-[#FF5A1F]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  minLength={10}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Cuéntame sobre tu proyecto, objetivos o requerimientos..."
                  className="w-full px-4 py-3 rounded-2xl bg-[#0F0F0F] border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-all text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <PillButton
                  type="submit"
                  variant="orange"
                  className="w-full justify-between"
                  ariaLabel="Enviar mensaje de contacto"
                >
                  {status === "submitting" ? "Enviando mensaje..." : "Enviar mensaje ahora"}
                </PillButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

