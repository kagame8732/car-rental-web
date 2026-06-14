import React from "react";

export function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl px-4 text-center sm:mb-10 sm:px-0">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold sm:text-sm sm:tracking-[0.2em]">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-4xl Rwf{light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-4 text-base leading-7 Rwf{light ? "text-white/70" : "text-slate-600"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
