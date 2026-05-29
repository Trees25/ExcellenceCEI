import { Routes, Route, useLocation } from "react-router-dom";

import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/sections/Footer";
import Home from "./components/pages/Home";
import AllServices from "./components/pages/AllServices";
import Academy from "./components/pages/AllAcademy";
import Wsp from "./components/WhatsAppButton";
export default function App() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className=" bg-background text-foreground">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="servicios" element={<AllServices />} />
          <Route path="academia" element={<Academy />} />
        </Routes>
      </main>
      <Footer />
      <Wsp />
    </div>
  );
}
