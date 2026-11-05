"use client";

import React from "react";
import SectionHeading from "../common/SectionHeading";
import { useEnquiry } from "../enquiry/EnquiryContext";
import { Calendar, BedDouble, Send, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Choose Resort & Dates",
    description:
      "Select your preferred retreat among Udaipur, Pushkar, Ajabgarh, or Jaipur. Choose your intended dates and adult guest count in the search concierge.",
    icon: <Calendar className="w-6 h-6 text-forest" />,
  },
  {
    step: "02",
    title: "Browse Verified Rooms",
    description:
      "Explore high-resolution galleries, room layouts, open-air shower villas, luxury tented suites, and plunge pool categories with verified specifications.",
    icon: <BedDouble className="w-6 h-6 text-forest" />,
  },
  {
    step: "03",
    title: "Submit Stay Enquiry",
    description:
      "Provide your contact details and any special requests via our simple form. No advance payment or credit card details are ever taken on this website.",
    icon: <Send className="w-6 h-6 text-forest" />,
  },
  {
    step: "04",
    title: "Receive Concierge Guidance",
    description:
      "Our independent travel desk reviews current resort availability, assists with group or celebration coordination, and connects you with verified booking options.",
    icon: <CheckCircle2 className="w-6 h-6 text-forest" />,
  },
];

export default function HowItWorksSection() {
  const { openEnquiry } = useEnquiry();

  return (
    <section id="how-it-works" className="py-20 bg-white scroll-mt-20 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Effortless Planning"
          title="Get Your Stay Information in Simple Steps"
          subtitle="We streamline your getaway planning with transparent property guidance, verified room specifications, and dedicated enquiry assistance."
        />

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-sand-cream/30 p-7 rounded-xl border border-sand hover:border-forest/30 transition-all duration-300 flex flex-col justify-between group hover:shadow-md"
            >
              {/* Step Number Top Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-white border border-sand flex items-center justify-center shadow-sm group-hover:border-forest/40 transition-colors">
                  {item.icon}
                </div>
                <span className="font-serif text-3xl font-light text-gold/80 group-hover:text-gold transition-colors">
                  {item.step}
                </span>
              </div>

              {/* Step Content */}
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-medium text-charcoal group-hover:text-forest transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Step indicator arrow for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-stone-300 pointer-events-none">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Reassurance Banner & CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-forest-surface border border-forest/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-charcoal">
                Transparent & Independent Assistance
              </h4>
              <p className="text-xs text-stone-600">
                100% Free Enquiry Submission • No Payment or Credit Card Required • Personal Concierge Coordination
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => openEnquiry()}
              className="w-full sm:w-auto px-6 py-3 bg-forest hover:bg-forest-hover text-white text-xs font-medium uppercase tracking-widest rounded transition-all shadow-sm text-center"
            >
              Start Stay Enquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

