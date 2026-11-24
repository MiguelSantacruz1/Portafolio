import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miguel Santacruz | Desarrollador de Software",
  description:
    "Portafolio de Miguel Santacruz Beltrán. Desarrollador de software apasionado por el desarrollo web, aplicaciones móviles y videojuegos.",
  keywords: [
    "Miguel Santacruz",
    "Desarrollador de Software",
    "Ingeniería de Software",
    "Next.js",
    "React",
    "Kotlin",
    "Unity",
    "Pasto Colombia",
  ],
  authors: [{ name: "Miguel Santacruz Beltrán" }],
  openGraph: {
    title: "Miguel Santacruz | Desarrollador de Software",
    description:
      "Portafolio de Miguel Santacruz Beltrán — Proyectos web, móviles y de videojuegos.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0a0402] text-white selection:bg-[#FF5A1F] selection:text-white antialiased">
        {/* Ambient atmospheric background glows */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#FF4A1C]/20 via-[#5A1A10]/15 to-transparent rounded-full blur-[140px]" />
          <div className="absolute top-[45%] -left-32 w-[600px] h-[600px] bg-[#5A1A10]/25 rounded-full blur-[160px]" />
          <div className="absolute bottom-20 -right-20 w-[650px] h-[500px] bg-[#FF5A1F]/15 rounded-full blur-[160px]" />
        </div>
        {/* Centered Canvas Container */}
        <div className="relative z-10 w-full max-w-[1240px] mx-auto min-h-screen bg-[#0F0F0F] shadow-[0_0_90px_rgba(0,0,0,0.85)] border-x border-white/[0.04]">
          {children}
        </div>
      </body>
    </html>
  );
}
