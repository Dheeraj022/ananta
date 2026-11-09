"use client";

import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is this the official website of Ananta Hotels & Resorts?",
    answer:
      "No. We are an independent travel partner network dedicated to providing detailed property overviews, room specifications, and stay enquiry coordination for Ananta resort properties in Rajasthan. Property names, trademarks, images, and brand assets belong to their respective owners.",
  },
  {
    question: "Can I make instant online bookings or pay directly on this site?",
    answer:
      "No. We do not collect online payments or process automated instant bookings on this platform. Our service is strictly informational and enquiry-driven. When you submit your stay preferences, our concierge desk assists with verifying availability and guiding your reservation through official channels.",
  },
  {
    question: "How does the stay enquiry concierge process work?",
    answer:
      "After you select your preferred resort, check-in/out dates, and guest count, your request is reviewed by our travel desk. We verify matching villa, suite, or cottage availability with the property, clarify any special meal or group preferences, and connect you with confirmed rate options.",
  },
  {
    question: "Are room tariffs guaranteed upon enquiry submission?",
    answer:
      "Submitting an enquiry does not lock in a fixed rate or guarantee room availability. Resort rates fluctuate based on seasonal demand, weekend travel, festivals, and real-time room occupancy. Final pricing and inclusions are confirmed when your reservation is formally processed.",
  },
  {
    question: "Can you assist with destination weddings, banquets, or corporate group bookings?",
    answer:
      "Yes. All four featured Ananta properties offer extensive banquet and event infrastructure—ranging from the 40,000+ sq. ft. Nilgiri Lawn in Udaipur to royal courtyard venues in Jaipur and desert celebration spaces in Pushkar. You can mention your group size and event requirements in your enquiry.",
  },
  {
    question: "What are the standard check-in and check-out timings?",
    answer:
      "Standard check-in across Ananta resorts is typically 2:00 PM onwards, and check-out is 11:00 AM. Early check-in or late check-out requests are subject to resort availability and front desk policy on the day of arrival.",
  },
  {
    question: "What cancellation and refund policies apply?",
    answer:
      "Cancellation and modification terms are established directly by the respective resort property and the specific booking plan selected. Our concierge will communicate the property's applicable cancellation guidelines to you prior to booking confirmation.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 bg-sand-cream/40 scroll-mt-20 border-t border-sand">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Clear answers about our independent travel partner service, stay enquiries, and resort planning across Rajasthan."
        />

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-sand/90 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-sand-cream/20 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-charcoal font-medium pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-sand-cream flex items-center justify-center shrink-0 text-stone-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-forest text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-sand/40 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

