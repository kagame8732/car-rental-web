import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { address, displayPhone, email, phone } from "../../data/contact";
import { ContactForm } from "../forms/ContactForm";

export function ContactPreview() {
  return (
    <section className="section bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Ready to book your ride or stay?
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Tell us your travel dates, route, preferred vehicle, or
            accommodation needs. Our team will respond with availability and
            next steps.
          </p>
          <div className="mt-6 grid gap-3 break-words text-slate-700">
            <a className="contact-line" href={`tel:Rwf{phone}`}>
              <Phone size={18} /> {displayPhone}
            </a>
            <a className="contact-line" href={`mailto:Rwf{email}`}>
              <Mail size={18} /> {email}
            </a>
            <span className="contact-line">
              <MapPin size={18} /> {address}
            </span>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
