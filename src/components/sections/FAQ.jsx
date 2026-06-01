import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/faqs";
import { SectionTitle } from "../ui/SectionTitle";

export function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="section bg-slate-50">
      <SectionTitle eyebrow="FAQ" title="Rental questions, answered" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {faqs.map(([q, a], index) => (
          <div key={q} className="border-b border-slate-200 py-4">
            <button
              onClick={() => setActive(active === index ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 text-left text-lg font-semibold text-ink"
            >
              {q}
              <ChevronDown
                className={`shrink-0 transition ${active === index ? "rotate-180" : ""}`}
              />
            </button>
            {active === index && (
              <p className="mt-3 leading-7 text-slate-600">{a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
