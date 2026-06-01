import React from "react";
import { ShieldCheck } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";

export function WhyChooseUs() {
  const items = [
    [
      "Clean, inspected vehicles",
      "Every car is checked before handover and prepared to a high professional standard.",
    ],
    [
      "Flexible rental options",
      "Daily, weekly, monthly, self-drive, and chauffeur rentals are available.",
    ],
    [
      "Local route expertise",
      "We help you choose the right vehicle for Kigali, business travel, or upcountry roads.",
    ],
  ];

  return (
    <section className="section bg-slate-50">
      <SectionTitle
        eyebrow="Why Choose Us"
        title="Service built for confidence"
        text="We combine responsive communication, transparent rates, and dependable vehicles so your trip starts smoothly."
      />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {items.map(([title, text]) => (
          <div
            key={title}
            className="rounded-lg border border-slate-200 bg-white p-7"
          >
            <ShieldCheck className="text-gold" size={32} />
            <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
