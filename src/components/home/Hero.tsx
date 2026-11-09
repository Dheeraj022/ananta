"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useEnquiry } from "../enquiry/EnquiryContext";
import { CalendarCheck, Compass, ChevronLeft, ChevronRight } from "lucide-react";
import EnquiryStrip from "./EnquiryStrip";

const heroSlides = [
  {
    image:
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_2810/x_2,y_0,w_4996,h_2810,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/ananta-hotels-resorts/The_Ananta_Udaipur_1_niakxc",
    title: "Nature-Inspired Sanctuary in Udaipur",
    caption: "The Ananta Udaipur — 40+ acres amidst the rolling Aravalli Hills",
  },
  {
    image:
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_2813/x_0,y_0,w_4996,h_2813,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/ananta-spa-and-resort-pushkar/A_decorative_shade_at_our_5-star_resort_in_Pushkar_with_a_Ganesh_statue,_a_green_patch_and_trees_",
    title: "Tented Luxury & Serenity in Pushkar",
    caption: "Ananta Spa & Resort Pushkar — Desert cottages & canopied suites",
  },
  {
    image:
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/ananta-spa-and-resort-ajabgarh/Reception_a10391d9",
    title: "Secluded Mountain Hideaway in Ajabgarh",
    caption: "Ananta Spa & Resort Ajabgarh — Boutique peace & private plunge pools",
  },
  {
    image:
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3335/x_0,y_261,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/ananta-hotels-resorts/0A4A7146_k3um8e",
    title: "Palatial Rajputana Grandeur in Jaipur",
    caption: "Ananta Spa & Resort Jaipur — Kukas luxury close to Amer Fort",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openEnquiry } = useEnquiry();

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
      // Swiped left -> next slide
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev slide
      setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    }
  };

  // Auto-rotation every 5 seconds (resets on manual interaction)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const scrollToProperties = () => {
    const el = document.getElementById("properties");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ============================================================== */}
      {/* 1. MOBILE LAYOUT (< md): Slider first, content below, 100% opacity */}
      {/* ============================================================== */}
      <div className="block md:hidden bg-charcoal text-white">
        {/* Mobile Image Slider: Clean photos, full opacity, no text overlay */}
        <div
          className="relative w-full aspect-[16/10] overflow-hidden bg-stone-900 select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={index !== currentSlide}
            >
              <Image
                src={slide.image}
                alt={slide.caption}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}

          {/* Previous / Next Arrow Controls */}
          <button
            type="button"
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Slide Indicators Pill at bottom center */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {heroSlides.map((_, idx) => (
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

          {/* Compact Property Badge */}
          <div className="absolute top-3 left-3 z-20 bg-charcoal/85 backdrop-blur-md border border-white/15 text-stone-200 text-[11px] tracking-wide px-3 py-1 rounded-full font-medium shadow-sm">
            {heroSlides[currentSlide].caption.split("—")[0].trim()}
          </div>
        </div>

        {/* Content Section Below Slider */}
        <div className="px-4 pt-6 pb-6 space-y-4">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-gold inline-block" />
            <span className="text-xs uppercase tracking-[0.22em] font-medium text-gold">
              Info & Details
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl font-serif font-light tracking-tight leading-[1.15]">
            Explore Ananta Spa & Resorts, Rajasthan
          </h1>

          {/* Supporting Copy */}
          <p className="text-sm text-stone-200 leading-relaxed font-light">
            Find property information and enquire about stay details and accommodation options.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 pt-2">
            <button
              type="button"
              onClick={scrollToProperties}
              className="w-full py-3.5 bg-forest hover:bg-forest-hover text-white text-xs font-medium uppercase tracking-[0.2em] rounded shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Properties</span>
            </button>

            <button
              type="button"
              onClick={() => openEnquiry()}
              className="w-full py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm text-xs font-medium uppercase tracking-[0.2em] rounded transition-all duration-200 flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-gold" />
              <span>Send an Enquiry</span>
            </button>
          </div>
        </div>

        {/* Mobile Enquiry Strip */}
        <div className="px-4 pb-8">
          <EnquiryStrip />
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. DESKTOP / TABLET LAYOUT (>= md): Full-bleed background hero */}
      {/* ============================================================== */}
      <div className="hidden md:flex relative min-h-[85vh] lg:min-h-[90vh] flex-col justify-between bg-charcoal text-white overflow-hidden">
        {/* Background Carousel */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-50" : "opacity-0"
            }`}
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={slide.image}
              alt={slide.caption}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover scale-105 transition-transform duration-[8000ms] ease-out"
            />
          </div>
        ))}

        {/* Atmospheric Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-black/30 pointer-events-none" />

        {/* Main Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-8 flex-grow flex flex-col justify-center">
          <div className="max-w-3xl">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="h-px w-6 bg-gold inline-block" />
              <span className="text-xs uppercase tracking-[0.22em] font-medium text-gold">
                Info & Details
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight leading-[1.1] mb-6">
              Explore Ananta Spa & Resorts, Rajasthan
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-light mb-6 max-w-2xl">
              Find property information and enquire about stay details and accommodation options.
            </p>

            {/* Trust Badge Pill — Shown only on laptop/desktop, positioned below supporting copy */}
            <div className="hidden lg:inline-flex items-center gap-3.5 px-6 py-2 rounded-full bg-[#0B1A14]/90 border border-[#BA9554] backdrop-blur-md mb-8 shadow-lg">
              <span className="text-xs font-medium text-[#F3CA7E] tracking-wide">Enquiry Based</span>
              <span className="w-px h-3.5 bg-[#BA9554]/60" />
              <span className="text-xs font-medium text-[#F3CA7E] tracking-wide">No Booking</span>
              <span className="w-px h-3.5 bg-[#BA9554]/60" />
              <span className="text-xs font-medium text-[#F3CA7E] tracking-wide">No Payment</span>
              <span className="w-px h-3.5 bg-[#BA9554]/60" />
              <span className="text-xs font-medium text-[#F3CA7E] tracking-wide">Independent Service</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={scrollToProperties}
                className="px-8 py-4 bg-forest hover:bg-forest-hover text-white text-xs font-medium uppercase tracking-[0.2em] rounded shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Properties</span>
              </button>

              <button
                type="button"
                onClick={() => openEnquiry()}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm text-xs font-medium uppercase tracking-[0.2em] rounded transition-all duration-200 flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4 text-gold" />
                <span>Send an Enquiry</span>
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="mt-12 flex items-center gap-3">
            {heroSlides.map((slide, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`h-1 transition-all duration-300 rounded-full ${
                  idx === currentSlide ? "w-10 bg-gold" : "w-4 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
            <span className="text-[11px] text-stone-300 italic ml-2 hidden sm:inline">
              {heroSlides[currentSlide].caption}
            </span>
          </div>
        </div>

        {/* Compact Enquiry Strip at bottom of Hero */}
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 pb-8 max-w-7xl mx-auto">
          <EnquiryStrip />
        </div>
      </div>
    </>
  );
}
