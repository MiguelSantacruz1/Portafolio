import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero con CV */}
      <Hero />

      {/* 3. Acerca de mí */}
      <About />

      {/* 4. Mis proyectos */}
      <Projects />

      {/* 5. Testimonios */}
      <Testimonials />

      {/* 6. Experiencia académica y laboral */}
      <Experience />

      {/* 7. Contactos ("use client") */}
      <Contact />

      {/* 8. Sección adicional: Habilidades */}
      <Skills />

      {/* 9. Pie de página */}
      <Footer />
    </main>
  );
}
