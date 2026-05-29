import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";

import hifu from "../../assets/hifu-7d-facial.webp";
import facial from "../../assets/limpieza-facial-profunda.webp";
import massage from "../../assets/masaje-relajante-piedras.webp";

const services = [
  {
    img: hifu,
    title: "HIFU 7D",
    subtitle: "Facial y Corporal",
    description:
      "Tecnología de ultrasonido focalizado de alta intensidad. Estimula colágeno, tensa los tejidos y redefine el contorno con resultados visibles desde la primera sesión.",
  },
  {
    img: facial,
    title: "Limpieza Facial Profunda",
    subtitle: "Tratamiento facial",
    description:
      "Diagnóstico profesional, higiene profunda, exfoliación y extracción de impurezas combinado con aparatología y activos específicos para tu piel.",
  },
  {
    img: massage,
    title: "Masajes Relajantes",
    subtitle: "Piedras Calientes y Bambú",
    description:
      "Sumergite en un estado de paz absoluta. Calor terapéutico de piedras volcánicas y la presión del bambú para descontracturar y liberar tensiones.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-28 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-gold">
            Lo más demandado
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Nuestros Servicios
          </h2>
          <div className="gold-line w-24 mx-auto mt-6" />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.15}>
              <article className="group">
                <div className="overflow-hidden mb-6">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
                  {s.subtitle}
                </span>
                <h3 className="font-display text-3xl mt-2">{s.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-3 bg-foreground text-cream px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-foreground transition-colors duration-500"
          >
            Ver todos los servicios
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
