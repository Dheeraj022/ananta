export interface Accommodation {
  id: string;
  name: string;
  category: string;
  size: string;
  occupancy: string;
  bedType: string;
  view: string;
  images: string[];
  description: string;
  features: string[];
  amenities: string[];
}

export interface Amenity {
  name: string;
  category: "wellness" | "leisure" | "dining" | "convenience" | "business";
  iconName: string;
  description?: string;
}

export interface Highlight {
  title: string;
  description: string;
  iconName: string;
}

export interface DiningOption {
  name: string;
  tagline: string;
  description: string;
  timing?: string;
  cuisine: string;
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  location: {
    city: string;
    state: string;
    fullAddress: string;
    setting: string;
    nearestTransit: string;
    mapCoordinates?: {
      lat: number;
      lng: number;
    };
  };
  tagline: string;
  heroIntro?: string;
  heroImage: string;
  cardImage: string;
  gallery: string[];
  shortDescription: string;
  overview: string[];
  keyStats: {
    label: string;
    value: string;
  }[];
  highlights: Highlight[];
  amenities: Amenity[];
  dining: DiningOption[];
  accommodations: Accommodation[];
}

export interface EnquirySubmission {
  fullName: string;
  email: string;
  phone: string;
  propertySlug: string;
  propertyName: string;
  accommodationId?: string;
  accommodationName?: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  specialRequests?: string;
  privacyAccepted: boolean;
}

