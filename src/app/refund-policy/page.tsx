import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { siteConfig } from "@/data/site-config";
import PartnerNotice from "@/components/common/PartnerNotice";
import { AlertCircle, IndianRupee, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy — Guest-Assist",
  description:
    "Information regarding refunds for hotel bookings and the role of Guest-Assist as an independent travel information service.",
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-sand-cream/60 border-b border-sand py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Refund Policy" }]} className="mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-charcoal">
            Refund Policy
          </h1>
          <p className="mt-3 text-stone-600 max-w-2xl text-sm sm:text-base leading-relaxed">
            Important information regarding hotel booking refunds, payment processing, and our independent enquiry assistance role.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-stone-700 leading-relaxed text-sm sm:text-base">
        <PartnerNotice variant="card" />

        {/* Core Policy Statement */}
        <section className="p-6 sm:p-8 bg-amber-50/70 border-2 border-amber-200/80 rounded-xl space-y-3 text-amber-950">
          <div className="flex items-center gap-2 text-forest font-semibold uppercase tracking-wider text-xs">
            <AlertCircle className="w-5 h-5 text-amber-700" />
            <span>Direct Hotel Refund Processing</span>
          </div>
          <p className="font-serif text-base sm:text-lg text-charcoal font-medium leading-relaxed">
            Hotel payments and refunds are handled by the relevant hotel under its own terms. Guest-Assist does not receive or process hotel booking payments and does not issue hotel refunds where payment was made directly to the hotel. Customers should contact the hotel directly for refund status.
          </p>
        </section>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            1. No Hotel Payment Collection on This Website
          </h2>
          <p>
            Guest-Assist is an independent travel agency operated by <strong>{siteConfig.companyLegalName}</strong>. Our service is strictly informational and enquiry-driven.
          </p>
          <p>
            We do not accept payments, process transactions, collect credit or debit card details, or hold guest funds on this website. Because Guest-Assist does not collect hotel payments, it cannot process, authorize, or issue hotel booking refunds.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            2. Obtaining a Refund for a Hotel Stay
          </h2>
          <p>
            If you have paid the hotel directly for a room reservation and are eligible for a refund following a cancellation:
          </p>
          <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm pl-2">
            <li>Review the cancellation and refund terms specified on your official hotel reservation confirmation or invoice.</li>
            <li>Contact the hotel&apos;s finance or reservations desk directly using the contact details provided by the hotel.</li>
            <li>Refund processing times, banking turnaround schedules, and deductions are determined solely by the hotel and its payment processing partners.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            3. No Service Fees Charged by Guest-Assist
          </h2>
          <p>
            Enquiry submission on Guest-Assist is 100% free of charge. We do not charge customers any upfront fee, enquiry processing charge, or membership subscription. Since zero fees are collected by Guest-Assist, no service fee refunds apply.
          </p>
        </section>

        {/* Section 4 */}
        <section className="p-6 bg-sand-cream/40 rounded-lg border border-sand space-y-2">
          <h3 className="font-serif text-lg font-semibold text-charcoal">
            Questions Regarding Refund Policies
          </h3>
          <p className="text-xs text-stone-600">
            For questions regarding our enquiry assistance service, please contact:
          </p>
          <div className="text-xs font-mono text-forest font-semibold">
            {siteConfig.contact.email} • {siteConfig.contact.phone}
          </div>
        </section>
      </div>
    </div>
  );
}
