import React, { useEffect, useMemo } from "react";
import { Phone } from "lucide-react";
import { whatsappUrl } from "./data/contact";
import { vehicles } from "./data/vehicles";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { usePath } from "./lib/navigation";
import { AboutPage } from "./pages/AboutPage";
import { CarDetailsPage } from "./pages/CarDetailsPage";
import { ContactPage } from "./pages/ContactPage";
import { FleetPage } from "./pages/FleetPage";
import { HomePage } from "./pages/HomePage";

export function App() {
  const path = usePath();
  const page = useMemo(() => {
    if (path === "/fleet") return <FleetPage />;
    if (path === "/about") return <AboutPage />;
    if (path === "/contact") return <ContactPage />;
    if (path.startsWith("/cars/")) {
      return <CarDetailsPage slug={path.split("/").pop()} />;
    }
    return <HomePage />;
  }, [path]);

  useEffect(() => {
    document.title = path.startsWith("/cars/")
      ? `${vehicles.find((vehicle) => vehicle.slug === path.split("/").pop())?.name || "Vehicle"} | Cars in Rwanda`
      : "Cars in Rwanda | Premium Car Rental in Kigali";
  }, [path]);

  return (
    <>
      <Header />
      {page}
      <Footer />
      <a
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-premium transition hover:scale-105"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact on WhatsApp"
      >
        <Phone size={24} />
      </a>
    </>
  );
}
