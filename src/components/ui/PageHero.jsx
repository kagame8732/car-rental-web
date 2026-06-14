import React from "react";

export function PageHero({ eyebrow, title, text }) {
  return (
    <section className="bg-ink px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.16em] text-gold sm:text-sm sm:tracking-[0.2em]">
          {eyebrow}
        </p>
        <h1 className="animate-fade-up animate-delay-1 mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="animate-fade-up animate-delay-2 mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
          {text}
        </p>
      </div>
    </section>
  );
}
