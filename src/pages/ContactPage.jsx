import React from "react";
import { ContactPreview } from "../components/sections/ContactPreview";
import { PageHero } from "../components/ui/PageHero";

export function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Book your ride or accommodation"
        text="Send your travel dates, route, vehicle preference, or stay request. Our team will confirm availability and next steps."
      />
      <ContactPreview />
      <section className="bg-slate-50 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-slate-200 bg-white">
          <iframe
            title="Amanilink Kigali map"
            src="https://www.google.com/maps?q=Kigali%20Rwanda&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
