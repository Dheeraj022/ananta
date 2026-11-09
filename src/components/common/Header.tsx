"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEnquiry } from "../enquiry/EnquiryContext";
import { properties } from "@/data/properties";
import { Menu, X, ChevronDown } from "lucide-react";
import PartnerNotice from "./PartnerNotice";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [propertiesDropdownOpen, setPropertiesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();

  // Scroll detection to hide top disclosure banner on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPropertiesDropdownOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      {/* Top Disclosure Strip - Shown only on laptop/desktop (hidden on mobile and tablet); smoothly hides after scroll */}
      <div
        className={`hidden lg:block w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isScrolled
            ? "max-h-0 opacity-0 -translate-y-full pointer-events-none"
            : "max-h-16 opacity-100 translate-y-0"
        }`}
      >
        <PartnerNotice variant="banner" />
      </div>

      {/* Main Navigation Bar - 100% solid white, no transparency */}
      <nav
        className={`w-full transition-all duration-200 border-b bg-white ${
          isScrolled
            ? "shadow-sm border-stone-200 py-3"
            : "border-stone-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Area */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.14em] text-charcoal font-semibold uppercase group-hover:text-forest transition-colors">
              GUEST-ASSIST
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.22em] text-forest uppercase font-medium -mt-0.5">
              Independent Travel Partner
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 text-xs font-medium uppercase tracking-[0.14em] text-stone-700">
            <Link
              href="/"
              className={`hover:text-forest transition-colors ${
                pathname === "/" ? "text-forest font-semibold" : ""
              }`}
            >
              Home
            </Link>

            {/* Properties Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPropertiesDropdownOpen(true)}
              onMouseLeave={() => setPropertiesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 hover:text-forest transition-colors py-2 uppercase tracking-[0.14em] ${
                  pathname.startsWith("/properties") ? "text-forest font-semibold" : ""
                }`}
                aria-expanded={propertiesDropdownOpen}
              >
                <span>Our Properties</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {propertiesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-stone-200/80 shadow-xl rounded-md py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-4 py-1.5 text-[10px] text-stone-400 uppercase tracking-widest border-b border-stone-100">
                    Featured Rajasthan Stays
                  </div>
                  {properties.map((prop) => (
                    <Link
                      key={prop.slug}
                      href={`/properties/${prop.slug}`}
                      className="block px-4 py-2.5 text-xs text-stone-700 hover:text-forest hover:bg-sand-light transition-colors normal-case font-normal"
                    >
                      <div className="font-serif text-sm font-medium text-charcoal">
                        {prop.name}
                      </div>
                      <div className="text-[11px] text-stone-500">{prop.location.city}, Rajasthan</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#amenities"
              className="hover:text-forest transition-colors"
            >
              Amenities
            </Link>

            <Link
              href="/#faq"
              className="hover:text-forest transition-colors"
            >
              FAQs
            </Link>

            <Link
              href="/#our-role"
              className="hover:text-forest transition-colors"
            >
              Our Role
            </Link>

            <Link
              href="/about"
              className={`hover:text-forest transition-colors ${
                pathname === "/about" ? "text-forest font-semibold" : ""
              }`}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={`hover:text-forest transition-colors ${
                pathname === "/contact" ? "text-forest font-semibold" : ""
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => openEnquiry()}
              className="px-5 py-2.5 bg-forest hover:bg-forest-hover text-white text-xs font-medium uppercase tracking-widest rounded transition-all duration-200 shadow-sm hover:shadow"
            >
              Send an Enquiry
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openEnquiry()}
              className="px-3 py-1.5 bg-forest text-white text-[11px] font-medium uppercase tracking-wider rounded"
            >
              Enquire
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-forest focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 px-5 pt-3 pb-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-stone-800 hover:text-forest border-b border-stone-100"
            >
              Home
            </Link>

            <div className="py-2 border-b border-stone-100">
              <div className="text-xs uppercase tracking-wider text-forest font-semibold mb-2">
                Our Properties
              </div>
              <div className="space-y-2 pl-3">
                {properties.map((prop) => (
                  <Link
                    key={prop.slug}
                    href={`/properties/${prop.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm text-stone-700 hover:text-forest py-1 font-serif"
                  >
                    {prop.name}
                    <span className="text-xs font-sans text-stone-400 block -mt-0.5">
                      {prop.location.city}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-stone-800 hover:text-forest border-b border-stone-100"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-stone-800 hover:text-forest border-b border-stone-100"
            >
              Contact Us
            </Link>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEnquiry();
                }}
                className="w-full py-3 bg-forest text-white text-xs font-medium uppercase tracking-widest rounded text-center"
              >
                Send an Enquiry
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
