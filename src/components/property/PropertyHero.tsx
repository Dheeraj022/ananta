"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Property } from "@/types/property";
import { useEnquiry } from "../enquiry/EnquiryContext";
import { MapPin, CalendarCheck, BedDouble, ChevronLeft, ChevronRight } from "lucide-react";
import Breadcrumbs from "../common/Breadcrumbs";

interface PropertyHeroProps {
  property: Property;
}

export default function PropertyHero({ property }: PropertyHeroProps) {
  const { openEnquiry } = useEnquiry();

  // Mobile slider images from Ananta Photos 2
  const slides =
    property.heroImages && property.heroImages.length > 0
      ? property.heroImages
      : [property.heroImage];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (distance < -minSwipeDistance) {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  // Auto-rotation every 5 seconds (resets on slide change)
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const scrollToAccommodation = () => {
    const el = document.getElementById("accommodations");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. MOBILE LAYOUT (< md): Interactive Photo Slider at top, content below   */}
      {/* ========================================================================= */}
      <div className="block md:hidden bg-charcoal text-white">
        {/* Mobile Image Slider: Clean high-res photos from Ananta Photos 2, full opacity */}
        <div
          className="relative w-full aspect-[16/10] overflow-hidden bg-stone-900 select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {slides.map((imgUrl, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={index !== currentSlide}
            >
              <Image
                src={imgUrl}
                alt={`${property.name} slide ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}

          {/* Navigation Arrows if multiple slides */}
          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Slide Indicators Pill at bottom center */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      idx === currentSlide ? "w-6 bg-gold" : "w-1.5 bg-white/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Slide Counter Badge in top right */}
              <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono px-2.5 py-0.5 rounded-full font-medium shadow-sm">
                {currentSlide + 1} / {slides.length}
              </div>
            </>
          )}

          {/* City Pill in top left */}
          <div className="absolute top-3 left-3 z-20 bg-charcoal/85 backdrop-blur-md border border-white/15 text-gold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold flex items-center gap-1 shadow-sm">
            <MapPin className="w-3 h-3" />
            <span>{property.location.city}</span>
          </div>
        </div>

        {/* Content Section Below Slider */}
        <div className="px-4 pt-5 pb-8 space-y-4">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Our Properties", href: "/#properties" },
              { label: property.name },
            ]}
            className="text-stone-300 [&_a]:text-stone-300 [&_span]:text-white [&_svg]:text-stone-400 text-xs"
          />

          {/* Property Name */}
          <h1 className="text-3xl font-serif font-light tracking-tight leading-tight">
            {property.name}
          </h1>

          {/* 2-line Informative Welcome text */}
          <p className="text-sm text-stone-200/90 font-light leading-relaxed">
            {property.heroIntro || `Welcome to ${property.name} — ${property.tagline}.`}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col gap-2.5 pt-1">
            <button
              type="button"
              onClick={scrollToAccommodation}
              className="w-full py-3.5 bg-forest hover:bg-forest-hover text-white text-xs font-medium uppercase tracking-widest rounded transition-all duration-200 shadow-md flex items-center justify-center gap-2"
            >
              <BedDouble className="w-4 h-4" />
              <span>Explore Accommodation</span>
            </button>

            <button
              type="button"
              onClick={() => openEnquiry(property.slug)}
              className="w-full py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm text-xs font-medium uppercase tracking-widest rounded transition-all duration-200 flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-gold" />
              <span>Enquire About This Property</span>
            </button>
          </div>

          {/* Key Stats Strip */}
          <div className="pt-4 border-t border-white/15 grid grid-cols-2 gap-3.5">
            {property.keyStats.map((stat, idx) => (
              <div key={idx} className="bg-white/5 p-2.5 rounded border border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-stone-400 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-base font-serif text-white font-medium">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. DESKTOP LAYOUT (≥ md): Full-screen background image banner             */}
      {/* ========================================================================= */}
      <div className="hidden md:block relative w-full bg-charcoal text-white overflow-hidden">
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

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight leading-tight mb-2 sm:mb-3">
              {property.name}
            </h1>

            <p className="text-sm sm:text-base text-stone-200/90 font-light leading-relaxed mb-6 sm:mb-8 max-w-xl">
              {property.heroIntro || `Welcome to ${property.name} — ${property.tagline}.`}
            </p>

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
    </>
  );
}

