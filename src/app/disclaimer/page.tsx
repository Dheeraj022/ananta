import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { siteConfig } from "@/data/site-config";
import { AlertTriangle, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer — Independent Travel Agency",
  description:
    "Official disclaimer regarding our independent travel agency status, informational property content, and enquiry submission policies.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-sand-cream/60 border-b border-sand py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Disclaimer" }]} className="mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-charcoal">
            Disclaimer
          </h1>
          <p className="mt-3 text-stone-600 max-w-2xl text-sm sm:text-base leading-relaxed">
            Please read this notice carefully regarding the informational nature of this website
            and the scope of our enquiry assistance.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-stone-700 leading-relaxed text-sm sm:text-base">
        {/* Primary Callout Box */}
        <div className="p-6 sm:p-8 bg-amber-50/70 border-2 border-amber-200/80 rounded-xl space-y-4 text-amber-950">
          <div className="flex items-center gap-2 text-forest font-semibold uppercase tracking-wider text-xs">
            <AlertTriangle className="w-5 h-5 text-amber-700" />
            <span>Important Legal Notice</span>
          </div>
          <p className="font-serif text-base sm:text-lg font-medium text-charcoal leading-relaxed">
            Guest-Assist is an independent travel information and enquiry assistance service operated by <strong>{siteConfig.companyLegalName}</strong>. It is not owned, operated, affiliated with, endorsed by or authorized by Ananta Hotels &amp; Resorts. Property names are used only to identify the properties described. All trademarks, logos, photographs and other intellectual property belong to their respective owners; use only content for which the business has permission or a lawful basis. Property information is provided for general reference and may change without notice. The relevant hotel is the authoritative source for current room details, facilities, availability, rates, taxes, inclusions, payment, reservation confirmation, cancellation and refunds. An enquiry submitted through this website is not a booking or reservation.
          </p>
        </div>

        {/* Section 1: Independent Status & Non-Affiliation */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            1. Independent Status &amp; Non-Affiliation
          </h2>
          <p>
            This website is owned and operated by <strong>{siteConfig.companyLegalName}</strong> (GSTIN: {siteConfig.gstin}, Registered Address: {siteConfig.companyAddress}) as an independent travel agency. It is{" "}
            <strong>not</strong> the official website of Ananta Hotels &amp; Resorts, nor is it owned,
            managed, affiliated with, endorsed by, or authorized by Ananta Hotels &amp; Resorts.
          </p>
          <p>
            We do not claim official partnership, affiliation, ownership, or exclusive representation. Any reference to &ldquo;Ananta&rdquo;
            or property titles (such as The Ananta Udaipur, Ananta Spa &amp; Resort Pushkar, Ananta Spa
            &amp; Resort Ajabgarh, or Ananta Spa &amp; Resort Jaipur) is used solely for the purpose of
            identifying the respective hotels and assisting prospective guests with travel information discovery.
          </p>
        </section>

        {/* Section 2: Enquiry Submission vs. Booking Confirmation */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            2. Enquiry Submission Does Not Constitute a Booking
          </h2>
          <p>
            Submitting an enquiry via our forms, email, or telephone hotline does{" "}
            <strong>not</strong> create a confirmed room booking, reservation, financial contract, or
            guarantee of room availability.
          </p>
          <p>
            This website provides property information and enquiry assistance only. It does not accept hotel booking payments, collect payment card details, or confirm reservations. For current availability, final rates, payment, reservation confirmation, cancellation and refund terms, please contact the relevant hotel directly.
          </p>
        </section>

        {/* Section 3: Intellectual Property & Visual Materials */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            3. Property Names, Logos &amp; Photographic Assets
          </h2>
          <p>
            All registered trademarks, trade names, brand names, and service marks referenced on
            this website remain the intellectual property of their respective owners. Their display
            on this website is intended strictly for descriptive, identification, and informational
            purposes.
          </p>
          <p>
            Property photographs and descriptions are provided for general reference and may change without notice. Actual room layouts, furnishings, views, and amenities are subject to confirmation directly with the hotel.
          </p>
        </section>

        {/* Section 4: Limitation of Liability */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            4. Accuracy of Information &amp; Limitation of Liability
          </h2>
          <p>
            While we take reasonable steps to present general travel and property information from sources considered reliable, room details, facilities, rates, taxes, inclusions, and policies may change at the discretion of hotel management.
          </p>
          <p>
            Guest-Assist assumes no liability for direct or indirect damages resulting from reliance on the informational content of this site, changes in hotel policies, rate adjustments, or third-party actions.
          </p>
        </section>

        {/* Section 5: Contact for Inquiries */}
        <section className="p-6 bg-sand-cream/40 rounded-lg border border-sand space-y-2">
          <h3 className="font-serif text-lg font-semibold text-charcoal">
            Questions Regarding This Disclaimer
          </h3>
          <p className="text-xs text-stone-600">
            For questions concerning this disclaimer or our enquiry assistance service, please contact:
          </p>
          <div className="text-xs font-mono text-forest font-semibold">
            {siteConfig.contact.email}
          </div>
        </section>
      </div>
    </div>
  );
}

