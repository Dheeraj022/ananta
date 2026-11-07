"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { properties } from "@/data/properties";
import { useEnquiry } from "../enquiry/EnquiryContext";
import { Calendar, Users, MapPin, ArrowRight, ChevronDown, AlertCircle } from "lucide-react";

function formatDateDisplay(dateStr: string): string {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  if (parts.length !== 3) return dateStr;
  const [y, m, d] = parts;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const mIndex = parseInt(m, 10) - 1;
  return `${parseInt(d, 10)} ${months[mIndex] || ""} ${y}`;
}

export default function EnquiryStrip() {
  const router = useRouter();
  const { setStayPreferences } = useEnquiry();

  const [selectedSlug, setSelectedSlug] = useState(properties[0]?.slug || "the-ananta-udaipur");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [dateError, setDateError] = useState("");

  const checkInInputRef = useRef<HTMLInputElement>(null);
  const checkOutInputRef = useRef<HTMLInputElement>(null);

  // Today's date string for min check-in
  const todayStr = new Date().toISOString().split("T")[0];

  const openCheckInPicker = () => {
    try {
      checkInInputRef.current?.showPicker();
    } catch {
      checkInInputRef.current?.focus();
    }
  };

  const openCheckOutPicker = () => {
    try {
      checkOutInputRef.current?.showPicker();
    } catch {
      checkOutInputRef.current?.focus();
    }
  };

  const handleCheckInChange = (newIn: string) => {
    setCheckIn(newIn);
    setDateError("");
    // If checkOut is earlier or equal to newIn, suggest checkOut as +2 days
    if (!checkOut || checkOut <= newIn) {
      const d = new Date(newIn);
      d.setDate(d.getDate() + 2);
      setCheckOut(d.toISOString().split("T")[0]);
    }
  };

  const handleCheckOutChange = (newOut: string) => {
    setCheckOut(newOut);
    setDateError("");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // If user hasn't selected a check-in date yet, guide them to pick
    if (!checkIn) {
      setDateError("Please select your check-in date");
      openCheckInPicker();
      return;
    }

    let finalOut = checkOut;
    if (!finalOut || finalOut <= checkIn) {
      const d = new Date(checkIn);
      d.setDate(d.getDate() + 2);
      finalOut = d.toISOString().split("T")[0];
      setCheckOut(finalOut);
    }

    // Save preferences
    setStayPreferences({
      checkIn,
      checkOut: finalOut,
      adults,
      propertySlug: selectedSlug,
    });

    // Navigate to destination hotel with selected search params
    const query = new URLSearchParams({
      checkIn,
      checkOut: finalOut,
      adults: adults.toString(),
    }).toString();

    router.push(`/properties/${selectedSlug}?${query}`);
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-lg p-4 sm:p-5 shadow-2xl border border-sand/80 text-charcoal">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 border-b border-stone-200/60 pb-2.5 gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-forest animate-pulse" />
            <span className="text-xs uppercase tracking-wider font-semibold text-charcoal">
              Stay Enquiry Concierge
            </span>
          </div>
          <p className="text-[11px] text-stone-600 font-light mt-0.5">
            Share your travel dates and preferences. Our team will assist you with the best options and enquiry support.
          </p>
        </div>
        <span className="text-[10px] text-stone-500 uppercase tracking-widest hidden md:inline shrink-0 self-start sm:self-center">
          Request only. Our team will share availability, pricing and stay details.
        </span>
      </div>

      {dateError && (
        <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded text-red-700 text-xs flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{dateError}</span>
        </div>
      )}

      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end">
        {/* Col 1: Destination Hotel (4 cols) */}
        <div className="lg:col-span-4">
          <label className="block text-[10px] uppercase tracking-wider text-stone-500 font-semibold mb-1">
            Featured Resort
          </label>
          <div className="relative cursor-pointer">
            <select
              value={selectedSlug}
              onChange={(e) => setSelectedSlug(e.target.value)}
              className="w-full pl-8 pr-8 py-2.5 text-xs bg-sand-cream/50 border border-stone-300 rounded text-charcoal focus:outline-none focus:ring-1 focus:ring-forest font-medium appearance-none cursor-pointer"
            >
              {properties.map((prop) => (
                <option key={prop.slug} value={prop.slug}>
                  {prop.name} ({prop.shortName})
                </option>
              ))}
            </select>
            <MapPin className="w-4 h-4 text-forest absolute left-2.5 top-3 pointer-events-none" />
            <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-3 pointer-events-none" />
          </div>
        </div>

        {/* Col 2: Check-In Date (2 cols) - 100% Clickable Box */}
        <div className="lg:col-span-2">
          <label className="block text-[10px] uppercase tracking-wider text-stone-500 font-semibold mb-1">
            Check-In Date
          </label>
          <div
            onClick={openCheckInPicker}
            className="relative w-full cursor-pointer group"
          >
            <input
              ref={checkInInputRef}
              type="date"
              min={todayStr}
              value={checkIn}
              onChange={(e) => handleCheckInChange(e.target.value)}
              onClick={(e) => {
                try {
                  e.currentTarget.showPicker();
                } catch {}
              }}
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-20 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              aria-label="Select Check-in Date"
            />
            <div className="w-full pl-8 pr-3 py-2 text-xs bg-sand-cream/50 border border-stone-300 rounded text-charcoal flex items-center justify-between font-medium cursor-pointer group-hover:border-forest transition-colors">
              <Calendar className="w-3.5 h-3.5 text-forest absolute left-2.5 top-2.5 pointer-events-none" />
              <span className={checkIn ? "text-charcoal font-semibold" : "text-stone-400 font-normal"}>
                {checkIn ? formatDateDisplay(checkIn) : "Select Date"}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-stone-400 shrink-0 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Col 3: Check-Out Date (2 cols) - 100% Clickable Box */}
        <div className="lg:col-span-2">
          <label className="block text-[10px] uppercase tracking-wider text-stone-500 font-semibold mb-1">
            Check-Out Date
          </label>
          <div
            onClick={openCheckOutPicker}
            className="relative w-full cursor-pointer group"
          >
            <input
              ref={checkOutInputRef}
              type="date"
              min={checkIn || todayStr}
              value={checkOut}
              onChange={(e) => handleCheckOutChange(e.target.value)}
              onClick={(e) => {
                try {
                  e.currentTarget.showPicker();
                } catch {}
              }}
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-20 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              aria-label="Select Check-out Date"
            />
            <div className="w-full pl-8 pr-3 py-2 text-xs bg-sand-cream/50 border border-stone-300 rounded text-charcoal flex items-center justify-between font-medium cursor-pointer group-hover:border-forest transition-colors">
              <Calendar className="w-3.5 h-3.5 text-forest absolute left-2.5 top-2.5 pointer-events-none" />
              <span className={checkOut ? "text-charcoal font-semibold" : "text-stone-400 font-normal"}>
                {checkOut ? formatDateDisplay(checkOut) : "Select Date"}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-stone-400 shrink-0 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Col 4: Adults Selection (2 cols) */}
        <div className="lg:col-span-2">
          <label className="block text-[10px] uppercase tracking-wider text-stone-500 font-semibold mb-1">
            Adults
          </label>
          <div className="relative">
            <select
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value, 10))}
              className="w-full pl-8 pr-7 py-2.5 text-xs bg-sand-cream/50 border border-stone-300 rounded text-charcoal focus:outline-none focus:ring-1 focus:ring-forest font-medium appearance-none cursor-pointer hover:border-forest transition-colors"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "Adult" : "Adults"}
                </option>
              ))}
            </select>
            <Users className="w-4 h-4 text-forest absolute left-2.5 top-3 pointer-events-none" />
            <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-3 pointer-events-none" />
          </div>
        </div>

        {/* Col 5: Search Button (2 cols) */}
        <div className="lg:col-span-2">
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-forest hover:bg-forest-hover text-white text-xs font-medium uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 shadow-sm hover:shadow"
          >
            <span>Search Stays</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </div>
  );
}
