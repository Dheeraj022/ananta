import React from "react";
import { Metadata } from "next";
import SectionHeading from "@/components/common/SectionHeading";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PartnerNotice from "@/components/common/PartnerNotice";
import Link from "next/link";
import { Compass, FileText, CheckCircle2, PhoneForwarded, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Independent Partner Service",
  description:
    "Learn about our independent travel partner service connecting discerning guests with four exceptional Ananta resort properties across Rajasthan.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-sand-cream/60 border-b border-sand py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} className="mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-charcoal">
            About Our Travel Partner Service
          </h1>
          <p className="mt-3 text-stone-600 max-w-2xl text-sm sm:text-base leading-relaxed">
            Independent property discovery and enquiry assistance for four handpicked Ananta resort
            destinations in Rajasthan.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Mandatory Partner Notice */}
        <PartnerNotice variant="card" />

        {/* Section 1: Who We Are */}
        <section className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
            Who We Are
          </h2>
          <p>
            We are an <strong>independent travel partner network</strong> providing curated
            hospitality information, accommodation browsing, and stay enquiry coordination for
            visitors interested in Rajasthan&apos;s celebrated Ananta resorts.
          </p>
          <p>
            Rather than operating as a generic automated booking directory, our focus is on
            delivering detailed property perspectives—highlighting the architectural distinction,
            verified room categories, wellness amenities, and geographic settings of each resort.
          </p>
        </section>

        {/* Section 2: How the Enquiry Process Works */}
        <section className="space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
              How the Enquiry Process Works
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              A transparent, step-by-step approach to retreat coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 bg-sand-cream/40 rounded-lg border border-sand space-y-3">
              <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center font-serif text-sm font-semibold">
                1
              </div>
              <h3 className="font-serif text-base font-semibold text-charcoal">
                Explore & Select
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Browse detailed room galleries, specifications, and facilities across Udaipur,
                Pushkar, Ajabgarh, or Jaipur.
              </p>
            </div>

            <div className="p-5 bg-sand-cream/40 rounded-lg border border-sand space-y-3">
              <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center font-serif text-sm font-semibold">
                2
              </div>
              <h3 className="font-serif text-base font-semibold text-charcoal">
                Submit Stay Details
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Provide your travel dates, preferred room type, guest count, and any special
                requests through our secure enquiry form.
              </p>
            </div>

            <div className="p-5 bg-sand-cream/40 rounded-lg border border-sand space-y-3">
              <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center font-serif text-sm font-semibold">
                3
              </div>
              <h3 className="font-serif text-base font-semibold text-charcoal">
                Concierge Review
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Our concierge team reviews your request to ensure details align with the
                resort&apos;s room policies and availability channels.
              </p>
            </div>

            <div className="p-5 bg-sand-cream/40 rounded-lg border border-sand space-y-3">
              <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center font-serif text-sm font-semibold">
                4
              </div>
              <h3 className="font-serif text-base font-semibold text-charcoal">
                Personal Follow-Up
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We get in touch via email or phone with room availability guidance, pricing quotes,
                and formal booking assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Principles & Boundaries */}
        <section className="p-8 bg-stone-50 border border-stone-200 rounded-xl space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">
            Our Operational Principles
          </h2>
          <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
              <span>
                <strong>Accurate, Verified Facts:</strong> We preserve factual room names, sizes,
                and amenities as documented by official property sources.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
              <span>
                <strong>No Misleading Guarantees:</strong> We never claim instant room booking,
                unverified discounts, or exclusive privileges without formal authorization.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
              <span>
                <strong>Privacy & Discretion:</strong> Guest contact details are treated with
                strict confidentiality and used solely for following up on your requested stay.
              </span>
            </li>
          </ul>
        </section>

        {/* Bottom CTA */}
        <div className="text-center pt-8 border-t border-stone-200">
          <h3 className="font-serif text-2xl font-light text-charcoal mb-4">
            Ready to Plan Your Stay?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#properties"
              className="px-6 py-3 bg-forest hover:bg-forest-hover text-white text-xs font-medium uppercase tracking-widest rounded transition-colors"
            >
              Explore Properties
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-stone-300 hover:border-forest text-stone-700 hover:text-forest text-xs font-medium uppercase tracking-widest rounded transition-colors"
            >
              Contact Concierge Desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

