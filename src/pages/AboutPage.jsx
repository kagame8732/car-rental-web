import React from "react";
import { StatsBand } from "../components/sections/StatsBand";
import { PageHero } from "../components/ui/PageHero";
import { SectionTitle } from "../components/ui/SectionTitle";

export function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="A Rwanda rental partner built on trust"
        text="Cars in Rwanda helps residents, visitors, NGOs, and business travelers move confidently across Kigali and beyond."
      />
      <section className="section bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="leading-8 text-slate-600">
              Founded in Kigali, Cars in Rwanda was created to make quality car
              rental simple, responsive, and transparent. Our team understands
              local routes, airport logistics, and the importance of dependable
              vehicles for busy travelers.
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              We focus on well-maintained cars, practical advice, and fast
              communication. Whether you need a compact sedan for city errands
              or a 4x4 SUV for a scenic route, we help match the vehicle to the
              trip.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              [
                "Mission",
                "To deliver professional car rental services that are reliable, transparent, and easy to arrange.",
              ],
              [
                "Vision",
                "To become Rwanda's most trusted mobility partner for visitors and local organizations.",
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
      <section className="section bg-slate-50">
        <SectionTitle eyebrow="Team" title="People behind the service" />
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            [
              "Jean Claude",
              "Operations Lead",
              "Coordinates vehicle readiness, delivery schedules, and fleet inspections.",
            ],
            [
              "Grace Umutesi",
              "Reservations Manager",
              "Handles customer inquiries, confirmations, and trip support.",
            ],
            [
              "Patrick Niyonzima",
              "Fleet Supervisor",
              "Keeps vehicles clean, serviced, and prepared for Rwanda roads.",
            ],
          ].map(([name, role, bio]) => (
            <div
              key={name}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded bg-ink text-xl font-semibold text-gold">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="text-xl font-semibold text-ink">{name}</h3>
              <p className="mt-1 text-sm font-medium text-gold">{role}</p>
              <p className="mt-4 leading-7 text-slate-600">{bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
