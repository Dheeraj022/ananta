import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { siteConfig } from "@/data/site-config";
import { AlertTriangle, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Independent Travel Partner Disclaimer",
  description:
    "Official disclaimer regarding our independent travel partner status, informational property content, and enquiry submission policies.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-sand-cream/60 border-b border-sand py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Disclaimer" }]} className="mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-charcoal">
            Independent Partner Disclaimer
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
          <p className="font-serif text-lg sm:text-xl font-medium text-charcoal leading-snug">
            &ldquo;{siteConfig.partnerDisclosure}&rdquo;
          </p>
          <div className="text-xs text-stone-600 pt-2 border-t border-amber-200/60">
            Subject to client and legal review. This notice governs every interaction and
            submission made on this domain.
          </div>
        </div>

        {/* Section 1: Independent Partner Relationship */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            1. Independent Status & Non-Affiliation
          </h2>
          <p>
            This website is owned and operated by <strong>{siteConfig.companyLegalName}</strong> (GSTIN: {siteConfig.gstin}, Registered Address: {siteConfig.companyAddress}) as an independent travel partner network. It is{" "}
            <strong>not</strong> the official website of Ananta Hotels & Resorts, nor is it owned,
            managed, or operated by Ananta Hotels.
          </p>
          <p>
            We do not claim official partnership, ownership, or exclusive representation unless
            specifically authorized and documented in writing. Any reference to &ldquo;Ananta&rdquo;
            or property titles (such as The Ananta Udaipur, Ananta Spa & Resort Pushkar, Ananta Spa
            & Resort Ajabgarh, or Ananta Spa & Resort Jaipur) is used solely for the purpose of
            identifying the respective hotels and assisting prospective guests with factual
            discovery.
          </p>
        </section>

        {/* Section 2: Enquiry Submission vs. Booking Confirmation */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            2. Enquiry Submission Does Not Constitute a Confirmed Booking
          </h2>
          <p>
            Submitting an enquiry via our forms, email, or telephone hotline does{" "}
            <strong>not</strong> create a confirmed room booking, financial contract, or
            guarantee room availability.
          </p>
          <p>
            This website does not function as an instant live booking engine, nor does it process
            online transactions or credit card authorizations. All room rates, stay dates, and room
            allocations remain subject to direct confirmation and validation with the relevant
            resort management or authorized hotel reservation desks.
          </p>
        </section>

        {/* Section 3: Intellectual Property & Visual Materials */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            3. Property Names, Logos & Photographic Assets
          </h2>
          <p>
            All registered trademarks, trade names, brand names, and service marks referenced on
            this website remain the intellectual property of their respective owners. Their display
            on this website is intended strictly for descriptive, identification, and informational
            purposes under fair use and applicable travel agency conventions.
          </p>
          <p>
            Property photographs and architectural renderings are displayed to convey the ambiance
            and aesthetic of each featured retreat. Actual room layouts, furnishings, and view
            angles may vary depending on resort maintenance, seasonality, and room assignments.
          </p>
        </section>

        {/* Section 4: Limitation of Liability */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            4. Accuracy of Information & Limitation of Liability
          </h2>
          <p>
            While we take reasonable steps to ensure all descriptions, amenities, and room
            specifications reflect factual details from verified source material, facilities and
            policies may change at the discretion of resort management without prior notice.
          </p>
          <p>
            The independent travel partner network assumes no liability for direct or indirect
            damages resulting from reliance on the informational content of this site, changes in
            hotel policies, weather disruptions, or unforeseen closures.
          </p>
        </section>

        {/* Section 5: Contact for Inquiries */}
        <section className="p-6 bg-sand-cream/40 rounded-lg border border-sand space-y-2">
          <h3 className="font-serif text-lg font-semibold text-charcoal">
            Questions Regarding This Disclaimer
          </h3>
          <p className="text-xs text-stone-600">
            For questions concerning this disclaimer or our partner operations, please contact:
          </p>
          <div className="text-xs font-mono text-forest font-semibold">
            {siteConfig.contact.email}
          </div>
        </section>
      </div>
    </div>
  );
}

