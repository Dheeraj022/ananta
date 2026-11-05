import React from "react";
import SectionHeading from "../common/SectionHeading";
import { siteConfig } from "@/data/site-config";
import { Compass, UserCheck, ShieldCheck, Layers } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-forest" />,
  UserCheck: <UserCheck className="w-6 h-6 text-forest" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-forest" />,
  Layers: <Layers className="w-6 h-6 text-forest" />,
};

export default function WhyExploreSection() {
  return (
    <section className="py-20 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Commitment"
          title="Why Explore Stays With Us"
          subtitle="We focus on clarity, verified property details, and attentive enquiry coordination so you can plan your Rajasthan retreat with confidence."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.whyExploreWithUs.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-sand-cream/40 rounded-lg border border-sand hover:border-forest/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-forest-surface flex items-center justify-center mb-5 border border-forest/15">
                {iconMap[item.icon] || <ShieldCheck className="w-6 h-6 text-forest" />}
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

