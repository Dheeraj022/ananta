"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useEnquiry } from "../enquiry/EnquiryContext";
import { Calendar, Users, CheckCircle2, ArrowDown } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface StayPreferenceSyncProps {
  propertyName: string;
}

export default function StayPreferenceSync({ propertyName }: StayPreferenceSyncProps) {
  const searchParams = useSearchParams();
  const { checkIn, checkOut, adults, setStayPreferences } = useEnquiry();

  // If URL has search parameters, synchronize them into global stay preferences
  useEffect(() => {
    const urlCheckIn = searchParams.get("checkIn");
    const urlCheckOut = searchParams.get("checkOut");
    const urlAdults = searchParams.get("adults");

    if (urlCheckIn || urlCheckOut || urlAdults) {
      setStayPreferences({
        checkIn: urlCheckIn || checkIn,
        checkOut: urlCheckOut || checkOut,
        adults: urlAdults ? parseInt(urlAdults, 10) : adults,
      });
    }
  }, [searchParams]);

  if (!checkIn && !checkOut) return null;

  const scrollToAccommodations = () => {
    const el = document.getElementById("accommodations");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-sand-warm/80 border-b border-sand py-3 px-4 text-xs text-charcoal">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center flex-wrap gap-2 sm:gap-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-forest text-white font-medium text-[11px] uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Stay Dates Applied</span>
          </span>

          <div className="flex items-center gap-1.5 font-medium text-stone-800">
            <Calendar className="w-4 h-4 text-forest" />
            <span>
              {formatDate(checkIn)} — {formatDate(checkOut)}
            </span>
          </div>

          <span className="text-stone-300 hidden sm:inline">•</span>

          <div className="flex items-center gap-1.5 font-medium text-stone-800">
            <Users className="w-4 h-4 text-forest" />
            <span>
              {adults} {adults === 1 ? "Adult" : "Adults"}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToAccommodations}
          className="text-forest hover:text-forest-dark font-medium underline underline-offset-2 flex items-center gap-1 text-xs shrink-0"
        >
          <span>Browse Available Rooms</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
