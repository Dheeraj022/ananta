import React from "react";
import Image from "next/image";
import { Property } from "@/types/property";
import SectionHeading from "../common/SectionHeading";
import { Mountain, Droplets, Waves, Sparkles, Tent, Utensils, Compass, Castle, MapPin } from "lucide-react";

interface PropertyOverviewProps {
  property: Property;
}

const iconMap: Record<string, React.ReactNode> = {
  Mountain: <Mountain className="w-5 h-5" />,
  Droplets: <Droplets className="w-5 h-5" />,
  Waves: <Waves className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Tent: <Tent className="w-5 h-5" />,
  Utensils: <Utensils className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Castle: <Castle className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
};

export default function PropertyOverview({ property }: PropertyOverviewProps) {
  return (
    <section className="hidden md:block py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Description */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="The Estate Experience"
              title={`Welcome to ${property.name}`}
              alignment="left"
              className="mb-6"
            />

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              {property.overview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-stone-200">
              {property.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-forest-surface text-forest flex items-center justify-center shrink-0 mt-0.5 border border-forest/15">
                    {iconMap[item.iconName] || <Sparkles className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Showcase Collage */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-sand">
              <Image
                src={property.cardImage}
                alt={`${property.name} estate grounds`}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>

            {/* Gallery Thumbnail Preview */}
            <div className="grid grid-cols-3 gap-3">
              {property.gallery.slice(1, 4).map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded overflow-hidden shadow-sm border border-stone-200"
                >
                  <Image
                    src={img}
                    alt={`${property.name} gallery ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 33vw, 160px"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

