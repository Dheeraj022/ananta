import React from "react";
import SectionHeading from "../common/SectionHeading";
import { siteConfig } from "@/data/site-config";
import { Compass, Building2, HelpCircle } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Editorial Text */}
          <div className="w-full lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="Independent Travel Agency"
              title="Independent Property Information & Enquiry Assistance"
              alignment="left"
              className="mb-4"
            />

            <p className="text-base text-stone-700 leading-relaxed font-light">
              Explore general information about selected Ananta properties. <strong>Guest-Assist</strong> (operated by <strong>{siteConfig.companyLegalName}</strong>) is an independent travel information and enquiry assistance platform, not an official hotel website or representative. We do not confirm reservations or check live hotel inventory. Contact the respective hotel directly to verify current rates, availability, policies and reservations.
            </p>

            <p className="text-sm text-stone-600 leading-relaxed">
              We assist with your information request and help you understand property options across Udaipur, Pushkar, Ajabgarh, and Jaipur. Final availability, pricing, payment, and reservation confirmation are handled directly by the relevant hotel.
            </p>
          </div>

          {/* Service Highlights - Visible on Desktop/Laptop only; moved to About Us for mobile */}
          <div className="hidden lg:block lg:col-span-5 bg-sand-cream/60 p-8 rounded-xl border border-sand space-y-6">
            <h3 className="font-serif text-xl font-medium text-charcoal border-b border-sand pb-3">
              How Our Service Assists You
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-forest-surface text-forest flex items-center justify-center shrink-0 border border-forest/20 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                    Property Information
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mt-0.5">
                    Browse accommodation categories, general amenities, and destination settings across 4 properties.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-forest-surface text-forest flex items-center justify-center shrink-0 border border-forest/20 mt-0.5">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                    Enquiry Assistance
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mt-0.5">
                    Share your preferred property, dates, and questions for responsive enquiry support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-forest-surface text-forest flex items-center justify-center shrink-0 border border-forest/20 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                    Transparent Communication
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mt-0.5">
                    No online booking, no hotel payment collection, and direct hotel confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

