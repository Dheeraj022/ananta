import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { siteConfig } from "@/data/site-config";
import PartnerNotice from "@/components/common/PartnerNotice";

export const metadata: Metadata = {
  title: "Terms and Conditions — Independent Travel Partner",
  description:
    "Read the terms and conditions governing the use of our independent travel partner website and stay enquiry services.",
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-sand-cream/60 border-b border-sand py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Terms & Conditions" }]} className="mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-charcoal">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-stone-600 max-w-2xl text-sm sm:text-base leading-relaxed">
            Please read these terms and conditions carefully before using this website or submitting
            stay enquiries.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-stone-700 leading-relaxed text-sm sm:text-base">
        <PartnerNotice variant="card" />

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using this website, you agree to comply with and be bound by these Terms
            and Conditions, our Privacy Policy, and our Disclaimer. If you do not agree with any
            portion of these terms, please discontinue use of this website.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            2. Scope of Service — Enquiry Only
          </h2>
          <p>
            This website provides an informational guide and enquiry conduit for four selected
            Ananta resort properties located in Rajasthan (The Ananta Udaipur, Ananta Spa & Resort
            Pushkar, Ananta Spa & Resort Ajabgarh, and Ananta Spa & Resort Jaipur).
          </p>
          <p>
            <strong>Crucial Clarification:</strong> Submitting an enquiry via this platform does{" "}
            <strong>not</strong> create a binding contract for lodging, guarantee room
            availability, or confirm a reservation. Stays and rates are subject to final validation
            and confirmation with the respective property.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            3. Accuracy of User Information
          </h2>
          <p>
            You agree to provide true, accurate, current, and complete information when submitting
            any stay enquiry form. Fictitious names, invalid email addresses, or fraudulent phone
            numbers may result in immediate dismissal of your request.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            4. Informational Content & Disclaimers
          </h2>
          <p>
            All descriptions, amenity lists, photography, room measurements, and distance guides
            are compiled for informational guidance only. While efforts are made to verify accuracy
            against official resort sources, we do not warrant that all details are error-free or
            immune from unannounced modifications by property management.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            5. Intellectual Property
          </h2>
          <p>
            The website design, compilation, branding elements, software code, and editorial
            treatments are protected by copyright and intellectual property laws. Property names and
            registered trademarks are the property of their respective owners and are referenced
            here under nominative fair use for descriptive identification.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            6. Governing Law & Jurisdiction
          </h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India. Any
            disputes arising out of or in connection with the use of this website shall be subject
            to the jurisdiction of the competent courts in Rajasthan, India.
          </p>
        </section>

        {/* Section 7 */}
        <section className="p-6 bg-sand-cream/40 rounded-lg border border-sand space-y-2">
          <h3 className="font-serif text-lg font-semibold text-charcoal">Contact Inquiries</h3>
          <p className="text-xs text-stone-600">
            For legal correspondence regarding these terms, please contact:
          </p>
          <div className="text-xs font-mono text-forest font-semibold">
            {siteConfig.contact.email}
          </div>
        </section>
      </div>
    </div>
  );
}

