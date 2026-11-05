import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import SectionHeading from "@/components/common/SectionHeading";
import EnquiryForm from "@/components/enquiry/EnquiryForm";
import PartnerNotice from "@/components/common/PartnerNotice";
import { siteConfig } from "@/data/site-config";
import { Phone, Mail, Clock, MapPin, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Concierge Desk — Stay Enquiries",
  description:
    "Contact our independent partner concierge desk for assistance with stays at Ananta Udaipur, Pushkar, Ajabgarh, and Jaipur.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-sand-cream/60 border-b border-sand py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact Us" }]} className="mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-charcoal">
            Contact Concierge Desk
          </h1>
          <p className="mt-3 text-stone-600 max-w-2xl text-sm sm:text-base leading-relaxed">
            Have questions regarding accommodation options, group retreats, or destination
            enquiries? Our independent partner desk is here to assist.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details & Desk Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-forest font-semibold mb-2">
                Travel Partner Desk
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                Get in Touch
              </h2>
              <p className="mt-3 text-stone-600 text-sm leading-relaxed">
                Reach out to our enquiry coordinators directly by telephone or email, or submit the
                stay enquiry form for a prioritized response.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="p-5 bg-sand-cream/50 rounded-lg border border-sand space-y-1">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-500 font-semibold">
                  <Phone className="w-4 h-4 text-forest" />
                  <span>Enquiry Assistance Line</span>
                </div>
                <div className="text-base font-semibold text-charcoal pt-1">
                  <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-forest">
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="text-[11px] text-stone-500">
                  Client verification notice: Partner concierge desk contact.
                </div>
              </div>

              <div className="p-5 bg-sand-cream/50 rounded-lg border border-sand space-y-1">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-500 font-semibold">
                  <Mail className="w-4 h-4 text-forest" />
                  <span>Direct Email Inbox</span>
                </div>
                <div className="text-base font-semibold text-charcoal pt-1">
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-forest break-all">
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div className="text-[11px] text-stone-500">
                  Monitored for retreat enquiries and follow-ups.
                </div>
              </div>

              <div className="p-5 bg-sand-cream/50 rounded-lg border border-sand space-y-1">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-500 font-semibold">
                  <Clock className="w-4 h-4 text-forest" />
                  <span>Operating Hours</span>
                </div>
                <div className="text-sm font-medium text-charcoal pt-1">
                  {siteConfig.contact.hours}
                </div>
                <div className="text-[11px] text-stone-500">
                  Enquiries received after hours are responded to on the following working day.
                </div>
              </div>

              <div className="p-5 bg-sand-cream/50 rounded-lg border border-sand space-y-1">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-500 font-semibold">
                  <MapPin className="w-4 h-4 text-forest" />
                  <span>Desk Location</span>
                </div>
                <div className="text-sm text-stone-700 pt-1 leading-relaxed">
                  {siteConfig.contact.address}
                </div>
              </div>
            </div>

            <PartnerNotice variant="inline" />
          </div>

          {/* Right Column: Embedded Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-xl border border-sand shadow-lg">
            <div className="mb-6 border-b border-stone-100 pb-4">
              <h3 className="font-serif text-2xl font-medium text-charcoal">
                Submit Stay Enquiry
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Specify your destination preference, guest count, and approximate dates.
              </p>
            </div>

            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}

