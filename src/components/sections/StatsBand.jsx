import React from "react";

export function StatsBand() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
        {[
          ["7+", "Vehicle classes"],
          ["24/7", "Trip support"],
          ["98%", "Satisfied clients"],
          ["10k+", "Kilometers inspected"],
        ].map(([value, label]) => (
          <div key={label} className="border border-slate-100 p-6 text-center">
            <p className="text-3xl font-semibold text-ink">{value}</p>
            <p className="mt-1 text-sm text-slate-500">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
