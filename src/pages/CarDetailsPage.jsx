import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { whatsappUrl } from "../data/contact";
import { vehicles } from "../data/vehicles";
import { PageHero } from "../components/ui/PageHero";

export function CarDetailsPage({ slug }) {
  const vehicle = vehicles.find((item) => item.slug === slug) || vehicles[0];
  const [mainImage, setMainImage] = useState(vehicle.gallery[0]);

  useEffect(() => setMainImage(vehicle.gallery[0]), [vehicle.slug]);

  return (
    <main>
      <PageHero
        eyebrow={vehicle.type}
        title={vehicle.name}
        text={`${vehicle.year} ${vehicle.transmission} ${vehicle.fuel} rental car in Rwanda from $${vehicle.price} per day.`}
      />
      <section className="section bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <img
              className="h-[300px] w-full rounded-lg object-cover shadow-premium sm:h-[520px]"
              src={mainImage}
              alt={`${vehicle.name} gallery`}
            />
            <div className="mt-4 grid grid-cols-3 gap-3">
              {vehicle.gallery.map((image) => (
                <button
                  key={image}
                  onClick={() => setMainImage(image)}
                  className="overflow-hidden rounded border border-slate-200"
                >
                  <img
                    className="h-24 w-full object-cover sm:h-32"
                    src={image}
                    alt={`${vehicle.name} thumbnail`}
                  />
                </button>
              ))}
            </div>
          </div>
          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold text-ink">
              Vehicle specifications
            </h2>
            <div className="mt-5 grid gap-3">
              {[
                ["Year", vehicle.year],
                ["Transmission", vehicle.transmission],
                ["Fuel type", vehicle.fuel],
                ["Seats", vehicle.seats],
                ["Daily price", `$${vehicle.price}`],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between border-b border-slate-200 pb-3 text-sm"
                >
                  <span className="text-slate-500">{label}</span>
                  <span className="font-semibold text-ink">{value}</span>
                </div>
              ))}
            </div>
            <h3 className="mt-7 text-lg font-semibold text-ink">Features</h3>
            <div className="mt-3 grid gap-2">
              {vehicle.features.map((feature) => (
                <span
                  key={feature}
                  className="flex items-center gap-2 text-slate-700"
                >
                  <Check size={16} className="text-gold" /> {feature}
                </span>
              ))}
            </div>
            <h3 className="mt-7 text-lg font-semibold text-ink">
              Rental conditions
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              <li>
                Valid driving license and passport or national ID required.
              </li>
              <li>Security deposit confirmed before handover.</li>
              <li>Fuel is returned at the same level as received.</li>
              <li>Chauffeur service available on request.</li>
            </ul>
            <a
              className="btn mt-7 w-full justify-center bg-gold text-ink hover:bg-[#d9b65d]"
              href={`${whatsappUrl}%20Vehicle:%20${encodeURIComponent(vehicle.name)}`}
              target="_blank"
              rel="noreferrer"
            >
              Contact to Reserve
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
