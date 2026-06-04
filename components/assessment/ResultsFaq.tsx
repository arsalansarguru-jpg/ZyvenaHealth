"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RESULTS_FAQS } from "@/lib/assessment/content";

export function ResultsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface py-14 sm:py-20">
      <Container>
        <SectionHeading title="Questions About Your Results" />
        <div className="mx-auto max-w-2xl space-y-3">
          {RESULTS_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-border bg-white"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-navy sm:text-base"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {faq.question}
                  <span className="text-teal" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="border-t border-border px-5 pb-4 pt-3 text-sm leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
