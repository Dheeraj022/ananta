import React from "react";
import { siteConfig } from "@/data/site-config";
import { Info } from "lucide-react";

interface PartnerNoticeProps {
  variant?: "banner" | "inline" | "card";
  className?: string;
}

export default function PartnerNotice({
  variant = "banner",
  className = "",
}: PartnerNoticeProps) {
  if (variant === "inline") {
    return (
      <div
        className={`flex items-start gap-2.5 p-3 rounded bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed ${className}`}
      >
        <Info className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold">Independent Travel Partner Disclosure:</span>{" "}
          {siteConfig.partnerDisclosure}
        </div>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div
        className={`p-6 bg-sand-light border border-sand rounded-lg text-charcoal ${className}`}
      >
        <div className="flex items-center gap-2 mb-2 text-forest font-semibold text-xs uppercase tracking-wider">
          <Info className="w-4 h-4" />
          <span>Independent Travel Partner</span>
        </div>
        <p className="text-sm leading-relaxed text-stone-700">
          {siteConfig.partnerDisclosure}
        </p>
      </div>
    );
  }

  // Top or section banner - 100% SOLID OPAQUE BACKGROUND (no transparency)
  return (
    <aside
      aria-label="Independent Partner Disclosure"
      className={`bg-[#F1E8D9] border-b border-[#DFCBB0] py-2.5 px-4 text-center text-[11px] md:text-xs text-charcoal tracking-wide font-normal ${className}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
        <span className="font-semibold text-forest uppercase tracking-wider text-[10px] sm:text-xs bg-white px-2 py-0.5 rounded border border-forest/20 shadow-sm">
          Independent Travel Partner
        </span>
        <span className="text-stone-800">
          Property discovery & enquiry concierge. We are not the official website of Ananta Hotels.
        </span>
        <a
          href="/disclaimer"
          className="text-forest hover:text-forest-dark font-medium underline underline-offset-2 ml-1"
        >
          Read Disclosure
        </a>
      </div>
    </aside>
  );
}
