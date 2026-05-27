import { useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, MonitorSmartphone, Users, Award } from "lucide-react"; // Importamos iconos
import Reveal from "@/components/Reveal";
import { academyInfo, coursesData } from "../../data/academyData"; // Importa los datos
import heroPoster from "../../assets/academy.jpg";

export default function Academy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToCategory = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="bg-background">
      {/* =========================================
          1. HERO SECCIÓN
      ========================================= */}
      <section
        id="inicio"
        className="relative h-screen min-h-[640px] w-full overflow-hidden"
      >
        <motion.img
          src={heroPoster}
          alt="Academia Excellence"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xs tracking-[0.5em] uppercase text-[#A6823F] drop-shadow-md"
          >
            Bienvenidos a
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl tracking-wide text-balance text-[#F2F2F2] drop-shadow-lg"
          >
            Nuestra Academia
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="my-8 h-[1px] w-40 bg-[#A6823F]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#F1F2D0] text-[10px] tracking-[0.4em] uppercase opacity-70"
        >
          Scroll
        </motion.div>
      </section>

      {/* =========================================
          2. DESCRIPCIÓN DE LA ACADEMIA
      ========================================= */}
      <section className="bg-cream py-24 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <span className="text-xs tracking-[0.4em] uppercase text-gold">
              Filosofía
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-foreground">
              Academia Excellence
            </h2>
            <div className="gold-line w-16 mx-auto mt-6 mb-8" />
            <p className="text-muted-foreground leading-relaxed md:text-lg">
              {academyInfo.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* =========================================
          3. CURSOS DISPONIBLES (Diseño similar a Servicios)
      ========================================= */}
      <section className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-16 py-24">
        {/* Navegación lateral (Desktop) */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-32 flex flex-col gap-4 border-l border-[#A6823F]/30 pl-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-foreground mb-2">
              Programas de Estudio
            </span>
            {coursesData.map((course) => (
              <button
                key={course.id}
                onClick={() => scrollToCategory(course.id)}
                className="text-left text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-[#A6823F] transition-colors"
              >
                {course.name}
              </button>
            ))}
          </div>
        </aside>

        {/* Menú de categorías (Mobile) */}
        <div className="lg:hidden flex overflow-x-auto pb-4 gap-4 hide-scrollbar border-b border-border">
          {coursesData.map((course) => (
            <button
              key={course.id}
              onClick={() => scrollToCategory(course.id)}
              className="shrink-0 text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-[#A6823F] whitespace-nowrap"
            >
              {course.name}
            </button>
          ))}
        </div>

        {/* Listado de Cursos */}
        <div className="flex-1 space-y-32">
          {coursesData.map((course) => (
            <div key={course.id} id={course.id} className="scroll-mt-32">
              <Reveal>
                {/* Imagen del curso */}
                <div className="aspect-[21/9] w-full overflow-hidden bg-secondary mb-10 relative">
                  {course.image ? (
                    <img
                      src={course.image}
                      alt={course.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs tracking-widest uppercase bg-card/50">
                      Imagen ilustrativa
                    </div>
                  )}
                </div>

                {/* Título y Objetivo */}
                <h2 className="font-display text-4xl text-foreground mb-4">
                  {course.name}
                </h2>
                <div className="h-[1px] w-full bg-[#A6823F]/30 mb-8" />

                <p className="text-lg font-medium text-foreground leading-relaxed mb-6">
                  <span className="text-[#A6823F]">Objetivo:</span>{" "}
                  {course.objective}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  {course.description}
                </p>

                {/* Detalles técnicos (Grid de Iconos) */}
                <div className="grid sm:grid-cols-2 gap-6 bg-secondary/50 p-6 md:p-8 border border-border">
                  <div className="flex gap-4">
                    <Clock className="w-5 h-5 text-[#A6823F] shrink-0" />
                    <div>
                      <span className="block text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                        Duración
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {course.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MonitorSmartphone className="w-5 h-5 text-[#A6823F] shrink-0" />
                    <div>
                      <span className="block text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                        Modalidad
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {course.modality}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Users className="w-5 h-5 text-[#A6823F] shrink-0" />
                    <div>
                      <span className="block text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                        Dirigido a
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {course.target}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Award className="w-5 h-5 text-[#A6823F] shrink-0" />
                    <div>
                      <span className="block text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                        Certificación
                      </span>
                      <span className="text-sm font-medium text-foreground leading-snug">
                        {course.certification}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Botón de inscripción opcional */}
                <div className="mt-10">
                  <a
                    href={`https://wa.me/5492646490323?text=${encodeURIComponent(`¡Hola! Quisiera tener más información sobre la inscripción al curso de ${course.name}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 border border-[#A6823F] px-10 py-4 text-xs tracking-[0.3em] uppercase text-foreground hover:bg-[#A6823F] hover:text-[#F2F2F2] transition-colors duration-500"
                  >
                    Consultar inscripción
                  </a>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
