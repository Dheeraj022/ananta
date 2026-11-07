"use client";

import React, { useState } from "react";
import { Accommodation } from "@/types/property";
import RoomImageCarousel from "./RoomImageCarousel";
import { useEnquiry } from "../enquiry/EnquiryContext";
import {
  Maximize2,
  Users,
  Bed,
  Eye,
  Check,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface AccommodationAccordionProps {
  propertySlug: string;
  propertyName: string;
  accommodations: Accommodation[];
}

export default function AccommodationAccordion({
  propertySlug,
  propertyName,
  accommodations,
}: AccommodationAccordionProps) {
  // Active room tab (defaults to first room) for Desktop Tab Bar view
  const [activeIndex, setActiveIndex] = useState(0);
  const { openEnquiry } = useEnquiry();

  if (!accommodations || accommodations.length === 0) {
    return (
      <div className="p-8 text-center bg-sand-light rounded-lg text-stone-500">
        Accommodation details are currently being finalized. Please contact our enquiry desk for
        room options.
      </div>
    );
  }

  const activeAcc = accommodations[activeIndex] || accommodations[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? accommodations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === accommodations.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* =========================================================================
          1. MOBILE VIEW: Vertical List Form (Visible only on mobile: block md:hidden)
          ========================================================================= */}
      <div className="block md:hidden space-y-6">
        {accommodations.map((acc) => (
          <div
            key={acc.id}
            className="bg-white rounded-xl overflow-hidden border border-sand/90 shadow-md flex flex-col"
          >
            {/* Room Image Carousel (without thumbnail bar to keep it sleek on mobile) */}
            <div className="p-3 bg-stone-50/60">
              <RoomImageCarousel
                images={acc.images}
                roomName={acc.name}
                showThumbnails={false}
              />
            </div>

            {/* Room Content */}
            <div className="p-5 space-y-4">
              <div>
                <div className="inline-block text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-sand-warm text-stone-800 font-semibold mb-1.5">
                  {acc.category}
                </div>
                <h3 className="font-serif text-2xl text-charcoal font-medium">
                  {acc.name}
                </h3>
              </div>

              {/* 4-Stat Specs Grid */}
              <div className="grid grid-cols-2 gap-2.5 p-3.5 bg-sand-cream/80 rounded-lg border border-sand text-xs">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-stone-500">
                    <Maximize2 className="w-3.5 h-3.5 text-forest" />
                    <span>Room Size</span>
                  </div>
                  <div className="font-semibold text-charcoal">{acc.size}</div>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-stone-500">
                    <Users className="w-3.5 h-3.5 text-forest" />
                    <span>Occupancy</span>
                  </div>
                  <div className="font-semibold text-charcoal">{acc.occupancy}</div>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-stone-500">
                    <Bed className="w-3.5 h-3.5 text-forest" />
                    <span>Bed Type</span>
                  </div>
                  <div className="font-semibold text-charcoal">{acc.bedType}</div>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-stone-500">
                    <Eye className="w-3.5 h-3.5 text-forest" />
                    <span>View</span>
                  </div>
                  <div className="font-semibold text-charcoal truncate" title={acc.view}>
                    {acc.view}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-light">
                {acc.description}
              </p>

              {/* Key Features */}
              {acc.features && acc.features.length > 0 && (
                <div className="pt-2 border-t border-stone-100">
                  <div className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-2">
                    Key Features
                  </div>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {acc.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Amenities */}
              {acc.amenities && acc.amenities.length > 0 && (
                <div className="pt-2 border-t border-stone-100">
                  <div className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-2">
                    Amenities
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {acc.amenities.map((item, aIdx) => (
                      <span
                        key={aIdx}
                        className="text-[10px] px-2 py-0.5 bg-sand-cream rounded text-stone-700 border border-sand"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Direct Enquiry Button */}
              <div className="pt-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => openEnquiry(propertySlug, acc.name)}
                  className="w-full py-3.5 bg-forest hover:bg-forest-hover text-white text-xs font-medium uppercase tracking-widest rounded transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Enquire About {acc.name}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* =========================================================================
          2. DESKTOP VIEW: Horizontal Tab Bar (Visible on tablet & desktop: hidden md:block)
          ========================================================================= */}
      <div className="hidden md:block w-full rounded-xl overflow-hidden shadow-lg border border-sand/80 bg-white">
        {/* Horizontal Gold Room Tab Bar (Matching Reference Layout) */}
        <nav
          aria-label="Accommodation Categories"
          className="bg-[#BA9554] text-charcoal border-b border-[#A68344] shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-auto scrollbar-none">
            <div className="flex items-center justify-start min-w-max mx-auto py-1 gap-1 sm:gap-2 md:gap-3">
              {accommodations.map((acc, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={acc.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`relative py-3.5 px-3 sm:px-4 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] whitespace-nowrap transition-all duration-200 cursor-pointer focus:outline-none ${
                      isActive
                        ? "text-charcoal font-bold"
                        : "text-charcoal/70 hover:text-charcoal hover:bg-black/5 rounded"
                    }`}
                    aria-selected={isActive}
                    role="tab"
                  >
                    <span>{acc.name}</span>
                    {/* Active Underline Indicator */}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-charcoal rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Room Details Content Area */}
        <div
          key={activeAcc.id}
          className="p-6 sm:p-8 lg:p-10 animate-in fade-in duration-300 bg-white"
          role="tabpanel"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Image Gallery Carousel */}
            <div className="lg:col-span-5 space-y-3">
              <RoomImageCarousel images={activeAcc.images} roomName={activeAcc.name} />

              {/* Room Navigation Pill (Prev / Next) */}
              <div className="flex items-center justify-between text-xs text-stone-500 pt-2 px-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="hover:text-forest flex items-center gap-1 font-medium transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Room</span>
                </button>

                <span className="text-[11px] font-mono font-medium text-stone-400">
                  {activeIndex + 1} of {accommodations.length}
                </span>

                <button
                  type="button"
                  onClick={handleNext}
                  className="hover:text-forest flex items-center gap-1 font-medium transition-colors"
                >
                  <span>Next Room</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Room Details, Specifications & Direct CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-block text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-sand-warm text-stone-800 font-semibold mb-2">
                  {activeAcc.category}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                  {activeAcc.name}
                </h3>
              </div>

              {/* Key Specifications Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-sand-cream/80 rounded-lg border border-sand">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-stone-500">
                    <Maximize2 className="w-3.5 h-3.5 text-forest" />
                    <span>Room Size</span>
                  </div>
                  <div className="text-xs font-semibold text-charcoal">{activeAcc.size}</div>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-stone-500">
                    <Users className="w-3.5 h-3.5 text-forest" />
                    <span>Occupancy</span>
                  </div>
                  <div className="text-xs font-semibold text-charcoal">{activeAcc.occupancy}</div>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-stone-500">
                    <Bed className="w-3.5 h-3.5 text-forest" />
                    <span>Bed Type</span>
                  </div>
                  <div className="text-xs font-semibold text-charcoal">{activeAcc.bedType}</div>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-stone-500">
                    <Eye className="w-3.5 h-3.5 text-forest" />
                    <span>View</span>
                  </div>
                  <div className="text-xs font-semibold text-charcoal truncate" title={activeAcc.view}>
                    {activeAcc.view}
                  </div>
                </div>
              </div>

              {/* Room Description */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-2">
                  Accommodation Overview
                </h4>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {activeAcc.description}
                </p>
              </div>

              {/* Room Highlights / Features */}
              {activeAcc.features && activeAcc.features.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-2">
                    Key Room Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    {activeAcc.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Room Amenities Pills */}
              {activeAcc.amenities && activeAcc.amenities.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-2">
                    Room Amenities
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeAcc.amenities.map((item, aIdx) => (
                      <span
                        key={aIdx}
                        className="text-[11px] px-2.5 py-1 bg-sand-cream rounded text-stone-700 border border-sand"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Direct Room Enquiry CTA Box */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-stone-200">
                <div>
                  <div className="text-xs text-stone-700 font-medium">
                    Enquire for <strong>{activeAcc.name}</strong> at {propertyName}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    Room name and stay preferences will be pre-filled automatically
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openEnquiry(propertySlug, activeAcc.name)}
                  className="w-full sm:w-auto px-7 py-3 bg-forest hover:bg-forest-hover text-white text-xs font-medium uppercase tracking-widest rounded transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-2 group shrink-0"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Enquire About This Room</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
