"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import PillButton from "./PillButton";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Habilidades", href: "#habilidades" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "bg-[#0F0F0F]/85 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#inicio"
          className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2 group"
        >
          <Logo className="w-9 h-9 transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105" />
          <span>Miguel</span>
          <span className="text-[#FF5A1F] transition-transform duration-300 group-hover:scale-125">
            .
          </span>
          <span className="hidden sm:inline-block ml-1 text-xs uppercase tracking-widest text-white/40 font-medium border border-white/10 px-2 py-0.5 rounded-full">
            Dev
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors duration-200 hover:text-white group"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF5A1F] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <PillButton href="#contacto" variant="white" ariaLabel="Ir a contacto">
            Contáctame
          </PillButton>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#151515]/95 backdrop-blur-xl border-b border-white/[0.08] px-6 py-6 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-white/80 hover:text-[#FF5A1F] transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/[0.08]">
              <PillButton
                href="#contacto"
                variant="white"
                onClick={handleLinkClick}
                className="w-full justify-between"
              >
                Contáctame
              </PillButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

