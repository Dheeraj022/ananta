"use client";

import React, { useEffect } from "react";
import { useEnquiry } from "./EnquiryContext";
import EnquiryForm from "./EnquiryForm";
import { X, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function EnquiryModal() {
  const { isOpen, closeEnquiry, propertySlug, accommodationName } = useEnquiry();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeEnquiry();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeEnquiry]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm transition-opacity"
        onClick={closeEnquiry}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl border border-sand/60 z-10 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-sand-cream border-b border-sand">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-forest font-semibold">
              Independent Partner Concierge
            </div>
            <h2 id="modal-title" className="text-xl font-serif text-charcoal font-semibold">
              Submit Stay Enquiry
            </h2>
          </div>
          <button
            onClick={closeEnquiry}
            className="p-1.5 rounded-full text-stone-500 hover:text-charcoal hover:bg-stone-200/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8">
          <div className="mb-6 p-3 bg-amber-50/70 border border-amber-200/70 rounded text-xs text-amber-900 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
            <span className="leading-relaxed">
              <strong>Independent Partner Notice:</strong> {siteConfig.shortDisclosure}.
              Submissions assist in retreat coordination and do not confirm immediate reservations.
            </span>
          </div>

          <EnquiryForm
            isModal={true}
            initialPropertySlug={propertySlug}
            initialAccommodationName={accommodationName}
          />
        </div>
      </div>
    </div>
  );
}

