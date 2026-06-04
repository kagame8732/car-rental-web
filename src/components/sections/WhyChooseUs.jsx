import React from "react";
import {
  BadgeCheck,
  CalendarClock,
  Car,
  HandCoins,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";

export function WhyChooseUs() {
  const items = [
    [
      ShieldCheck,
      "Safe and reliable service",
      "Your safety is our priority, with secure, dependable journeys from pickup to drop-off.",
    ],
    [
      CalendarClock,
      "Available 24/7",
      "We are available round the clock, any day and any time.",
    ],
    [
      UserCheck,
      "Professional drivers",
      "Experienced, courteous, and well-trained drivers you can trust.",
    ],
    [
      Car,
      "Flexible rental options",
      "Daily, weekly, monthly, self-drive, and chauffeur rentals are available.",
    ],
    [
      BadgeCheck,
      "Well-maintained vehicles",
      "Clean, comfortable vehicles are regularly serviced and checked.",
    ],
    [
      HandCoins,
      "Competitive rates",
      "Quality service at a fair price for personal, business, and visitor travel.",
    ],
  ];

  return (
    <section className="section bg-slate-50">
      <SectionTitle
        eyebrow="Why Choose Us"
        title="Service built for safe, easy movement"
        text="Amanilink combines responsive communication, dependable vehicles, trained drivers, and flexible options for every trip."
      />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {items.map(([Icon, title, text]) => (
          <div
            key={title}
            className="rounded-lg border border-slate-200 bg-white p-5 sm:p-7"
          >
            <Icon className="text-gold" size={32} />
            <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
