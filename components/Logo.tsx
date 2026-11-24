import React from "react";

// Monograma "M" entre corchetes angulares (código) con punto naranja.
export default function Logo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Logo de Miguel"
    >
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF8A3D" />
          <stop offset="1" stopColor="#FF5A1F" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#151515" />
      <rect x="1.5" y="1.5" width="61" height="61" rx="14.5" fill="none" stroke="#fff" strokeOpacity="0.08" strokeWidth="3" />
      <path d="M14 22 L8 32 L14 42" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 22 L56 32 L50 42" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 44 V21 L32 36 L45 21 V44" fill="none" stroke="url(#logo-g)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="51" cy="46" r="3" fill="#FF5A1F" />
    </svg>
  );
}
