import React from "react";
import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import PropertyGrid from "@/components/home/PropertyGrid";
import AmenitiesSection from "@/components/home/AmenitiesSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import WhyExploreSection from "@/components/home/WhyExploreSection";
import FaqSection from "@/components/home/FaqSection";
import OurRoleSection from "@/components/home/OurRoleSection";
import HomeEnquirySection from "@/components/home/HomeEnquirySection";
import { properties } from "@/data/properties";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Background Carousel & Search Strip */}
      <Hero />

      {/* 2. Featured Properties Grid */}
      <PropertyGrid properties={properties} />

      {/* 3. Amenities at Ananta Section */}
      <AmenitiesSection />

      {/* 4. Experience & Architectural Highlights */}
      <HighlightsSection />

      {/* 5. Get Your Stay Information in Simple Steps */}
      <HowItWorksSection />

      {/* 6. Why Explore With Us */}
      <WhyExploreSection />

      {/* 7. Frequently Asked Questions */}
      <FaqSection />

      {/* 8. Introduction & Partner Gateway Section */}
      <IntroSection />

      {/* 9. Our Role & Independence Section (Matching Reference Design) */}
      <OurRoleSection />

      {/* 10. Enquiry CTA Section & Form */}
      <HomeEnquirySection />
    </>
  );
}

