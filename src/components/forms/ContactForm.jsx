import React from "react";
import { whatsappUrl } from "../../data/contact";
import { vehicles } from "../../data/vehicles";

export function ContactForm() {
  return (
    <form
      className="rounded-lg border border-slate-200 bg-slate-50 p-6"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="form-field">
          Full name
          <input required placeholder="Your name" />
        </label>
        <label className="form-field">
          Phone number
          <input required placeholder="+250..." />
        </label>
      </div>
      <label className="form-field mt-4">
        Email address
        <input type="email" placeholder="you@example.com" />
      </label>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="form-field">
          Preferred vehicle
          <select defaultValue="">
            <option value="" disabled>
              Select vehicle
            </option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.slug}>{vehicle.name}</option>
            ))}
          </select>
        </label>
        <label className="form-field">
          Rental dates
          <input placeholder="May 12 - May 18" />
        </label>
      </div>
      <label className="form-field mt-4">
        Message
        <textarea
          rows="5"
          placeholder="Pickup location, route, and any special requests"
        />
      </label>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          className="btn justify-center bg-ink text-white hover:bg-steel"
          type="submit"
        >
          Send Request
        </button>
        <a
          className="btn justify-center bg-gold text-ink hover:bg-[#d9b65d]"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Us
        </a>
      </div>
    </form>
  );
}
