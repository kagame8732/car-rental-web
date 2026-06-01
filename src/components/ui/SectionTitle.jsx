import React from "react";

export function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-4 text-base leading-7 ${light ? "text-white/70" : "text-slate-600"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
