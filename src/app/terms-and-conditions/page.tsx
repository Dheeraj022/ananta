import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { siteConfig } from "@/data/site-config";
import PartnerNotice from "@/components/common/PartnerNotice";

export const metadata: Metadata = {
  title: "Terms and Conditions — Independent Travel Agency",
  description:
    "Read the terms and conditions governing the use of our independent travel agency website and enquiry assistance services.",
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-sand-cream/60 border-b border-sand py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Terms & Conditions" }]} className="mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-charcoal">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-stone-600 max-w-2xl text-sm sm:text-base leading-relaxed">
            Please read these terms and conditions carefully before using this website or submitting
            travel enquiries.
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
            and Conditions, our Privacy Policy, our Disclaimer, our Cancellation Policy, and our Refund Policy. If you do not agree with any
            portion of these terms, please discontinue use of this website.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            2. Scope of Service — General Information &amp; Enquiry Assistance Only
          </h2>
          <p>
            This website is operated by <strong>{siteConfig.companyLegalName}</strong> (Registered Address: {siteConfig.companyAddress}, GSTIN: {siteConfig.gstin}) as an independent travel agency providing general travel information and stay enquiry assistance for four selected Ananta hotel properties in Rajasthan (The Ananta Udaipur, Ananta Spa &amp; Resort Pushkar, Ananta Spa &amp; Resort Ajabgarh, and Ananta Spa &amp; Resort Jaipur).
          </p>
          <p>
            <strong>Crucial Operating Terms:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm pl-2">
            <li>
              <strong>No Online Hotel Booking:</strong> This website is not a live booking engine and does not make or confirm hotel room bookings.
            </li>
            <li>
              <strong>No Hotel Payment Collection:</strong> We do not take or process hotel booking payments, credit card authorizations, or security deposits.
            </li>
            <li>
              <strong>No Live Inventory Feed:</strong> Content and descriptions presented on this website are compiled for informational guidance and do not represent a real-time live inventory feed.
            </li>
            <li>
              <strong>Direct Hotel Confirmation:</strong> The hotel independently sets rates, availability, payment requirements, taxes, inclusions, check-in and check-out rules, cancellation terms, and refund policies. Customers must confirm all details directly with the relevant hotel before making payment or travelling.
            </li>
            <li>
              <strong>No Guarantees:</strong> Guest-Assist does not arrange, hold, or guarantee room availability, fixed tariffs, or room upgrades.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            3. Accuracy of User Information
          </h2>
          <p>
            You agree to provide true, accurate, current, and complete contact and travel preference details when submitting any stay enquiry form. Fictitious names, invalid email addresses, or fraudulent phone numbers will result in dismissal of your request.
          </p>
          <p>
            Submitting an enquiry via our forms is completely free of charge and creates no financial obligation on either party.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            4. Cancellation and Refund Policy
          </h2>
          <p>
            Because Guest-Assist does not accept hotel booking payments, collect funds, or confirm hotel reservations, Guest-Assist does not process hotel cancellations or issue hotel booking refunds. For any reservation made directly with a hotel, the hotel&apos;s own cancellation and refund terms apply exclusively. Customers must contact the hotel directly using the contact details on their booking confirmation.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            5. Intellectual Property &amp; Trademarks
          </h2>
          <p>
            The website design, compilation, branding elements, software code, and editorial treatments are protected by applicable intellectual property laws. Property names, logos, and registered trademarks belong to their respective owners and are referenced here under nominative fair use for descriptive identification only. Guest-Assist is not affiliated with or authorized by Ananta Hotels &amp; Resorts.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            6. Governing Law &amp; Jurisdiction
          </h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with the use of this website shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
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

