import React from "react";
import { SectionTitle } from "../ui/SectionTitle";

export function Process() {
  return (
    <section className="section bg-ink text-white">
      <SectionTitle
        light
        eyebrow="Booking Process"
        title="Book in three simple steps"
        text="Choose the service you need, contact our team, and we confirm the details for your ride or accommodation."
      />
      <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          [
            "01",
            "Choose your service",
            "Select self-drive, chauffeur hire, airport transfer, business transport, event travel, or accommodation.",
          ],
          [
            "02",
            "Contact our team",
            "Message us on WhatsApp, call, or send the form with your dates, pickup point, route, and preferences.",
          ],
          [
            "03",
            "Confirm and move",
            "We confirm availability, terms, and timing so your journey or stay is ready when you need it.",
          ],
        ].map(([num, title, text]) => (
          <div
            key={num}
            className="rounded-lg border border-white/10 bg-white/5 p-7"
          >
            <span className="text-sm font-semibold text-gold">{num}</span>
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            <p className="mt-3 leading-7 text-white/65">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
