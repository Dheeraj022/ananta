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
              eyebrow="Independent Hospitality Partner"
              title="A Curated Gateway to Rajasthan's Ananta Stays"
              alignment="left"
              className="mb-4"
            />

            <p className="text-base text-stone-700 leading-relaxed font-light">
              At <strong>Guest-assist</strong> (operated by <strong>{siteConfig.companyLegalName}</strong>), we operate as an independent travel partner focused on helping travelers discover and
              plan stays across four distinguished Ananta hotel properties in Rajasthan. Whether
              you seek the verdant tranquility of Udaipur, the spiritual serenity of Pushkar, the
              secluded valleys of Ajabgarh, or the royal architecture of Jaipur, our platform
              provides comprehensive property information and a streamlined enquiry service.
            </p>

            <p className="text-sm text-stone-600 leading-relaxed">
              Our role is to coordinate with you to clarify your stay preferences, group
              arrangements, and desired room categories before your request is routed through the
              appropriate resort channels.
            </p>
          </div>

          {/* Partner Service Highlights - Visible on Desktop/Laptop only; moved to About Us for mobile */}
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
                    Multi-Property Discovery
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mt-0.5">
                    Explore verified room types, amenities, and landscapes across all 4 resorts in one place.
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
                    We review your dates and room preferences to guide your enquiry to the relevant property desk.
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
                    Clear guidance on resort details with no hidden fees or inflated promises.
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

