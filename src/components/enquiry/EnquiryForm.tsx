"use client";

import React, { useState, useEffect } from "react";
import { properties } from "@/data/properties";
import { siteConfig } from "@/data/site-config";
import { useEnquiry } from "./EnquiryContext";
import { CheckCircle2, AlertCircle, Loader2, ChevronDown, ChevronUp } from "lucide-react";

interface EnquiryFormProps {
  initialPropertySlug?: string;
  initialAccommodationName?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialAdults?: number;
  onSuccess?: () => void;
  isModal?: boolean;
}

export default function EnquiryForm({
  initialPropertySlug = "",
  initialAccommodationName = "",
  initialCheckIn,
  initialCheckOut,
  initialAdults,
  onSuccess,
  isModal = false,
}: EnquiryFormProps) {
  const {
    checkIn: ctxCheckIn,
    checkOut: ctxCheckOut,
    adults: ctxAdults,
    setStayPreferences,
  } = useEnquiry();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertySlug: initialPropertySlug || (properties[0]?.slug ?? "the-ananta-udaipur"),
    accommodationName: initialAccommodationName,
    checkIn: initialCheckIn || ctxCheckIn || "",
    checkOut: initialCheckOut || ctxCheckOut || "",
    adults: initialAdults ?? ctxAdults ?? 2,
    specialRequests: "",
    privacyAccepted: true,
    honeypot: "",
  });

  const [specialRequestsOpen, setSpecialRequestsOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [submitError, setSubmitError] = useState("");

  // Derive dynamic accommodations based on selected property
  const selectedProperty = properties.find((p) => p.slug === formData.propertySlug);
  const availableAccommodations = selectedProperty?.accommodations || [];

  // Sync prop & context changes into form state
  useEffect(() => {
    if (initialPropertySlug) {
      setFormData((prev) => ({ ...prev, propertySlug: initialPropertySlug }));
    }
  }, [initialPropertySlug]);

  useEffect(() => {
    if (initialAccommodationName) {
      setFormData((prev) => ({ ...prev, accommodationName: initialAccommodationName }));
    }
  }, [initialAccommodationName]);

  useEffect(() => {
    const effectiveIn = initialCheckIn || ctxCheckIn;
    if (effectiveIn) {
      setFormData((prev) => ({ ...prev, checkIn: effectiveIn }));
    }
  }, [initialCheckIn, ctxCheckIn]);

  useEffect(() => {
    const effectiveOut = initialCheckOut || ctxCheckOut;
    if (effectiveOut) {
      setFormData((prev) => ({ ...prev, checkOut: effectiveOut }));
    }
  }, [initialCheckOut, ctxCheckOut]);

  useEffect(() => {
    const effectiveAdults = initialAdults ?? ctxAdults;
    if (effectiveAdults !== undefined) {
      setFormData((prev) => ({ ...prev, adults: effectiveAdults }));
    }
  }, [initialAdults, ctxAdults]);

  // Today's date string YYYY-MM-DD
  const todayStr = new Date().toISOString().split("T")[0];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (formData.phone.replace(/[\s\-\(\)]/g, "").length < 7) {
      errs.phone = "Please enter a valid phone number with country code.";
    }

    if (!formData.propertySlug) {
      errs.propertySlug = "Please select a preferred property.";
    }

    if (!formData.checkIn) {
      errs.checkIn = "Check-in date is required.";
    }

    if (!formData.checkOut) {
      errs.checkOut = "Check-out date is required.";
    } else if (formData.checkIn && formData.checkOut <= formData.checkIn) {
      errs.checkOut = "Check-out must be after check-in date.";
    }

    if (formData.adults < 1) {
      errs.adults = "At least 1 adult is required.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const selectedProperty = properties.find((p) => p.slug === formData.propertySlug);

      const payload = {
        ...formData,
        children: 0,
        propertyName: selectedProperty ? selectedProperty.name : "Featured Property",
      };

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to submit enquiry. Please try again.");
      }

      // Update preferences so next interaction remembers
      setStayPreferences({
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        adults: formData.adults,
        propertySlug: formData.propertySlug,
      });

      setIsSuccess(true);
      setReferenceId(data.reference);
      if (onSuccess) onSuccess();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSubmitError(err.message);
      } else {
        setSubmitError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="p-8 text-center bg-white rounded-lg border border-sand">
        <div className="w-16 h-16 mx-auto mb-4 bg-forest-surface text-forest rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif text-charcoal font-semibold mb-2">
          Enquiry Received
        </h3>
        <p className="text-stone-600 mb-4 max-w-md mx-auto text-sm leading-relaxed">
          Thank you for your enquiry. Your request has been submitted successfully.
          Our team will contact you regarding the details.
        </p>
        <div className="bg-sand-cream p-4 rounded-md border border-sand max-w-sm mx-auto mb-6">
          <div className="text-xs uppercase tracking-wider text-stone-500 mb-1">
            Enquiry Reference
          </div>
          <div className="font-mono text-base font-bold text-forest">{referenceId}</div>
        </div>
        <p className="text-xs text-stone-500 max-w-md mx-auto mb-6">
          {siteConfig.bookingNotice}
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setReferenceId("");
            setFormData((prev) => ({
              ...prev,
              specialRequests: "",
            }));
          }}
          className="text-xs font-medium uppercase tracking-wider text-forest hover:text-forest-dark underline underline-offset-4"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
      {/* Bot Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website_url_hp"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {submitError && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded flex items-start gap-2">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{submitError}</span>
        </div>
      )}

      {/* Property & Room Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            Preferred Property <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.propertySlug}
              onChange={(e) => {
                const newSlug = e.target.value;
                const targetProp = properties.find((p) => p.slug === newSlug);
                const validAccNames = targetProp?.accommodations.map((a) => a.name) || [];
                setFormData((prev) => ({
                  ...prev,
                  propertySlug: newSlug,
                  accommodationName: validAccNames.includes(prev.accommodationName)
                    ? prev.accommodationName
                    : "",
                }));
              }}
              className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded text-charcoal focus:outline-none focus:ring-1 focus:ring-forest cursor-pointer ${
                errors.propertySlug ? "border-red-400 bg-red-50/30" : "border-stone-300"
              }`}
            >
              {properties.map((prop) => (
                <option key={prop.slug} value={prop.slug}>
                  {prop.name} ({prop.shortName})
                </option>
              ))}
            </select>
          </div>
          {errors.propertySlug && (
            <p className="mt-1 text-xs text-red-600">{errors.propertySlug}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            Selected Accommodation <span className="text-stone-400 font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <select
              value={formData.accommodationName}
              onChange={(e) => setFormData({ ...formData, accommodationName: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded text-charcoal focus:outline-none focus:ring-1 focus:ring-forest cursor-pointer"
            >
              <option value="">Any / General Enquiry</option>
              {availableAccommodations.map((acc) => (
                <option key={acc.id} value={acc.name}>
                  {acc.name} ({acc.category})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Dates & Adults Row - Clean 3-column layout without children */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-3.5 bg-sand-cream/40 rounded-lg border border-sand">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            Check-In Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            min={todayStr}
            value={formData.checkIn}
            onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
            className={`w-full px-3 py-2 text-sm bg-white border rounded text-charcoal focus:outline-none focus:ring-1 focus:ring-forest font-medium ${
              errors.checkIn ? "border-red-400 bg-red-50/30" : "border-stone-300"
            }`}
          />
          {errors.checkIn && <p className="mt-1 text-xs text-red-600">{errors.checkIn}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            Check-Out Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            min={formData.checkIn || todayStr}
            value={formData.checkOut}
            onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
            className={`w-full px-3 py-2 text-sm bg-white border rounded text-charcoal focus:outline-none focus:ring-1 focus:ring-forest font-medium ${
              errors.checkOut ? "border-red-400 bg-red-50/30" : "border-stone-300"
            }`}
          />
          {errors.checkOut && <p className="mt-1 text-xs text-red-600">{errors.checkOut}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            Adults (12+ yrs) <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.adults}
            onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value, 10) })}
            className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded text-charcoal focus:outline-none focus:ring-1 focus:ring-forest font-medium cursor-pointer"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "Adult" : "Adults"}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Personal Info Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Priya Sharma"
            className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded text-charcoal focus:outline-none focus:ring-1 focus:ring-forest ${
              errors.fullName ? "border-red-400 bg-red-50/30" : "border-stone-300"
            }`}
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="priya@example.com"
            className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded text-charcoal focus:outline-none focus:ring-1 focus:ring-forest ${
              errors.email ? "border-red-400 bg-red-50/30" : "border-stone-300"
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded text-charcoal focus:outline-none focus:ring-1 focus:ring-forest ${
              errors.phone ? "border-red-400 bg-red-50/30" : "border-stone-300"
            }`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      {/* Collapsible Special Requests (Courtyard Interaction Style) */}
      <div className="border border-stone-200/80 rounded-lg bg-stone-50/50 p-3">
        <button
          type="button"
          onClick={() => setSpecialRequestsOpen(!specialRequestsOpen)}
          className="w-full flex items-center justify-between text-left text-xs font-semibold uppercase tracking-wider text-stone-700 hover:text-forest transition-colors py-1 cursor-pointer"
          aria-expanded={specialRequestsOpen}
        >
          <span className="flex items-center gap-1.5">
            <span>Special Requests and Questions</span>
            <span className="text-stone-400 font-normal lowercase">(optional)</span>
          </span>
          {specialRequestsOpen ? (
            <ChevronUp className="w-4 h-4 text-stone-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-stone-500" />
          )}
        </button>

        {specialRequestsOpen && (
          <div className="mt-2.5 pt-2 border-t border-stone-200/60">
            <textarea
              rows={3}
              value={formData.specialRequests}
              onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              placeholder="e.g. Dietary preferences, early arrival, airport transfer enquiry, celebratory occasion..."
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded text-charcoal focus:outline-none focus:ring-1 focus:ring-forest"
            />
          </div>
        )}
      </div>

      {/* Submit Button & Disclaimer */}
      <div className="pt-2 space-y-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3.5 bg-forest hover:bg-forest-hover text-white text-xs font-medium uppercase tracking-widest rounded shadow-sm transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting Enquiry...</span>
            </>
          ) : (
            <span>Send Your Enquiry</span>
          )}
        </button>

        <p className="text-xs text-stone-500 text-center sm:text-left">
          Submitting an inquiry does not confirm a booking.
        </p>
      </div>
    </form>
  );
}
