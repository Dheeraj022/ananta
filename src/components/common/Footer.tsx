import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { properties } from "@/data/properties";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-stone-800/80">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-serif text-2xl tracking-[0.16em] text-white uppercase font-normal">
                GUEST-ASSIST
              </span>
              <span className="block text-[10px] tracking-[0.24em] text-gold uppercase mt-0.5">
                Independent Travel Partner
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Guest-assist is operated by <strong>{siteConfig.companyLegalName}</strong> as an independent travel partner helping discerning travelers discover and submit stay
              enquiries for four exceptional Ananta resort properties across Rajasthan.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-800/80 border border-stone-700/60 text-[10px] uppercase tracking-wider text-stone-300">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>Independent Travel Partner Desk</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-800/80 border border-stone-700/60 text-[10px] font-mono tracking-wider text-gold">
                <span>GSTIN: {siteConfig.gstin}</span>
              </span>
            </div>
          </div>

          {/* Featured Properties */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-medium mb-4">
              Featured Properties
            </h4>
            <ul className="space-y-2.5 text-xs">
              {properties.map((prop) => (
                <li key={prop.slug}>
                  <Link
                    href={`/properties/${prop.slug}`}
                    className="text-stone-300 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{prop.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-medium mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#amenities" className="hover:text-white transition-colors">
                  Resort Amenities
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-white transition-colors">
                  Simple Enquiry Steps
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/#our-role" className="hover:text-white transition-colors">
                  Our Role & Independence
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Our Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Concierge Desk
                </Link>
              </li>
              <li>
                <Link href="/#enquiry" className="hover:text-white transition-colors">
                  Enquiry Submission
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Partner Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Concierge Desk Contacts (With verified disclaimer placeholder) */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-medium mb-4">
              Partner Enquiry Desk
            </h4>
            <ul className="space-y-3 text-xs text-stone-300">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="hover:text-white transition-colors font-medium"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <span className="block text-[10px] text-stone-400">
                    Enquiry assistance hotline
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-white transition-colors break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-stone-400">{siteConfig.contact.hours}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-stone-400 leading-relaxed">
                  {siteConfig.contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Independent Partner Disclosure Banner */}
        <div className="py-8 my-6 bg-charcoal-dark border border-stone-800 rounded-lg p-5">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="space-y-1.5 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">
                  Mandatory Legal Disclosure
                </span>
                <span className="text-stone-600">•</span>
                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono">
                  GSTIN: {siteConfig.gstin}
                </span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {siteConfig.partnerDisclosure}
              </p>
              <div className="text-[11px] text-stone-400 pt-1">
                Official Entity: <strong className="text-stone-200">{siteConfig.companyLegalName}</strong>
              </div>
            </div>
            <Link
              href="/disclaimer"
              className="shrink-0 px-4 py-2 border border-stone-700 hover:border-gold text-xs text-gold hover:text-white rounded transition-colors whitespace-nowrap"
            >
              Full Disclaimer
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} {siteConfig.companyLegalName}. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-stone-300 transition-colors">
              Disclaimer
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-stone-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

