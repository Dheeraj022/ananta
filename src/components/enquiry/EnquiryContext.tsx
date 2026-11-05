"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface StayPreferences {
  checkIn: string;
  checkOut: string;
  adults: number;
  propertySlug?: string;
  accommodationName?: string;
}

interface EnquiryContextType {
  isOpen: boolean;
  propertySlug: string;
  accommodationName: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  setStayPreferences: (prefs: Partial<StayPreferences>) => void;
  openEnquiry: (
    propertySlug?: string,
    accommodationName?: string,
    overrides?: Partial<StayPreferences>
  ) => void;
  closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [propertySlug, setPropertySlug] = useState("the-ananta-udaipur");
  const [accommodationName, setAccommodationName] = useState("");
  // Dates are strictly empty initially so user selects their own dates
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);

  // Clear any stale cached dates from previous sessions so the home page never shows 13-14 nov
  useEffect(() => {
    try {
      sessionStorage.removeItem("ananta_stay_preferences");
    } catch {
      // Ignore
    }
  }, []);

  const setStayPreferences = (prefs: Partial<StayPreferences>) => {
    if (prefs.checkIn !== undefined) setCheckIn(prefs.checkIn);
    if (prefs.checkOut !== undefined) setCheckOut(prefs.checkOut);
    if (prefs.adults !== undefined) setAdults(prefs.adults);
    if (prefs.propertySlug !== undefined) setPropertySlug(prefs.propertySlug);
    if (prefs.accommodationName !== undefined) setAccommodationName(prefs.accommodationName);
  };

  const openEnquiry = (
    propSlug?: string,
    roomName?: string,
    overrides?: Partial<StayPreferences>
  ) => {
    if (propSlug) setPropertySlug(propSlug);
    if (roomName) {
      setAccommodationName(roomName);
    } else {
      setAccommodationName("");
    }
    if (overrides) {
      if (overrides.checkIn !== undefined) setCheckIn(overrides.checkIn);
      if (overrides.checkOut !== undefined) setCheckOut(overrides.checkOut);
      if (overrides.adults !== undefined) setAdults(overrides.adults);
    }
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
  };

  return (
    <EnquiryContext.Provider
      value={{
        isOpen,
        propertySlug,
        accommodationName,
        checkIn,
        checkOut,
        adults,
        setStayPreferences,
        openEnquiry,
        closeEnquiry,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used within an EnquiryProvider");
  }
  return context;
}
