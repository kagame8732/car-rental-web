import React from "react";
import { ContactPreview } from "../components/sections/ContactPreview";
import { PageHero } from "../components/ui/PageHero";

export function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Reserve by WhatsApp, phone, or form"
        text="Send your travel dates and vehicle preference. Our team will confirm availability and rental terms."
      />
      <ContactPreview />
      <section className="bg-slate-50 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-slate-200 bg-white">
          <iframe
            title="Cars in Rwanda office map"
            src="https://www.google.com/maps?q=Kigali%20Heights%20Rwanda&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
