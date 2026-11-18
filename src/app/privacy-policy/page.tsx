import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { siteConfig } from "@/data/site-config";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Independent Travel Agency",
  description:
    "Learn how our independent travel agency collects, uses, and protects your information when you submit stay enquiries.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-sand-cream/60 border-b border-sand py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} className="mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-charcoal">
            Privacy Policy
          </h1>
          <p className="mt-3 text-stone-600 max-w-2xl text-sm sm:text-base leading-relaxed">
            Your privacy is important to us. This policy explains what information is collected,
            why it is collected, and how it is handled when you use this website and submit stay enquiries.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-stone-700 leading-relaxed text-sm sm:text-base">
        {/* Intro */}
        <div className="p-6 bg-forest-surface border border-forest/20 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-forest font-semibold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Independent Travel Agency Privacy Notice</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700">
            This Privacy Policy applies to information collected by Guest-Assist (operated by{" "}
            <strong>{siteConfig.companyLegalName}</strong>) in our capacity as an independent travel agency providing travel information and enquiry assistance. We do not sell, rent, or trade your personal data.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            1. Information Collected in the Enquiry Form
          </h2>
          <p>
            When you complete and submit an enquiry form on our website, we collect the following details provided voluntarily by you:
          </p>
          <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm pl-2">
            <li>
              <strong>Personal Contact Information:</strong> Full name, email address, and phone number.
            </li>
            <li>
              <strong>Travel Preferences:</strong> Preferred property (The Ananta Udaipur, Ananta Spa &amp; Resort Pushkar, Ananta Spa &amp; Resort Ajabgarh, or Ananta Spa &amp; Resort Jaipur), optional accommodation format, preferred check-in and check-out dates, number of adults, and number of children.
            </li>
            <li>
              <strong>Your Question / Information Requested:</strong> Specific questions, room requirements, or travel information requested by you.
            </li>
            <li>
              <strong>Technical Diagnostics:</strong> Standard web server logs including IP address, browser type, and referrer headers used solely for system security and abuse prevention.
            </li>
          </ul>
          <p className="text-xs text-stone-500 italic">
            Notice: Do not enter credit card numbers, debit card details, bank information, or sensitive financial data into the enquiry form. This website does not process payments or collect payment card information.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            2. Purpose of Information Collection
          </h2>
          <p>We use the information collected via the enquiry form strictly for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm pl-2">
            <li>To receive, review, and process your specific travel information request.</li>
            <li>To respond to your questions and communicate with you via telephone, WhatsApp, or email regarding property details, travel dates, and room options.</li>
            <li>To assist you in identifying the appropriate hotel to contact for final booking, live availability, payment, and reservation confirmation.</li>
            <li>To protect our website against spam, bot submissions, and unauthorized automated activity.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            3. Who Receives Your Information &amp; Data Sharing
          </h2>
          <p>
            Your enquiry details are received by the dedicated travel enquiry coordinators of <strong>{siteConfig.companyLegalName}</strong>.
          </p>
          <p>
            Where necessary to assist with your specific travel request (for example, to ascertain room availability, current tariff ranges, or banquet feasibility for your requested dates), your enquiry preferences and contact details may be communicated to the relevant hotel. When submitting an enquiry, customers have the option to provide explicit consent allowing Guest-Assist to share their enquiry details with the relevant hotel for this purpose. If you do not grant this consent, your request will be handled internally by our guidance desk without forwarding your details to hotel staff. We do not claim any official affiliation with the hotel, and data is shared solely to fulfill your information request.
          </p>
          <p>
            We engage reliable third-party infrastructure service providers to operate our service (including web hosting via Vercel, email delivery systems, and diagnostic tools). These vendors process technical information solely to host and deliver the website securely. We do not sell or license your information to unaffiliated third parties or marketing networks.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            4. Data Retention &amp; Security
          </h2>
          <p>
            We retain enquiry records only for the period necessary to respond to your request and assist with your travel planning, or as required by applicable Indian legal, accounting, and tax regulations.
          </p>
          <p>
            All web traffic and form submissions are protected via standard Transport Layer Security (HTTPS/TLS) encryption to safeguard your data during transit.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            5. Your Rights: Access, Correction &amp; Deletion
          </h2>
          <p>
            You have the right to request access to the personal information you have submitted, request correction of any inaccurate information, or request the deletion of your enquiry data from our active systems.
          </p>
          <p>
            To exercise your rights, please contact our data privacy desk at:{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-forest underline font-mono text-xs font-semibold"
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </section>

        {/* Footer update note */}
        <div className="text-xs text-stone-400 pt-6 border-t border-stone-200">
          Last revised: November 2026. Operated by {siteConfig.companyLegalName} (GSTIN: {siteConfig.gstin}, Registered Address: {siteConfig.companyAddress}).
        </div>
      </div>
    </div>
  );
}

