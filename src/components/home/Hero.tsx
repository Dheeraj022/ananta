"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useEnquiry } from "../enquiry/EnquiryContext";
import { CalendarCheck, Compass, ShieldCheck } from "lucide-react";
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

  // Subtle auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const scrollToProperties = () => {
    const el = document.getElementById("properties");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between bg-charcoal text-white overflow-hidden">
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
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-dark/70 border border-gold/30 backdrop-blur-md mb-6">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-stone-200 font-medium">
              Guest-assist • Rajasthan Collection
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight leading-[1.1] mb-6">
            Discover Four Distinct Retreats Across Rajasthan
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-light mb-10 max-w-2xl">
            Explore premier Ananta hotel properties nestled among the Aravalli hills, sacred desert
            sands, secluded valleys, and royal highways. Submit an enquiry to plan your bespoke stay.
          </p>

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
  );
}
