import React from "react";
import { Property } from "@/types/property";
import PropertyCard from "./PropertyCard";
import SectionHeading from "../common/SectionHeading";

interface PropertyGridProps {
  properties: Property[];
}

export default function PropertyGrid({ properties }: PropertyGridProps) {
  return (
    <section id="properties" className="py-20 bg-sand-cream/40 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Collection"
          title="Explore Ananta Properties in Rajasthan"
          subtitle="Browse general information about four properties in Rajasthan. Property features, accommodation details, facilities and services may vary by location and date. Please confirm current information directly with the relevant property."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {properties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

