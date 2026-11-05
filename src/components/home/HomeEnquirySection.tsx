import React from "react";
import SectionHeading from "../common/SectionHeading";
import EnquiryForm from "../enquiry/EnquiryForm";
import PartnerNotice from "../common/PartnerNotice";
import { siteConfig } from "@/data/site-config";
import { Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export default function HomeEnquirySection() {
  return (
    <section id="enquiry" className="py-20 bg-sand-light scroll-mt-20 border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="Start Planning"
              title="Share Your Stay Details"
              subtitle="Share your preferred property and stay details. Our team will get in touch to assist with your enquiry."
              alignment="left"
              className="mb-6"
            />

            <div className="space-y-4 text-xs text-stone-600 leading-relaxed">
              <p>
                Whether you are organizing a tranquil family retreat, a weekend wellness getaway,
                or exploring group villa bookings, our independent concierge team assists with room
                guidance and coordinates with the respective property.
              </p>
            </div>

            {/* Concierge details */}
            <div className="p-6 bg-white rounded-lg border border-sand space-y-4 shadow-sm">
              <div className="text-xs uppercase tracking-wider font-semibold text-charcoal border-b border-stone-100 pb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-forest" />
                <span>Concierge Enquiry Assistance</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-charcoal">{siteConfig.contact.phone}</div>
                    <div className="text-[10px] text-stone-500">Dedicated assistance line</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-charcoal">{siteConfig.contact.email}</div>
                    <div className="text-[10px] text-stone-500">Email enquiry inbox</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <div className="text-stone-600">{siteConfig.contact.hours}</div>
                </div>
              </div>
            </div>

            <PartnerNotice variant="inline" />
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-sand shadow-lg">
            <div className="mb-6 border-b border-stone-100 pb-4">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal">
                Enquiry Submission Form
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Please complete the form below. Required fields are marked with an asterisk (*).
              </p>
            </div>

            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}

