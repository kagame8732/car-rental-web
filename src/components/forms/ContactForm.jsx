import React, { useState } from "react";
import { phone, whatsappUrl } from "../../data/contact";
import { vehicles } from "../../data/vehicles";

export function ContactForm() {
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = {
      name: formData.get("name")?.trim() || "",
      phone: formData.get("phone")?.trim() || "",
      email: formData.get("email")?.trim() || "",
      service: formData.get("service") || "",
      vehicle: formData.get("vehicle") || "",
      startDate: formData.get("startDate") || "",
      endDate: formData.get("endDate") || "",
      message: formData.get("message")?.trim() || "",
    };
    const nextErrors = {};

    if (values.name.length < 2) {
      nextErrors.name = "Enter your full name.";
    }

    if (!/^\+?\d[\d\s-]{6,}$/.test(values.phone)) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.service) {
      nextErrors.service = "Select the service you need.";
    }

    if (!values.startDate) {
      nextErrors.startDate = "Select a start date.";
    }

    if (!values.endDate) {
      nextErrors.endDate = "Select an end date.";
    }

    if (
      values.startDate &&
      values.endDate &&
      new Date(values.endDate) < new Date(values.startDate)
    ) {
      nextErrors.endDate = "End date cannot be before start date.";
    }

    if (values.message.length < 5) {
      nextErrors.message = "Add a short message with your request details.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const message = [
      "Hello Amanilink, I would like to book:",
      "",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email || "Not provided"}`,
      `Service: ${values.service}`,
      `Vehicle: ${values.vehicle || "Not selected"}`,
      `Start date: ${values.startDate}`,
      `End date: ${values.endDate}`,
      `Message: ${values.message}`,
    ].join("\n");

    const url = `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      className="rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-6"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="form-field">
          Full name
          <input
            name="name"
            required
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </label>
        <label className="form-field">
          Phone number
          <input
            name="phone"
            required
            placeholder="+250..."
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone && <span className="form-error">{errors.phone}</span>}
        </label>
      </div>
      <label className="form-field mt-4">
        Email address
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </label>
      <label className="form-field mt-4">
        Service needed
        <select
          name="service"
          defaultValue=""
          required
          aria-invalid={Boolean(errors.service)}
        >
          <option value="" disabled>
            Select service
          </option>
          <option>Self-drive car rental</option>
          <option>Chauffeur-driven car hire</option>
          <option>Airport transfer</option>
          <option>Corporate transportation</option>
          <option>Event transportation</option>
          <option>Accommodation support</option>
        </select>
        {errors.service && <span className="form-error">{errors.service}</span>}
      </label>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="form-field">
          Preferred vehicle
          <select name="vehicle" defaultValue="">
            <option value="" disabled>
              Select vehicle
            </option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.slug}>{vehicle.name}</option>
            ))}
          </select>
        </label>
        <label className="form-field">
          Start date
          <input
            name="startDate"
            required
            type="date"
            aria-invalid={Boolean(errors.startDate)}
          />
          {errors.startDate && (
            <span className="form-error">{errors.startDate}</span>
          )}
        </label>
      </div>
      <label className="form-field mt-4">
        End date
        <input
          name="endDate"
          required
          type="date"
          aria-invalid={Boolean(errors.endDate)}
        />
        {errors.endDate && <span className="form-error">{errors.endDate}</span>}
      </label>
      <label className="form-field mt-4">
        Message
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Pickup location, route, accommodation needs, and any special requests"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </label>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          className="btn flex-1 justify-center bg-ink text-white hover:bg-steel"
          type="submit"
        >
          Send Request
        </button>
        <a
          className="btn flex-1 justify-center bg-gold text-white hover:bg-[#479737]"
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
