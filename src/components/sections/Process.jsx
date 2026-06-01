import React from "react";
import { SectionTitle } from "../ui/SectionTitle";

export function Process() {
  return (
    <section className="section bg-ink text-white">
      <SectionTitle
        light
        eyebrow="Rental Process"
        title="Reserve in three simple steps"
        text="No accounts, no online payment flow. Just choose your car and contact our team to confirm availability."
      />
      <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          [
            "01",
            "Choose your vehicle",
            "Browse the fleet and select the car that fits your route, comfort needs, and budget.",
          ],
          [
            "02",
            "Contact our team",
            "Message us on WhatsApp, call, or send the form with your dates and pickup location.",
          ],
          [
            "03",
            "Confirm and drive",
            "We confirm documents, delivery, rental terms, and hand over a clean, ready vehicle.",
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
