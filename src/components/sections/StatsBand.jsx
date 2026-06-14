import React from "react";

export function StatsBand() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
        {[
          ["24/7", "Availability"],
          ["20+", "Travel services"],
          ["100%", "Reliable support"],
          ["400+", "Trusted Clients"],
        ].map(([value, label]) => (
          <div key={label} className="border border-slate-100 p-4 text-center sm:p-6">
            <p className="text-2xl font-semibold text-ink sm:text-3xl">{value}</p>
            <p className="mt-1 text-sm text-slate-500">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
