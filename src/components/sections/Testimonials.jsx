import React from "react";
import { Star } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";

export function Testimonials() {
  return (
    <section className="section bg-white">
      <SectionTitle eyebrow="Testimonials" title="What customers say" />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          [
            "Aline M.",
            "The Prado was spotless and perfect for our Akagera weekend. Delivery at the hotel was exactly on time.",
          ],
          [
            "James K.",
            "Quick WhatsApp response, clear pricing, and a comfortable RAV4 for my business meetings in Kigali.",
          ],
          [
            "Nadia R.",
            "Professional service from airport pickup to return. I would book again for my next Rwanda trip.",
          ],
        ].map(([name, quote]) => (
          <div
            key={name}
            className="rounded-lg border border-slate-200 bg-white p-7"
          >
            <div className="mb-4 flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="leading-7 text-slate-700">"{quote}"</p>
            <p className="mt-5 font-semibold text-ink">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
