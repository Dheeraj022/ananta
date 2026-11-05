import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { siteConfig } from "@/data/site-config";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Independent Travel Partner",
  description:
    "Learn how our independent travel partner desk collects, uses, and protects your information when you submit stay enquiries.",
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
            Your privacy is paramount. This policy explains how we handle your information when you
            explore our website and submit enquiries for Ananta resort stays.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-stone-700 leading-relaxed text-sm sm:text-base">
        {/* Intro */}
        <div className="p-6 bg-forest-surface border border-forest/20 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-forest font-semibold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Commitment to Responsible Data Handling</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700">
            This Privacy Policy applies solely to information collected by this website in our
            capacity as an independent travel partner. We do not sell, rent, or monetize your
            personal data under any circumstance.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            1. Information We Collect
          </h2>
          <p>
            When you interact with our website or submit a stay enquiry form, we may collect the
            following information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm pl-2">
            <li>
              <strong>Contact Details:</strong> Your full name, email address, and phone number
              (including country code).
            </li>
            <li>
              <strong>Enquiry Preferences:</strong> Preferred resort property (Udaipur, Pushkar,
              Ajabgarh, or Jaipur), specific accommodation or villa category, check-in and
              check-out dates, guest count (adults and children), and any special requirements.
            </li>
            <li>
              <strong>Technical Logs:</strong> Non-personally identifiable diagnostic data such as
              browser type, operating system, and general referrer information to ensure site
              performance and security.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            2. How We Use Your Information
          </h2>
          <p>We use the data you provide exclusively for legitimate hospitality purposes:</p>
          <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm pl-2">
            <li>To review, evaluate, and respond to your specific resort stay enquiry.</li>
            <li>
              To communicate with you via telephone, WhatsApp, or email to clarify travel dates,
              room availability, and booking formalities.
            </li>
            <li>
              To coordinate with the appropriate resort reservation channels to facilitate your stay
              booking.
            </li>
            <li>To prevent fraudulent submissions, spam, or abusive automated bot entries.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            3. Sharing of Information
          </h2>
          <p>
            Your information is shared only with relevant personnel and partner reservation teams
            strictly necessary to fulfill your enquiry. We do not share your contact details with
            unaffiliated third parties, advertisers, or marketing brokers.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            4. Data Security & Storage
          </h2>
          <p>
            We implement sensible technical and organizational precautions to protect your personal
            data against accidental loss, unauthorized access, alteration, or disclosure. All web
            submissions are transmitted over encrypted Transport Layer Security (HTTPS/TLS)
            connections.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            5. Your Rights & Choices
          </h2>
          <p>
            You have the right to request a copy of the personal information we hold about you,
            request corrections to inaccurate data, or ask for the deletion of your enquiry records
            from our active systems at any time.
          </p>
          <p>
            To exercise these rights, please email our concierge privacy officer at{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-forest underline font-mono text-xs"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </section>

        {/* Footer update note */}
        <div className="text-xs text-stone-400 pt-6 border-t border-stone-200">
          Last revised: November 2026. This policy may be updated periodically to reflect changes
          in our operations or legal guidelines.
        </div>
      </div>
    </div>
  );
}

