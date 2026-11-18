import React from "react";
import { siteConfig } from "@/data/site-config";

const whatWeDoList = [
  "Provide general travel and property information.",
  "Display accommodation and facility information where details are available from sources considered reliable.",
  "Receive customer information requests and provide enquiry assistance.",
  "Help customers identify which property they want to contact for final information.",
];

const whatWeDontDoList = [
  "We do not own or operate the listed hotels.",
  "We are not the official website, agent, partner or authorized representative of Ananta Hotels & Resorts.",
  "We do not guarantee room availability, prices, discounts or inclusions.",
  "We do not accept hotel booking payments on this website.",
  "We do not issue hotel booking confirmations.",
  "We do not control hotel cancellation or refund decisions.",
];

export default function OurRoleSection() {
  return (
    <section id="our-role" className="py-16 md:py-20 bg-[#F7F5F0] border-t border-sand scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Enclosure Matching Reference Design */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-200/90 shadow-sm">
          {/* Header Title */}
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium tracking-tight mb-4">
            Our Role & Independence
          </h2>

          {/* Descriptive Statements */}
          <div className="space-y-3 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              <strong>Guest-Assist</strong> is an independent travel agency operated by <strong>{siteConfig.companyLegalName}</strong>. We provide travel information and enquiry assistance to people exploring hotels and resorts in Rajasthan. This website brings together general information about selected Ananta properties in Udaipur, Pushkar, Ajabgarh and Jaipur. Customers can submit an enquiry to request assistance with property and travel information. We do not own or operate the listed properties and do not present this website as the official website of Ananta Hotels & Resorts. Final property details, availability, pricing, payment, booking confirmation, cancellation and refunds are handled directly by the relevant hotel.
            </p>
            <p className="font-semibold text-[#BA8B32] text-sm sm:text-base leading-relaxed pt-1">
              We are not the owner, operator, agent, partner or authorized representative of Ananta Hotels & Resorts.
            </p>
            <p className="text-xs text-stone-400 font-light">
              Property names, trademarks, images and other brand-related intellectual property belong to their respective owners.
            </p>
          </div>

          {/* Two Side-by-Side Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-4">
            {/* Left Card: What We Do */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-stone-200/70 flex flex-col justify-between">
              <div>
                {/* Header with Circle Check Icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full border border-[#BA8B32]/40 bg-[#BA8B32]/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-[#BA8B32]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-charcoal">
                    What We Do
                  </h3>
                </div>

                {/* Items List */}
                <ul className="space-y-3.5">
                  {whatWeDoList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                      <svg
                        className="w-4 h-4 text-[#BA8B32] shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Card: What We Don't Do */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-stone-200/70 flex flex-col justify-between">
              <div>
                {/* Header with Circle Cross Icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full border border-rose-300 bg-rose-50 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-rose-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-charcoal">
                    What We Don&apos;t Do
                  </h3>
                </div>

                {/* Items List */}
                <ul className="space-y-3.5">
                  {whatWeDontDoList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                      <svg
                        className="w-4 h-4 text-rose-500 shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m15 9-6 6" />
                        <path d="m9 9 6 6" />
                      </svg>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

