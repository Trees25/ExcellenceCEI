import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-cream/80 py-16 px-6">
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-12 items-start">
        <div>
          <h3 className="font-display text-2xl tracking-[0.25em] text-cream">
            EXCELLENCE
          </h3>
          <p className="mt-2 text-[10px] tracking-[0.4em] uppercase text-cream/60">
            Centro de Estética Integral
          </p>
          <p className="mt-6 text-sm leading-relaxed">
            Cuidado profesional con enfoque en tu bienestar integral.
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Visitanos
          </h4>
          <p className="text-sm leading-relaxed">
            Av. Alem 360 sur
            <br />
            Entre Santa Fe y Mitre
            <br />
            San Juan, Argentina
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Seguinos
          </h4>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/excellence.cei"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 border border-cream/30 flex items-center justify-center hover:bg-cream hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={`https://wa.me/5492646490323?text=${encodeURIComponent(`¡Hola Excellence CEI!. `)}`}
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 border border-cream/30 flex items-center justify-center hover:bg-cream hover:text-foreground transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-cream/10 mt-12 pt-6 text-center text-[10px] tracking-[0.3em] uppercase text-cream/50">
        © {new Date().getFullYear()} Excellence CEI · Todos los derechos
        reservados
      </div>
    </footer>
  );
}
