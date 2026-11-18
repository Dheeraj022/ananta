import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { siteConfig } from "@/data/site-config";
import PartnerNotice from "@/components/common/PartnerNotice";
import { AlertCircle, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Cancellation Policy — Guest-Assist",
  description:
    "Information regarding cancellation policies for hotel bookings and the role of Guest-Assist as an independent travel information service.",
};

export default function CancellationPolicyPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-sand-cream/60 border-b border-sand py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Cancellation Policy" }]} className="mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-charcoal">
            Cancellation Policy
          </h1>
          <p className="mt-3 text-stone-600 max-w-2xl text-sm sm:text-base leading-relaxed">
            Important information regarding hotel booking cancellations, modifications, and our independent enquiry assistance role.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-stone-700 leading-relaxed text-sm sm:text-base">
        <PartnerNotice variant="card" />

        {/* Core Policy Statement */}
        <section className="p-6 sm:p-8 bg-amber-50/70 border-2 border-amber-200/80 rounded-xl space-y-3 text-amber-950">
          <div className="flex items-center gap-2 text-forest font-semibold uppercase tracking-wider text-xs">
            <AlertCircle className="w-5 h-5 text-amber-800" />
            <span>Direct Hotel Cancellation Terms Apply</span>
          </div>
          <p className="font-serif text-base sm:text-lg text-charcoal font-medium leading-relaxed">
            For hotel reservations paid directly to the hotel, the hotel’s cancellation policy applies. Guest-Assist does not cancel hotel reservations or determine hotel cancellation charges. Customers should contact the hotel directly using the contact details on their booking confirmation.
          </p>
        </section>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            1. Hotel Direct Cancellation
          </h2>
          <p>
            Guest-Assist is an independent travel agency providing general property information and enquiry assistance only. We do not process hotel bookings, accept room payments, or hold reservation records.
          </p>
          <p>
            Because final reservations, payments, and confirmations are handled directly by the relevant hotel, all cancellation rules, timelines, deadlines, and modification policies are determined solely by that hotel.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            2. How to Request Cancellation of a Hotel Reservation
          </h2>
          <p>
            If you have confirmed a booking directly with a hotel and wish to cancel or modify your stay dates:
          </p>
          <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm pl-2">
            <li>Contact the hotel directly using the telephone number or email address provided on your official booking voucher.</li>
            <li>Quote your official hotel reservation reference number.</li>
            <li>Inquire about applicable cut-off times, retention charges, or refund eligibility in accordance with the tariff plan you booked.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-charcoal font-semibold">
            3. Enquiry Submission Policy
          </h2>
          <p>
            Enquiry submission on Guest-Assist is completely free of charge. We do not charge any service fee for submitting an enquiry or receiving travel information assistance. If you no longer wish to proceed with an enquiry you submitted on our website, you may simply disregard our follow-up communications or inform our enquiry desk by replying to our email.
          </p>
        </section>

        {/* Section 4 */}
        <section className="p-6 bg-sand-cream/40 rounded-lg border border-sand space-y-2">
          <h3 className="font-serif text-lg font-semibold text-charcoal">
            Questions Regarding Cancellation Information
          </h3>
          <p className="text-xs text-stone-600">
            For questions about our enquiry service, please contact our support desk:
          </p>
          <div className="text-xs font-mono text-forest font-semibold">
            {siteConfig.contact.email} • {siteConfig.contact.phone}
          </div>
        </section>
      </div>
    </div>
  );
}
