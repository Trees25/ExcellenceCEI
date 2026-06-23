import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Academy from "@/components/sections/Academy";
import Contact from "@/components/sections/Contact";
import PromoModal from "@/components/PromoModal";
export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // El setTimeout garantiza que el DOM esté listo
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);
  return (
    <>
      {/*  <PromoModal />*/}
      <Hero />
      <About />
      <Services />
      <Team />
      <Academy />
      <Testimonials />
      <Contact />
    </>
  );
}
