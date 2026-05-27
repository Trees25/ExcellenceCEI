import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import logo from "../assets/isotipo.png";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#equipo", label: "Equipo" },
  { href: "/#academia", label: "Academia" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/#contacto", label: "Contacto" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);

    if (href === "/") {
      if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
      else navigate("/");
      return;
    }

    const targetId = href.replace("/#", "");

    if (pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur border-b border-border"
          : "bg-background/90 backdrop-blur border-border lg:bg-transparent lg:backdrop-blur-none lg:border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo alineado con onClick */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="Logo Excellence"
            className="h-15 w-auto object-contain"
          />
          <div className="flex flex-col leading-none">
            <span
              className={`font-display text-2xl tracking-[0.25em] ${scrolled ? "text-foreground" : "text-foreground lg:text-cream"}`}
            >
              EXCELLENCE
            </span>
            <span
              className={`text-[10px] tracking-[0.4em] mt-1 ${scrolled ? "text-muted-foreground" : "text-cream/80"}`}
            >
              CENTRO DE ESTÉTICA INTEGRAL
            </span>
          </div>
        </a>

        {/* Navegación de Escritorio */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className={`text-xs tracking-[0.2em] uppercase transition-colors hover:text-gold cursor-pointer ${scrolled ? "text-foreground" : "text-cream"}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://instagram.com/excellence.cei"
            target="_blank"
            rel="noreferrer"
            className={`transition-colors hover:text-gold ${scrolled ? "text-foreground" : "text-cream"}`}
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </nav>

        <button
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-cream"}`}
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-50 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <span className="font-display text-xl tracking-[0.25em]">
                EXCELLENCE
              </span>
              <button onClick={() => setOpen(false)} aria-label="Cerrar">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navegación Móvil */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-display text-3xl cursor-pointer"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
