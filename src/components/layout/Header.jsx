import React, { useState } from "react";
import { CalendarCheck, Car, Menu, Phone, X } from "lucide-react";
import { phone, whatsappUrl } from "../../data/contact";
import { navigate } from "../../lib/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "/"],
    ["Fleet", "/fleet"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/92 text-white backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded bg-gold text-ink">
            <Car size={22} />
          </span>
          <span className="text-left">
            <span className="block text-lg font-semibold leading-tight">
              Cars in Rwanda
            </span>
            <span className="block text-xs uppercase tracking-[0.18em] text-white/55">
              Premium rentals
            </span>
          </span>
        </button>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <button
              key={href}
              onClick={() => navigate(href)}
              className="text-sm font-medium text-white/78 transition hover:text-gold"
            >
              {label}
            </button>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <a
            className="btn border border-white/15 bg-white/5 text-white hover:bg-white/10"
            href={`tel:${phone}`}
          >
            <Phone size={17} /> Call Now
          </a>
          <a
            className="btn bg-gold text-ink hover:bg-[#d9b65d]"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <CalendarCheck size={17} /> WhatsApp
          </a>
        </div>
        <button
          className="icon-btn md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-ink px-4 py-4 md:hidden">
          <div className="grid gap-2">
            {links.map(([label, href]) => (
              <button
                key={href}
                onClick={() => {
                  setOpen(false);
                  navigate(href);
                }}
                className="rounded px-3 py-3 text-left font-medium text-white/80 hover:bg-white/10"
              >
                {label}
              </button>
            ))}
            <a
              className="btn justify-center border border-white/15 bg-white/5 text-white"
              href={`tel:${phone}`}
            >
              <Phone size={17} /> Call Now
            </a>
            <a
              className="btn justify-center bg-gold text-ink"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <CalendarCheck size={17} /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
