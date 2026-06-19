import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
// Reemplaza con la ruta correcta de tu imagen
import promoImage from "../assets/Promo.jpeg";

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Al no haber sessionStorage, esto se ejecuta SIEMPRE que se carga el Home
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Fondo oscuro desenfocado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Contenedor central */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-lg shadow-2xl bg-secondary"
          >
            {/* Botón de cierre */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/80"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Imagen promocional */}
            <img
              src={promoImage}
              alt="Promoción Especial Excellence"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
