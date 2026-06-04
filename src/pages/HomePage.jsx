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
      <section className="relative min-h-[620px] overflow-hidden bg-ink text-white sm:min-h-[680px] lg:min-h-[720px]">
        <img
          src="/assets/about.jpeg"
          alt="Amanilink travel and vehicle rental brochure"
          className="animate-fade-in absolute inset-0 h-full w-full object-cover object-left opacity-30 sm:object-center sm:opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/95 via-ink/82 to-ink/40 sm:bg-gradient-to-r sm:from-ink sm:via-ink/78 sm:to-ink/20" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-4 pb-16 pt-14 sm:min-h-[680px] sm:px-6 sm:pb-24 lg:min-h-[720px] lg:px-8">
          <div className="max-w-3xl">
            <p className="animate-fade-up mb-4 inline-flex max-w-full rounded bg-white/10 px-3 py-2 text-xs font-medium text-gold ring-1 ring-white/15 sm:mb-5 sm:px-4 sm:text-sm">
              Amanilink - your link to safe travel
            </p>
            <h1 className="animate-fade-up animate-delay-1 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl sm:leading-tight lg:text-7xl">
              Need a vehicle? We have got you covered.
            </h1>
            <p className="animate-fade-up animate-delay-2 mt-5 max-w-2xl text-base leading-7 text-white/76 sm:mt-6 sm:text-lg sm:leading-8">
              Safe, reliable, anytime, anywhere. Book self-drive cars,
              chauffeur-driven rides, airport transfers, corporate transport,
              and comfortable stays through one trusted team.
            </p>
            <div className="animate-fade-up animate-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton to="/fleet">
                View Fleet <ArrowRight size={18} />
              </LinkButton>
              <a
                className="btn justify-center border border-white/20 bg-white/10 text-white hover:bg-white/15"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Book on WhatsApp
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
          text="Clean, regularly serviced sedans and SUVs suited for Kigali streets, airport pickups, countryside routes, and executive travel."
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
