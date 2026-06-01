import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { address, email, phone } from "../../data/contact";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold">Cars in Rwanda</h2>
          <p className="mt-3 max-w-md leading-7 text-white/62">
            Premium car rental services for Kigali, airport transfers, business
            travel, and trips across Rwanda.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gold">Contact</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <a href={`tel:${phone}`}>{phone}</a>
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
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook size={18} />
            </a>
            <a
              className="icon-btn"
              aria-label="Instagram"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/45">
        © 2026 Cars in Rwanda. All rights reserved.
      </div>
    </footer>
  );
}
