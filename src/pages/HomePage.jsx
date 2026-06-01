import React from "react";
import { ArrowRight } from "lucide-react";
import { whatsappUrl } from "../data/contact";
import { vehicles } from "../data/vehicles";
import { ContactPreview } from "../components/sections/ContactPreview";
import { FAQ } from "../components/sections/FAQ";
import { Process } from "../components/sections/Process";
import { StatsBand } from "../components/sections/StatsBand";
import { Testimonials } from "../components/sections/Testimonials";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { LinkButton } from "../components/ui/LinkButton";
import { SectionTitle } from "../components/ui/SectionTitle";
import { VehicleCard } from "../components/vehicles/VehicleCard";

export function HomePage() {
  const featured = vehicles.filter((vehicle) => vehicle.featured);

  return (
    <>
      <section className="relative min-h-[720px] overflow-hidden bg-ink text-white">
        <img
          src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=2200&q=85"
          alt="Premium SUV on a scenic road"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/20" />
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-4 pb-24 pt-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded bg-white/10 px-4 py-2 text-sm font-medium text-gold ring-1 ring-white/15">
              Trusted car rentals in Kigali and across Rwanda
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Reliable premium cars for every Rwanda journey.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              Choose clean, well-maintained vehicles for airport transfers,
              business trips, family travel, and national park adventures.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton to="/fleet">
                View Fleet <ArrowRight size={18} />
              </LinkButton>
              <a
                className="btn justify-center border border-white/20 bg-white/10 text-white hover:bg-white/15"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Reserve on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <StatsBand />
      <section className="section bg-white">
        <SectionTitle
          eyebrow="Featured Cars"
          title="Popular vehicles ready for hire"
          text="A curated selection of sedans and SUVs suited for Kigali streets, countryside routes, and executive travel."
        />
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {featured.map((vehicle) => (
            <VehicleCard key={vehicle.slug} vehicle={vehicle} />
          ))}
        </div>
      </section>
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactPreview />
    </>
  );
}
