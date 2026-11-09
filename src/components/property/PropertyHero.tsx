"use client";

import React from "react";
import Image from "next/image";
import { Property } from "@/types/property";
import { useEnquiry } from "../enquiry/EnquiryContext";
import { MapPin, CalendarCheck, BedDouble } from "lucide-react";
import Breadcrumbs from "../common/Breadcrumbs";

interface PropertyHeroProps {
  property: Property;
}

export default function PropertyHero({ property }: PropertyHeroProps) {
  const { openEnquiry } = useEnquiry();

  const scrollToAccommodation = () => {
    const el = document.getElementById("accommodations");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full bg-charcoal text-white overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={property.heroImage}
          alt={property.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-12 md:pb-24">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Our Properties", href: "/#properties" },
              { label: property.name },
            ]}
            className="text-stone-300 [&_a]:text-stone-300 [&_span]:text-white [&_svg]:text-stone-400"
          />
        </div>

        {/* Content Box */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gold text-xs uppercase tracking-widest font-medium mb-4 border border-white/10">
            <MapPin className="w-3.5 h-3.5" />
            <span>{property.location.city}, Rajasthan</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight leading-tight mb-6 sm:mb-8">
            {property.name}
          </h1>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={scrollToAccommodation}
              className="px-6 py-3.5 bg-forest hover:bg-forest-hover text-white text-xs font-medium uppercase tracking-widest rounded transition-all duration-200 shadow-md flex items-center gap-2"
            >
              <BedDouble className="w-4 h-4" />
              <span>Explore Accommodation</span>
            </button>

            <button
              type="button"
              onClick={() => openEnquiry(property.slug)}
              className="px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm text-xs font-medium uppercase tracking-widest rounded transition-all duration-200 flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-gold" />
              <span>Enquire About This Property</span>
            </button>
          </div>
        </div>

        {/* Key Stats Strip */}
        <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl">
          {property.keyStats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                {stat.label}
              </div>
              <div className="text-lg sm:text-xl font-serif text-white font-medium">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

