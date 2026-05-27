import Reveal from "@/components/Reveal";
import academy from "@/assets/academy.jpg";
import { Link } from "react-router-dom";
export default function Academy() {
  return (
    <section id="academia" className="relative py-28 px-6 overflow-hidden">
      <img
        src={academy}
        alt="Academia Excellence"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="relative mx-auto max-w-4xl text-center text-cream">
        <Reveal>
          <span className="text-xs tracking-[0.4em] uppercase text-gold">
            Formación profesional
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Academia Excellence
          </h2>
          <div className="gold-line w-24 mx-auto my-8" />
          <p className="text-cream/90 leading-relaxed max-w-2xl mx-auto">
            Institución dedicada a la alta capacitación en estética integral.
            Nuestra filosofía se basa en la profesionalización del sector a
            través de una formación sólida donde la ciencia aplicada y la
            destreza técnica convergen.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 gap-6 text-left">
            {[
              {
                t: "Estética Corporal",
                d: "Protocolos corporales integrales y tecnológicos. 5 meses · Semipresencial.",
              },
              {
                t: "Cosmetología",
                d: "Tratamientos faciales preventivos y de mantenimiento con dominio experto.",
              },
            ].map((c) => (
              <div key={c.t} className="border border-cream/30 p-8">
                <h3 className="font-display text-2xl">{c.t}</h3>
                <p className="mt-3 text-sm text-cream/80 leading-relaxed">
                  {c.d}
                </p>
                <span className="mt-6 inline-block text-[10px] tracking-[0.3em] uppercase text-gold">
                  Certificación F.A.C.E. + ACAPE
                </span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2} className="mt-12 text-center">
          <Link
            to="/academia"
            className="inline-flex items-center gap-3 bg-foreground text-cream px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-foreground transition-colors duration-500"
          >
            Conocer más
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
