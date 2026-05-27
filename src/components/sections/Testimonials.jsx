import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    name: "Lautaro Fernández",
    text: "Fui a hacerme un tratamiento facial y realmente quedé muy conforme. Desde que llegás, el lugar transmite calma, limpieza y profesionalismo. La atención fue excelente. Sin dudas, un lugar para recomendar y volver.",
  },
  {
    name: "Sandra Cortez",
    text: "Hermosa estética. Los servicios que brindan son excelentes y su atención es genial. Muy recomendable.",
  },
  {
    name: "Paula Nozica",
    text: "Excelente atención, servicios y buenos precios.",
  },
  {
    name: "Sabrina Higginbotton",
    text: "Fui a realizarme un masaje relajante y quedé encantada. El lugar es hermoso, te sumerge en un ambiente relajante desde el primer momento. El masaje fue increíble.",
  },
  {
    name: "Silvana Contrera",
    text: "Cada vez que voy me encanta regresar por la excelente atención y amabilidad de todas las chicas. Un lugar súper reconfortante y armónico.",
  },
  {
    name: "Verónica Gargiulo",
    text: "Son muy profesionales, la atención es maravillosa, el staff está preparado perfectamente para cada una de las cosas que realizan.",
  },
  {
    name: "Romina Bazan",
    text: "Mí experiencia excelente! Desde la atención y asesoramiento evacuando todas mis dudas de Gema, cómo la Gran profesional Emilia, manos y tratamiento. Súper recomendado.",
  },
  {
    name: "Daniela Incerti",
    text: "Excelente servicio! Las chicas que atienden son divinas, siempre con buena onda. Los servicios están buenísimos! Super recomiendo!.",
  },
  {
    name: "Maria Silvia Galvarini Recabarren",
    text: "Excelente atención, servicio, energía y los mejores tratamientos… siempre dispuestas! Un 10",
  },
  {
    name: "Camila Ciares",
    text: "El lugar es hermoso y muy cálido! Excelente para relajar y darse un mimo",
  },
  {
    name: "Ana",
    text: "Excelente servicio, productos de primera calidad … súper recomendable",
  },
  {
    name: "Sandra Cortez",
    text: "Hermosa estética! Los servicios que brindan son excelentes..su atención es genial!!.Muy recomendable..",
  },
  {
    name: "Rosana Fiheroa",
    text: "Excelente profesionales....bellisimo lugar",
  },
  {
    name: "Paula Nozica",
    text: "Excelente atención, servicios y buenos precios:)",
  },
  {
    name: "Sgc Sanatorio Argentino",
    text: "excelente atencion , siempre predispuestas a dar un turno y a atender con una sonrisa",
  },
  {
    name: "Maria Paula Saavedra Pinto",
    text: "Excelente atención y resultados",
  },
  {
    name: "Maira Rodriguez",
    text: "Muy lindo lugar, tiene de todo y te atienden súper bien!!",
  },
  {
    name: "Franco Ferrer",
    text: "Excelente atención, gran variedad de servicios y a buen precio. Muy recomendable",
  },
  {
    name: "Maria Belen Fernandez",
    text: "Todo excelente! Excepto q faltan colores nueve temporada de OPI . Lo de más un mil",
  },
  {
    name: "Anamaria Atencia",
    text: "Excelente atención, estoy muy conforme con el método de depilación y sobre todo con las profesionales. Todas son un amor",
  },
  {
    name: "Sabrina Higgimbotton",
    text: "Mi experiencia en esta estética fue muy buena. Fui a realizarme un masaje relajante y quedé encantada. El lugar es hermoso, te sumerge en un ambiente relajante desde el primer momento.",
  },
  {
    name: "Silvana Contrera",
    text: "Desde la primera experiencia hasta hoy cada vez que voy me encanta regresar por la excelente atención y amabilidad de todas las chicas además un lugar súper reconfortante y armónico sumado a la profesión de cada una de ellas en mi caso",
  },
  {
    name: "Carolina Del Valle Olivares",
    text: "Hermoso lugar! Si buscás calidez, excelencia y buena atención es aquí!!",
  },
  {
    name: "Myriam Gomez",
    text: "Excelente atención y muy buenos resultados de todos los tratamientos que allí realizan",
  },
  {
    name: "Verónica Gargiulo",
    text: "Son muy profesionales, la atención en maravillosa, el staff está preparado perfectamente para cada una de las cosas que realozan",
  },
  {
    name: "Mayra Celeste",
    text: "Hermoso recibimiento y trato... Excelente trabajo realizaron... Spa se pies... Y mis manos... Gracias!!!",
  },
  {
    name: "Eugenia Daiana Castro",
    text: "Exelente atencion las chicas muy amables",
  },
  {
    name: "Liliana Rombola",
    text: "Una estética con equipos de avanzada, excelente atención y buenos precios Un bello lugar para mimarse.",
  },
  {
    name: "Dario Dallarmelina",
    text: "Estupenda atención, súper profesionales y tiene de todo para el cuidado del cuerpo",
  },
  {
    name: "Pia Comoglio",
    text: "Hermoso lugar, y la mejor atención siempre.",
  },
  {
    name: "Veronica Giugni",
    text: "Hermoso!! Atención, elegancia y muy completo servicio!!!",
  },
  {
    name: "Geraldina Vitale",
    text: "Muy buena . Estoy muy agradecida.",
  },
  {
    name: "Karina Barbero",
    text: "Bello, hermosas personas, hermosa atención.",
  },
  {
    name: "Ana Cortez",
    text: "Excelente atención y calidez",
  },
  {
    name: "Maira Fredes",
    text: "Ecxelente atención las mejores!!!!!",
  },
  {
    name: "Florencia Martin",
    text: "Hermosa la atención de las chicas",
  },
  {
    name: "Rocio Herrera",
    text: "Excelente servicio!",
  },
  {
    name: "Roma Lara",
    text: "Hermoso lugar!",
  },
  {
    name: "Rosa Botella",
    text: "Excelente calidad de atención",
  },
  {
    name: "Juan Pablo Castro",
    text: "Excelente lugar",
  },
  {
    name: "Romina Dominguez",
    text: "Excelente atención!!!",
  },
  {
    name: "Lautaro Fernández",
    text: "Fui a hacerme un tratamiento facial y realmente quedé muy conforme. Desde que llegás, el lugar transmite calma, limpieza y profesionalismo. La atención fue excelente. Sin dudas, un lugar para recomendar y volver.",
  },
  {
    name: "Romina Bazan",
    text: "Mí experiencia excelente! Desde la atención y asesoramiento evacuando todas mis dudas de Gema, cómo la Gran profesional Emilia, manos y tratamiento. Súper recomendado.",
  },
  {
    name: "Daniela Incerti",
    text: "Excelente servicio! Las chicas que atienden son divinas, siempre con buena onda. Los servicios están buenísimos! Super recomiendo!.",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setI((p) => (p + 1) % testimonials.length),
      6000,
    );
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <section id="testimonios" className="py-28 px-6 bg-foreground text-cream">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="text-xs tracking-[0.4em] uppercase text-gold">
            Testimonios
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Nuestros clientes hablan
          </h2>
          <div className="gold-line w-24 mx-auto mt-6 mb-12" />
        </Reveal>

        <Quote className="h-10 w-10 text-gold mx-auto mb-8" />

        <div className="min-h-[200px] relative">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl font-display leading-relaxed text-cream/90"
            >
              "{t.text}"
              <footer className="mt-8 text-xs tracking-[0.3em] uppercase text-gold">
                — {t.name}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={() =>
              setI((p) => (p - 1 + testimonials.length) % testimonials.length)
            }
            className="h-10 w-10 border border-cream/40 flex items-center justify-center hover:bg-cream hover:text-foreground transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-xs tracking-[0.3em] text-cream/60">
            {String(i + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </span>
          <button
            onClick={() => setI((p) => (p + 1) % testimonials.length)}
            className="h-10 w-10 border border-cream/40 flex items-center justify-center hover:bg-cream hover:text-foreground transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
