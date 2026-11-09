"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { useEnquiry } from "@/components/enquiry/EnquiryContext";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import WhyExploreSection from "@/components/home/WhyExploreSection";
import {
  Compass,
  Users,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Mail,
  ChevronDown,
  Info,
  CalendarCheck,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  HelpCircle,
  Building2,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Share Your Preferences",
    description:
      "Choose your preferred Ananta destination, intended dates, and adult guest count in our simple enquiry form.",
  },
  {
    step: "02",
    title: "We Review & Verify",
    description:
      "Our desk checks matching room categories, availability feasibility, and property-specific notes.",
  },
  {
    step: "03",
    title: "Direct Coordination",
    description:
      "We connect you with verified booking channels and options to finalize your stay.",
  },
];

const whatWeDoList = [
  "Property information & guidance",
  "Accommodation information",
  "General travel assistance",
  "Local sightseeing information",
  "Enquiry assistance",
  "Connecting travellers with relevant service providers where applicable",
];

const whatWeDontDoList = [
  "We are not the property owner or operator.",
  "We do not represent the property officially unless stated.",
  "We do not guarantee room availability.",
  "We do not guarantee fixed prices.",
  "We do not claim the lowest or best price.",
  "We do not make misleading affiliation claims.",
  "We do not take online booking or payment through this information page.",
];

const commonFaqs = [
  {
    question: "Is Guest-assist the official website of Ananta Hotels?",
    answer:
      "No. Guest-assist is an independent travel partner network. We provide curated property overviews, room specifications, and stay enquiry coordination for Ananta resorts across Rajasthan. We are not owned or operated by Ananta Hotels.",
  },
  {
    question: "How will I receive room details & price quotes?",
    answer:
      "After submitting your stay preferences, our concierge reviews your requested dates and group size. We communicate current room feasibility and verified quotes directly to you via email or phone follow-up.",
  },
  {
    question: "Are room rates and availability guaranteed?",
    answer:
      "No. Submitting an enquiry does not guarantee a room reservation or lock in a fixed tariff. Real-time availability and rates fluctuate with season, occupancy, and weekend travel. Formal confirmation is issued only when your reservation is finalized.",
  },
  {
    question: "Is the information on this website always up to date?",
    answer:
      "We regularly review and verify room dimensions, bed configurations, and facility highlights against official property records. However, resort amenities, dining hours, and venue policies may evolve over time at the property's discretion.",
  },
];

export default function AboutContent() {
  const { openEnquiry } = useEnquiry();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="bg-white">
      {/* 1. HERO HEADER */}
      <section className="relative bg-charcoal text-white overflow-hidden py-16 sm:py-24 border-b border-stone-800">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_2810/x_2,y_0,w_4996,h_2810,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/ananta-hotels-resorts/The_Ananta_Udaipur_1_niakxc"
            alt="Ananta Resort"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "About Guest-assist" }]}
            className="mb-6 text-stone-400 [&_a]:text-stone-300 [&_span]:text-white [&_svg]:text-stone-500"
          />

          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-6 bg-gold inline-block" />
            <span className="text-[11px] uppercase tracking-[0.22em] font-medium text-gold">
              Independent Travel Assistance
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-white tracking-tight leading-[1.1] mb-6">
            About Guest-assist
          </h1>

          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-2xl mb-8">
            Guest-assist is an independent travel portal providing curated property information,
            verified room guidance, and dedicated stay enquiry coordination for premier Ananta
            resorts across Rajasthan.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/#properties"
              className="px-7 py-3.5 bg-forest hover:bg-forest-hover text-white text-xs font-medium uppercase tracking-widest rounded transition-all shadow-md"
            >
              Explore Properties
            </Link>
            <button
              type="button"
              onClick={() => openEnquiry()}
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm text-xs font-medium uppercase tracking-widest rounded transition-all"
            >
              Send an Enquiry
            </button>
          </div>
        </div>
      </section>

      {/* 2. CORE ABOUT CARD ("About Guest-assist") */}
      <section className="py-16 bg-[#FBF9F5] border-b border-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-sand/80 shadow-sm space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-forest-surface text-forest flex items-center justify-center border border-forest/15">
                <Sparkles className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                About Guest-assist
              </h2>
            </div>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-light">
              <p>
                <strong>Guest-assist</strong> is operated by <strong>{siteConfig.companyLegalName}</strong> as an independent travel partner focused on helping
                travelers discover and plan stays across premier Ananta hotel properties in Rajasthan:
                <strong> The Ananta Udaipur</strong>, <strong>Ananta Spa &amp; Resort Pushkar</strong>,{" "}
                <strong>Ananta Spa &amp; Resort Ajabgarh</strong>, and{" "}
                <strong>Ananta Spa &amp; Resort Jaipur</strong>.
              </p>
              <p>
                We provide comprehensive property information, verified room categories, amenity
                highlights, and structured enquiry assistance so travelers can plan their stays with
                clarity and ease.
              </p>
              <p>
                Our dedicated concierge team coordinates directly with travelers to understand group
                requirements, preferred travel dates, and room selections before facilitating formal
                enquiry routing through the appropriate resort channels.
              </p>
            </div>

            {/* Important Notice Callout */}
            <div className="p-4 sm:p-5 bg-amber-50/70 border border-amber-200/90 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-amber-950 leading-relaxed">
              <Info className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Important Notice:</span> Guest-assist is operated by <strong>{siteConfig.companyLegalName}</strong> as an independent
                travel partner. We are not the owner, operator, or official representative of Ananta
                Hotels &amp; Resorts. We do not process live bookings or take advance payments on this
                website.
              </div>
            </div>

            {/* Trust Pillars */}
            <div className="pt-4 border-t border-sand grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                <span>100% Free Enquiry Assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                <span>Direct Property Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                <span>Transparent Communication</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW OUR SERVICES ASSIST YOU */}
      <section className="py-14 bg-white border-b border-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sand-cream/60 p-6 sm:p-10 rounded-2xl border border-sand space-y-6">
            <h3 className="font-serif text-2xl font-medium text-charcoal border-b border-sand pb-3">
              How Our Services Assist You
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-forest-surface text-forest flex items-center justify-center shrink-0 border border-forest/20 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                    Multi-Property Discovery
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mt-1">
                    Explore verified room types, amenities, and landscapes across all 4 resorts in one place.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-forest-surface text-forest flex items-center justify-center shrink-0 border border-forest/20 mt-0.5">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                    Enquiry Assistance
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mt-1">
                    We review your dates and room preferences to guide your enquiry to the relevant property desk.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-forest-surface text-forest flex items-center justify-center shrink-0 border border-forest/20 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                    Transparent Communication
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mt-1">
                    Clear guidance on resort details with no hidden fees or inflated promises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY EXPLORE STAYS WITH US (OUR COMMITMENT) */}
      <WhyExploreSection />

      {/* 4. NEED HELP WITH STAY INFORMATION? (Assistance Card) */}
      <section className="py-12 bg-sand-cream/40 border-b border-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest-surface border border-forest/20 rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <div className="text-[11px] uppercase tracking-wider text-forest font-semibold">
                Direct Assistance
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                Need Help With Stay Information?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Our concierge team is available to assist you with property details, date
                feasibility, group room blocks, or special stay requirements across Rajasthan.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-sand shadow-sm w-full lg:w-auto shrink-0 space-y-3 text-center sm:text-left">
              <div className="text-xs uppercase tracking-wider text-stone-500 font-medium">
                Talk to Our Enquiry Desk
              </div>
              <div className="font-serif text-xl font-semibold text-charcoal">
                {siteConfig.contact.phone}
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="px-4 py-2 bg-forest hover:bg-forest-hover text-white text-xs font-medium uppercase tracking-wider rounded transition-colors flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Helpline</span>
                </a>
                <button
                  type="button"
                  onClick={() => openEnquiry()}
                  className="px-4 py-2 bg-sand-cream hover:bg-sand-warm text-charcoal text-xs font-medium uppercase tracking-wider rounded border border-sand transition-colors"
                >
                  Send an Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW OUR ENQUIRY ASSISTANCE WORKS (3-Step Process) */}
      <section className="py-16 md:py-20 bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-px w-6 bg-gold inline-block" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-forest">
                Simple 3-Step Process
              </span>
              <span className="h-px w-6 bg-gold inline-block" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal font-medium">
              How Our Enquiry Assistance Works
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base font-light">
              A transparent, step-by-step approach to luxury resort enquiry coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((item, idx) => (
              <div
                key={idx}
                className="bg-sand-cream/30 p-7 rounded-xl border border-sand hover:border-forest/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-forest text-white font-serif font-semibold text-sm flex items-center justify-center mb-5">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl font-medium text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 rounded-xl bg-sand-cream/70 border border-sand flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
              <span>No credit card required • Zero booking fees • Personal concierge coordination</span>
            </div>
            <button
              type="button"
              onClick={() => openEnquiry()}
              className="px-5 py-2 bg-forest text-white uppercase tracking-wider font-medium text-[11px] rounded shrink-0 hover:bg-forest-hover transition-colors"
            >
              Start Stay Enquiry
            </button>
          </div>
        </div>
      </section>

      {/* 6. OUR ROLE & INDEPENDENCE (Matching reference design) */}
      <section className="py-16 md:py-20 bg-[#F7F5F0] border-b border-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-200/90 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium tracking-tight">
                Our Role &amp; Independence
              </h2>

              <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand-cream border border-sand text-[11px] text-stone-700 font-medium">
                <span>Enquiry Based</span>
                <span className="text-stone-300">•</span>
                <span>No Booking</span>
                <span className="text-stone-300">•</span>
                <span>No Payment</span>
                <span className="text-stone-300">•</span>
                <span>Independent Service</span>
              </div>
            </div>

            <div className="space-y-2 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>Guest-assist is operated by <strong>{siteConfig.companyLegalName}</strong>, an independent travel partner.</p>
              <p className="text-stone-600">
                We provide general property information, guidance and enquiry assistance.
              </p>
              <p className="font-semibold text-[#BA8B32] text-sm sm:text-base leading-relaxed pt-1">
                We are not the owner, operator or official representative of Ananta Hotels &amp;
                Resorts or any other property unless specifically stated.
              </p>
              <p className="text-xs text-stone-400 font-light pt-1">
                Property names, trademarks, images and other brand-related intellectual property
                belong to their respective owners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-4">
              {/* Left Card: What We Do */}
              <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-stone-200/70">
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

              {/* Right Card: What We Don't Do */}
              <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-stone-200/70">
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
      </section>

      {/* 7. COMMON QUESTIONS (FAQ Accordion) */}
      <section className="py-16 md:py-20 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-px w-6 bg-gold inline-block" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-forest">
                Quick Answers
              </span>
              <span className="h-px w-6 bg-gold inline-block" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal font-medium">
              Common Questions
            </h2>
            <p className="mt-2 text-stone-600 text-sm font-light">
              Clear information about our independent partner assistance.
            </p>
          </div>

          <div className="space-y-3">
            {commonFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-sand/90 overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-sand-cream/20 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base sm:text-lg text-charcoal font-medium">
                      {faq.question}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full bg-sand-cream flex items-center justify-center shrink-0 text-stone-600 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-forest text-white" : ""
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-sand/40">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. TRUST FOOTNOTES & LEGAL DISCLAIMERS */}
      <section className="py-12 bg-sand-cream/30 border-b border-sand text-xs text-stone-600 leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="p-4 bg-white rounded-xl border border-sand space-y-1">
            <div className="font-semibold text-charcoal uppercase tracking-wider text-[10px]">
              Information Accuracy Disclaimer
            </div>
            <p className="font-light text-stone-600">
              All room descriptions, specifications, photos, and facility highlights displayed on
              this platform are compiled from partner resources and verified public information for
              guidance purposes. While we strive to maintain up-to-date data, resort policies, menu
              offerings, and venue layouts remain under the exclusive management of Ananta Hotels.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-sand space-y-1">
            <div className="font-semibold text-charcoal uppercase tracking-wider text-[10px]">
              Non-Affiliation &amp; Trademark Notice
            </div>
            <p className="font-light text-stone-600">
              &quot;Ananta Hotels &amp; Resorts&quot;, property titles, and associated logos are registered
              trademarks of their respective trademark holders. Guest-assist is an independent travel
              partner and does not claim ownership or official brand representation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

