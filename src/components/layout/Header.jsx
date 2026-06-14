import React, { useState } from "react";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import { displayPhone, phone, whatsappUrl } from "../../data/contact";
import { navigate, usePath } from "../../lib/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePath();
  const links = [
    ["Home", "/"],
    ["Fleet", "/fleet"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];
  const isActive = (href) => {
    if (href === "/") return path === "/";
    if (href === "/fleet") return path === "/fleet" || path.startsWith("/cars/");
    return path === href;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-ink shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate("/")}
          className="flex min-w-0 items-center gap-3"
        >
          <img
            src="/assets/logo.jpeg"
            alt="Amanilink logo"
            className="h-10 w-10 shrink-0 rounded border border-slate-200 bg-white object-cover shadow-sm sm:h-11 sm:w-11"
          />
          <span className="min-w-0 text-left">
            <span className="block truncate text-base font-semibold leading-tight sm:text-lg">
              Amanilink
            </span>
            <span className="block truncate text-[0.68rem] uppercase tracking-[0.14em] text-slate-500 sm:text-xs sm:tracking-[0.18em]">
              Safe travel
            </span>
          </span>
        </button>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => {
            const active = isActive(href);

            return (
              <button
                key={href}
                onClick={() => navigate(href)}
                className={`relative py-2 text-sm font-medium transition ${
                  active ? "text-gold" : "text-slate-700 hover:text-gold"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gold transition ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <a
            className="btn border border-slate-200 bg-white text-ink hover:bg-slate-50"
            href={`tel:${phone}`}
          >
            <Phone size={17} /> {displayPhone}
          </a>
          <a
            className="btn bg-gold text-white hover:bg-[#479737]"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <CalendarCheck size={17} /> WhatsApp
          </a>
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded bg-slate-100 text-ink transition hover:bg-slate-200 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="animate-menu border-t border-slate-200 bg-white px-4 py-4 shadow-sm md:hidden">
          <div className="grid gap-2">
            {links.map(([label, href]) => {
              const active = isActive(href);

              return (
                <button
                  key={href}
                  onClick={() => {
                    setOpen(false);
                    navigate(href);
                  }}
                  className={`rounded border px-3 py-3 text-left font-medium transition ${
                    active
                      ? "border-gold/25 bg-champagne text-gold"
                      : "border-transparent text-slate-700 hover:bg-slate-100"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </button>
              );
            })}
            <a
              className="btn justify-center border border-slate-200 bg-white text-ink"
              href={`tel:${phone}`}
            >
              <Phone size={17} /> {displayPhone}
            </a>
            <a
              className="btn justify-center bg-gold text-white"
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
