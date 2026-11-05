import React from "react";
import { Property } from "@/types/property";
import SectionHeading from "../common/SectionHeading";
import { MapPin, Navigation, Utensils, Clock } from "lucide-react";

interface LocationSectionProps {
  property: Property;
}

export default function LocationSection({ property }: LocationSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Location Details */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="Getting There"
              title="Location & Surroundings"
              alignment="left"
              className="mb-6"
            />

            <div className="p-6 bg-sand-cream rounded-lg border border-sand space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    Verified Address
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {property.location.fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-sand">
                <Navigation className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    Setting & Access
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-2">
                    {property.location.setting}
                  </p>
                  <p className="text-xs text-stone-500">
                    <strong>Transit notes:</strong> {property.location.nearestTransit}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dining Venues */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="Culinary Journeys"
              title="Dining Venues & Flavours"
              alignment="left"
              className="mb-6"
            />

            <div className="space-y-4">
              {property.dining.map((dine, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border border-stone-200 rounded-lg hover:border-forest/40 transition-colors shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="font-serif text-lg font-medium text-charcoal">
                      {dine.name}
                    </h4>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-sand-warm text-stone-800 self-start sm:self-auto font-medium">
                      {dine.cuisine}
                    </span>
                  </div>
                  <div className="text-xs text-gold-hover font-medium mb-2 italic">
                    {dine.tagline}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    {dine.description}
                  </p>
                  {dine.timing && (
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
                      <Clock className="w-3.5 h-3.5 text-forest" />
                      <span>Hours: {dine.timing}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

