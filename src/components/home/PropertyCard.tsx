import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/types/property";
import { MapPin, ArrowRight, BedDouble } from "lucide-react";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group bg-white rounded-lg overflow-hidden border border-stone-200/90 hover:border-forest/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col h-full">
      {/* Property Image Container */}
      <Link
        href={`/properties/${property.slug}`}
        className="relative aspect-[16/10] w-full overflow-hidden block bg-stone-100"
      >
        <Image
          src={property.cardImage}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Location Badge */}
        <div className="absolute top-3 left-3 bg-charcoal/80 backdrop-blur-sm text-white text-[11px] uppercase tracking-wider px-2.5 py-1 rounded flex items-center gap-1 font-medium">
          <MapPin className="w-3 h-3 text-gold" />
          <span>{property.location.city}</span>
        </div>

        {/* Accommodations count preview */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-charcoal text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-semibold flex items-center gap-1">
          <BedDouble className="w-3 h-3 text-forest" />
          <span>{property.accommodations.length} Room Types</span>
        </div>
      </Link>

      {/* Property Details */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-forest font-semibold mb-1">
            Rajasthan Collection
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium group-hover:text-forest transition-colors">
            <Link href={`/properties/${property.slug}`}>{property.name}</Link>
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
            {property.shortDescription}
          </p>
        </div>

        {/* Key Highlights Tags */}
        <div className="pt-2 border-t border-stone-100">
          <div className="text-[10px] uppercase tracking-wider text-stone-400 mb-2">
            Property Highlights
          </div>
          <div className="flex flex-wrap gap-1.5">
            {property.highlights.slice(0, 2).map((h, i) => (
              <span
                key={i}
                className="text-[11px] px-2.5 py-0.5 rounded-full bg-sand-cream text-stone-700 border border-sand"
              >
                {h.title}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <Link
            href={`/properties/${property.slug}`}
            className="w-full py-2.5 px-4 bg-sand-light hover:bg-forest text-charcoal hover:text-white text-xs font-medium uppercase tracking-widest rounded transition-all duration-200 flex items-center justify-center gap-2 group/btn border border-sand hover:border-forest"
          >
            <span>Explore Property</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}

