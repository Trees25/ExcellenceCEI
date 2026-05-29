import Reveal from "@/components/Reveal";
import about1 from "@/assets/inicio-1.webp";
import about2 from "@/assets/inicio-2.webp";

const philosophy = {
  mision:
    "Brindar servicios de estética de alta calidad, trabajando para que cada paciente se sienta acompañado, cuidado y seguro.",
  vision:
    "Ser un centro de estética referente en San Juan, reconocido por la calidad de nuestros tratamientos y la profesionalidad del equipo.",
};

const values = [
  {
    title: "Profesionalismo",
    text: "Trabajamos con responsabilidad, conocimiento y compromiso en cada tratamiento.",
  },
  {
    title: "Calidad",
    text: "Cuidamos cada detalle para brindar un servicio de excelencia.",
  },
  {
    title: "Cercanía",
    text: "Acompañamos a cada paciente de manera personalizada y humana.",
  },
  {
    title: "Confianza",
    text: "Generamos un espacio seguro donde cada persona se sienta cómoda y contenida.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-28 px-6 bg-cream">
      <div className="mx-auto max-w-7xl">
        {/* Bloque 1: Quiénes somos */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <Reveal className="space-y-6">
            <span className="text-xs tracking-[0.4em] uppercase text-gold">
              Quiénes somos
            </span>
            <div className="gold-line w-24" />
            <p className="text-muted-foreground leading-relaxed">
              Excellence nació hace tres años con el objetivo de crear un
              espacio donde la estética se aborde de manera profesional y
              personalizada. Fundada por{" "}
              <strong>Sabrina Alejandra Beatrice</strong>, el proyecto fue
              creciendo con el compromiso de brindar un servicio de calidad,
              combinando tecnología, conocimiento y cercanía con cada paciente.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Hoy contamos con un equipo conformado por profesionales de la
              salud, lo que nos permite trabajar con responsabilidad, seguridad
              y un enfoque integral en cada tratamiento. Acompañamos a cada
              persona en su proceso, cuidando cada detalle para que la
              experiencia sea tan importante como el resultado.
            </p>
            <a
              href="#equipo"
              className="inline-block text-xs tracking-[0.3em] uppercase border-b border-gold pb-1 hover:text-gold transition-colors"
            >
              Conocé al equipo
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={about1}
                alt="Recepción Excellence"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover translate-y-6"
              />
              <img
                src={about2}
                alt="Cabina de tratamiento"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover -translate-y-6"
              />
            </div>
          </Reveal>
        </div>

        {/* Bloque 2: Filosofía de trabajo */}
        <Reveal className="text-center mb-16">
          <h3 className="font-display text-3xl md:text-4xl">
            Filosofía de trabajo
          </h3>
          <div className="gold-line w-16 mx-auto mt-4" />
        </Reveal>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Reveal delay={0.1}>
            <div className="bg-card/50 p-8 border-t-2 border-gold h-full">
              <h4 className="font-display text-2xl mb-4 text-foreground">
                Misión
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {philosophy.mision}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bg-card/50 p-8 border-t-2 border-gold h-full">
              <h4 className="font-display text-2xl mb-4 text-foreground">
                Visión
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {philosophy.vision}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Bloque 2: Filosofía de trabajo */}
        <Reveal className="text-center mb-16">
          <h3 className="font-display text-3xl md:text-4xl">
            Valores del centro
          </h3>
          <div className="gold-line w-16 mx-auto mt-4" />
        </Reveal>

        {/* Valores */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="border-t border-gold/50 pt-6">
                <h4 className="font-display text-xl">{v.title}</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
