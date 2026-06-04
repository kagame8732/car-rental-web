import React from "react";
import { vehicles } from "../data/vehicles";
import { FAQ } from "../components/sections/FAQ";
import { PageHero } from "../components/ui/PageHero";
import { VehicleCard } from "../components/vehicles/VehicleCard";

export function FleetPage() {
  return (
    <main>
      <PageHero
        eyebrow="Fleet"
        title="Available Amanilink rental vehicles"
        text="Compare sedans, SUVs, executive cars, and 4x4 options for self-drive, chauffeur hire, business travel, and airport transfers."
      />
      <section className="section bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.slug} vehicle={vehicle} />
          ))}
        </div>
      </section>
      <FAQ />
    </main>
  );
}
