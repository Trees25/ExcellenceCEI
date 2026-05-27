import { useEffect } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { servicesData } from "../../data/allservices"; // Importa los datos de tus servicios

import heroPoster from "@/assets/hero.jpg";
// import heroVideo from "../../assets/video-hero2.mp4"; // Lo dejé comentado por si luego lo cambias

export default function AllServices() {
  // Asegura que la página cargue desde arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Función para el scroll de las categorías
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
          1. TU HERO SECCIÓN (Intacto)
      ========================================= */}
      <section
        id="inicio"
        className="relative h-screen min-h-[640px] w-full overflow-hidden"
      >
        <motion.img
          src={heroPoster}
          alt="Excellence Centro de Estética Integral"
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
            Nuestros servicios
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
          2. CATÁLOGO DE SERVICIOS
      ========================================= */}
      <section className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-16 py-24">
        {/* Navegación lateral (Desktop) */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-32 flex flex-col gap-4 border-l border-[#A6823F]/30 pl-6">
            {servicesData.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className="text-left text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-[#A6823F] transition-colors"
              >
                {category.category}
              </button>
            ))}
          </div>
        </aside>

        {/* Menú de categorías (Mobile) */}
        <div className="lg:hidden flex overflow-x-auto pb-4 gap-4 hide-scrollbar border-b border-border">
          {servicesData.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToCategory(category.id)}
              className="shrink-0 text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-[#A6823F] whitespace-nowrap"
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Grilla de Servicios */}
        <div className="flex-1 space-y-24">
          {servicesData.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-32">
              <Reveal className="mb-10">
                <h2 className="font-display text-3xl text-foreground mb-4">
                  {section.category}
                </h2>
                <div className="h-[1px] w-full bg-border" />
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                {section.items.map((item, index) => (
                  <Reveal key={item.name} delay={index * 0.1}>
                    <article className="group cursor-pointer">
                      <div className="aspect-[4/3] w-full overflow-hidden bg-secondary mb-6 relative">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs tracking-widest uppercase bg-card/50">
                            Imagen ilustrativa
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                      </div>

                      <h3 className="font-display text-xl mb-3 text-foreground group-hover:text-[#A6823F] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
