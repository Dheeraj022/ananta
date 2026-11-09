import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { properties, getPropertyBySlug, getAllPropertySlugs } from "@/data/properties";
import PropertyHero from "@/components/property/PropertyHero";
import PropertyOverview from "@/components/property/PropertyOverview";
import AmenitiesGrid from "@/components/property/AmenitiesGrid";
import AccommodationAccordion from "@/components/property/AccommodationAccordion";
import LocationSection from "@/components/property/LocationSection";
import EnquiryForm from "@/components/enquiry/EnquiryForm";
import PartnerNotice from "@/components/common/PartnerNotice";
import SectionHeading from "@/components/common/SectionHeading";
import StayPreferenceSync from "@/components/property/StayPreferenceSync";

interface PropertyPageProps {
  params: {
    slug: string;
  };
  searchParams?: {
    checkIn?: string;
    checkOut?: string;
    adults?: string;
    children?: string;
  };
}

export async function generateStaticParams() {
  return getAllPropertySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const property = getPropertyBySlug(params.slug);
  if (!property) return { title: "Property Not Found" };

  return {
    title: `${property.name} — ${property.location.city}, Rajasthan`,
    description: `${property.shortDescription} Explore room categories, resort facilities, and submit stay enquiries with an independent travel partner.`,
    openGraph: {
      title: `${property.name} | Guest-assist`,
      description: property.shortDescription,
      images: [{ url: property.heroImage }],
    },
  };
}

export default function PropertyPage({ params, searchParams }: PropertyPageProps) {
  const property = getPropertyBySlug(params.slug);

  if (!property) {
    notFound();
  }

  const initialCheckIn = searchParams?.checkIn;
  const initialCheckOut = searchParams?.checkOut;
  const initialAdults = searchParams?.adults ? parseInt(searchParams.adults, 10) : undefined;

  return (
    <div>
      {/* 1 & 2 & 3: Property Hero Image, Name, Location & Introduction */}
      <PropertyHero property={property} />

      {/* Sync bar for selected stay dates & guests from search strip */}
      <Suspense fallback={null}>
        <StayPreferenceSync propertyName={property.name} />
      </Suspense>

      {/* 4 & 6: Property Overview, Information & Highlights */}
      <PropertyOverview property={property} />

      {/* 5: Key Facilities and Amenities (Desktop view: above accommodations) */}
      <AmenitiesGrid amenities={property.amenities} className="hidden md:block" />

      {/* 7: Accommodation Section — Aamby Valley Style Accordion */}
      <section id="accommodations" className="py-20 bg-sand-light/50 scroll-mt-20 border-b border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Accommodations & Villas"
            title="Browse Rooms & Villas"
            subtitle="Explore luxury villas, suites, and cottages. View photo galleries, specifications, bed configurations, and enquire directly for your stay."
          />

          <AccommodationAccordion
            propertySlug={property.slug}
            propertyName={property.name}
            accommodations={property.accommodations}
          />
        </div>
      </section>

      {/* 5: Key Facilities and Amenities (Mobile only: positioned just below accommodations) */}
      <AmenitiesGrid amenities={property.amenities} className="block md:hidden" />

      {/* 8: Location Information & Dining */}
      <LocationSection property={property} />

      {/* 9: Dedicated Property Enquiry CTA & Form */}
      <section id="property-enquiry" className="py-20 bg-sand-cream/70 border-t border-sand scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Personal Concierge"
            title={`Enquire About Staying at ${property.name}`}
            subtitle="Your selected stay dates and guest count are pre-filled below. Complete your contact details to submit your enquiry."
          />

          <div className="bg-white p-6 sm:p-10 rounded-xl border border-sand shadow-lg">
            <EnquiryForm
              initialPropertySlug={property.slug}
              initialCheckIn={initialCheckIn}
              initialCheckOut={initialCheckOut}
              initialAdults={initialAdults}
            />
          </div>

          {/* 10: Independent Travel Partner Disclosure */}
          <div className="mt-10">
            <PartnerNotice variant="card" />
          </div>
        </div>
      </section>
    </div>
  );
}
