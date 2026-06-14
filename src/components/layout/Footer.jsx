import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { address, displayPhone, email, phone } from "../../data/contact";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo.jpeg"
              alt="Amanilink logo"
              className="h-12 w-12 rounded bg-white object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold">Amanilink</h2>
              <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                Your link to safe travel
              </p>
            </div>
          </div>
          <p className="mt-3 max-w-md leading-7 text-white/62">
            Safe and reliable car rental, airport transfer, chauffeur, corporate
            travel, and accommodation support in Rwanda.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gold">Contact</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <a href={`tel:${phone}`}>{displayPhone}</a>
            <a href={`mailto:${email}`}>{email}</a>
            <span>{address}</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gold">Social</h3>
          <div className="mt-4 flex gap-3">
            <a
              className="icon-btn"
              aria-label="Facebook"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook size={18} />
            </a>
            <a
              className="icon-btn"
              aria-label="Instagram"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/45">
        © 2026 Amanilink. All rights reserved.
      </div>
    </footer>
  );
}
