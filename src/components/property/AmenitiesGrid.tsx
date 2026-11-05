import React from "react";
import { Amenity } from "@/types/property";
import SectionHeading from "../common/SectionHeading";
import {
  Waves,
  Sparkles,
  Dumbbell,
  Smile,
  Compass,
  Users,
  Coffee,
  Wifi,
  Car,
  MapPin,
  Utensils,
  CheckCircle,
} from "lucide-react";

interface AmenitiesGridProps {
  amenities: Amenity[];
}

const iconDict: Record<string, React.ReactNode> = {
  Waves: <Waves className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Dumbbell: <Dumbbell className="w-5 h-5" />,
  Smile: <Smile className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Coffee: <Coffee className="w-5 h-5" />,
  Wifi: <Wifi className="w-5 h-5" />,
  Car: <Car className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
  Utensils: <Utensils className="w-5 h-5" />,
};

export default function AmenitiesGrid({ amenities }: AmenitiesGridProps) {
  return (
    <section className="py-16 bg-sand-cream/50 border-y border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resort Facilities"
          title="Curated Amenities & Services"
          subtitle="Every facility is designed to enhance wellness, relaxation, and memorable experiences during your stay."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-lg border border-sand/70 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded bg-forest-surface text-forest flex items-center justify-center shrink-0 border border-forest/15">
                {iconDict[item.iconName] || <CheckCircle className="w-5 h-5" />}
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                  {item.name}
                </div>
                {item.description && (
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                )}
                <span className="inline-block text-[10px] uppercase tracking-wider text-forest/80 font-medium">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

