"use client";

import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "Is this the official website of Ananta Hotels & Resorts?",
    answer:
      "No. This website is independently operated by Hello My Trip Private Limited as a travel information and enquiry assistance service. It is not owned, operated, affiliated with, endorsed by or authorized by Ananta Hotels & Resorts.",
  },
  {
    question: "Can I book or pay for a room on this website?",
    answer:
      "No. This website provides property information and enquiry assistance only. It does not accept hotel booking payments or confirm reservations. Please contact the relevant hotel directly for booking and payment.",
  },
  {
    question: "Does submitting an enquiry confirm my room?",
    answer:
      "No. Submitting an enquiry only sends your information request to Guest-Assist. It does not reserve a room or guarantee availability.",
  },
  {
    question: "Can you confirm room availability and rates?",
    answer:
      "Guest-Assist does not guarantee live room availability or final rates. The relevant hotel must confirm current availability, applicable rates, taxes, inclusions and conditions directly.",
  },
  {
    question: "Who handles payment and booking confirmation?",
    answer:
      "The relevant hotel handles final payment and reservation confirmation. Customers should make payment only through the hotel's confirmed payment process.",
  },
  {
    question: "Who handles cancellation and refunds?",
    answer:
      "The relevant hotel’s cancellation and refund terms apply to hotel reservations and payments. Customers should contact the hotel directly. Guest-Assist does not process hotel booking refunds if it has not received the hotel payment.",
  },
  {
    question: "Are the property details always current?",
    answer:
      "Property details, room categories, facilities, images, timings and services may change. Please confirm current information directly with the relevant property.",
  },
  {
    question: "Does Guest-Assist charge for enquiry submission?",
    answer:
      "No. Enquiry submission on Guest-Assist is completely free of charge. We provide travel information and enquiry assistance without charging any fees for submitting your enquiry.",
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
          subtitle="Clear answers about our independent travel agency, stay enquiries, and property information service."
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

