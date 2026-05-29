import Reveal from "@/components/Reveal";
import ImgMica from "../../assets/Micaela-Gonzalez.webp";
import ImgEmi from "../../assets/Emilce-Paez.webp";

const team = [
  {
    name: "Emilce Páez Borbore",
    role: "Lic. Kinesiología y Fisiatría",
    bio: "Licenciada en kinesiología y fisiatría en el área estética, con posgrado en drenaje linfático manual. Acompaño a cada paciente en su proceso brindando tratamientos personalizados, enfocados en su bienestar y la confianza.",
    img: ImgEmi,
  },
  {
    name: "Micaela González Villegas",
    role: "Lic. Kinesiología y Fisiatría",
    bio: "Licenciada en Kinesiología y Fisiatría, con formación de posgrado en Kinesiología Dermatofuncional y Estética. Brindo tratamientos orientados a mejorar la calidad de la piel y el cuerpo desde una mirada profesional.",
    img: ImgMica,
  },
];

export default function Team() {
  return (
    <section id="equipo" className="py-28 px-6 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-gold">
            Equipo
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Profesionales de la salud
          </h2>
          <div className="gold-line w-24 mx-auto mt-6" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.15}>
              <article className="bg-card p-10 h-full flex flex-col items-center text-center">
                <img
                  src={m.img}
                  alt={`Foto de ${m.name}`}
                  loading="lazy"
                  className="h-30 w-30 rounded-full border border-gold object-cover object-top shadow-sm"
                />
                <h3 className="mt-6 font-display text-2xl">{m.name}</h3>
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-2">
                  {m.role}
                </span>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                  {m.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
