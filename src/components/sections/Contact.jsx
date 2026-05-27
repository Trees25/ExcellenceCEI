import Reveal from "@/components/Reveal";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  Clock,
} from "lucide-react";

const items = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Av. Alem 360 sur, entre Santa Fe y Mitre, San Juan",
  },
  { icon: Phone, label: "Teléfono", value: "4227785", href: "tel:4227785" },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+54 264 649 0323",
    href: "https://wa.me/5492646490323",
  },
  {
    icon: Mail,
    label: "Email",
    value: "exellence.cei@gmail.com",
    href: "mailto:exellence.cei@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@excellence.cei",
    href: "https://instagram.com/excellence.cei",
  },
  { icon: Clock, label: "Horario", value: "Lun a Vie · 9:00 a 20:00" },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-28 px-6 bg-cream">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-gold">
            Contacto
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
            ¿Dudas? ¿Turnos? Contactanos
          </h2>
          <div className="gold-line w-24 mx-auto mt-6" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Queremos conocer qué buscas y cómo podemos ayudarte a sentirte
            increíble. Escribinos y hablamos sobre el tratamiento ideal para
            vos.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {items.map(({ icon: Icon, label, value, href }) => {
              const Content = (
                <div className="bg-cream p-8 h-full flex flex-col items-start hover:bg-background transition-colors">
                  <Icon className="h-5 w-5 text-gold" />
                  <span className="mt-4 text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                    {label}
                  </span>
                  <span className="mt-2 font-display text-xl">{value}</span>
                </div>
              );
              return href ? (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  {Content}
                </a>
              ) : (
                <div key={label}>{Content}</div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 text-center">
          <a
            href={`https://wa.me/5492646490323?text=${encodeURIComponent(`¡Hola Excellence CEI!.`)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-foreground text-cream px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-foreground transition-colors duration-500"
          >
            Escribinos por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
