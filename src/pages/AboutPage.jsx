import React from "react";
import { StatsBand } from "../components/sections/StatsBand";
import { PageHero } from "../components/ui/PageHero";

export function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="Amanilink connects people to safe travel"
        text="Amanilink helps residents, visitors, businesses, and organizations arrange dependable transport and accommodation across Rwanda."
      />
      <section className="section bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <img
              src="/assets/logo.jpeg"
              alt="Amanilink logo"
              className="mb-8 h-28 w-28 rounded-lg border border-slate-200 object-cover"
            />
            <p className="leading-8 text-slate-600">
              Amanilink is a professional travel solutions company dedicated to
              safe, reliable, and convenient transportation services for
              individuals, businesses, and visitors.
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              We combine comfort, safety, and efficiency to deliver exceptional
              travel experiences at any time, anywhere. Our services include
              self-drive rentals, professional drivers, airport transfers,
              corporate transport, event travel, and accommodation support.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              [
                "Mission",
                "To deliver dependable and innovative travel solutions that connect people to places safely and comfortably.",
              ],
              [
                "Vision",
                "To be the most trusted and preferred travel solutions partner in the region.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6"
              >
                <h2 className="text-xl font-semibold text-ink">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <StatsBand />
    </main>
  );
}
