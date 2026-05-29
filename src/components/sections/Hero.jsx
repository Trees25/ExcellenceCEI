import { motion } from "framer-motion";
import heroPoster from "../../assets/Hero2.png";
import heroVideo from "../../assets/mas corto posible.mp4";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[640px] w-full overflow-hidden"
    >
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        poster={heroPoster}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <source src={heroVideo} type="video/mp4" />
      </motion.video>

      {/* Overlay oscurecido para garantizar contraste. Ajusta el /70 según la luminosidad de tu video */}
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
          EXCELLENCE
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="my-8 h-[1px] w-40 bg-[#A6823F]"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="max-w-xl text-sm sm:text-base tracking-[0.25em] uppercase text-[#F2EED8] drop-shadow-md"
        >
          Acompañamos a cada paciente en su proceso, priorizando su bienestar en
          un ambiente cálido, elegante y de confianza.
        </motion.p>

        <motion.a
          href="#servicios"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="mt-12 inline-flex items-center gap-3 border border-[#A6823F] px-10 py-4 text-xs tracking-[0.3em] uppercase text-[#F2EED8] hover:bg-[#A6823F] hover:text-[#F2F2F2] transition-colors duration-500"
        >
          Descubrí más
        </motion.a>
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
  );
}
