"use client";

import React from "react";
import { useEnquiry } from "../enquiry/EnquiryContext";
import { CalendarCheck, Compass } from "lucide-react";
import EnquiryStrip from "./EnquiryStrip";

export default function Hero() {
  const { openEnquiry } = useEnquiry();

  const scrollToProperties = () => {
    const el = document.getElementById("properties");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between bg-charcoal text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_2810/x_2,y_0,w_4996,h_2810,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/ananta-hotels-resorts/The_Ananta_Udaipur_1_niakxc"
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
        >
          <source src="/ananta_website_changes_3_1_1.mp4" type="video/mp4" />
        </video>
        {/* Atmospheric Gradient Overlays to preserve text readability */}
        <div className="absolute inset-0 bg-charcoal/40 bg-gradient-to-t from-charcoal via-charcoal/30 to-black/50 pointer-events-none" />
      </div>

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
      </div>

      {/* Compact Enquiry Strip at bottom of Hero */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 pb-8 max-w-7xl mx-auto">
        <EnquiryStrip />
      </div>
    </div>
  );
}
