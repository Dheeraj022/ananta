import React from "react";
import Image from "next/image";
import SectionHeading from "../common/SectionHeading";
import { Sparkles, Waves, Utensils, Building2, Dumbbell, Car, ArrowRight } from "lucide-react";
import Link from "next/link";

interface AmenityFeature {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  tags: string[];
}

const amenitiesData: AmenityFeature[] = [
  {
    title: "Mudra Spa & Ayurvedic Wellness",
    description:
      "Signature holistic Ayurvedic therapies, detoxifying herbal steam & sauna, body scrubs, and restorative couple massages administered by certified wellness experts.",
    image:
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3378/x_0,y_283,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/ananta-hotels-resorts/The_staff_of_mudra_spa_welcomes_you_to_the_rejuvenating_spa_",
    icon: <Sparkles className="w-5 h-5 text-forest" />,
    tags: ["Ayurveda Therapies", "Steam & Sauna", "Couples Suites"],
  },
  {
    title: "Scenic Swimming Pools & Plunge Pools",
    description:
      "Expansive outdoor infinity pools framing the rolling Aravallis, accompanied by sun-lounging decks and private temperature-controlled villa plunge pools.",
    image:
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_450,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_2475,f_auto,c_fit/the-ananta-udaipur/Swimming_Pool_",
    icon: <Waves className="w-5 h-5 text-forest" />,
    tags: ["Infinity Pools", "Kids Pool Area", "Private Plunge Pools"],
  },
  {
    title: "Multi-Cuisine Dining & Lounge Terraces",
    description:
      "Delight in fine Rajasthani hospitality across specialty restaurants, live cooking stations, poolside bars, and scenic open-to-sky terrace pavilions.",
    image:
      "https://assets.simplotel.com/simplotel/image/upload/x_0,y_74,w_2400,h_1350,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/the-ananta-udaipur/Outdoor_seating_with_umbrellas_and_tables_at_our_resort_in_Udaipur_",
    icon: <Utensils className="w-5 h-5 text-forest" />,
    tags: ["Oasis & Zenith", "Buffet & A la Carte", "Alfresco Dining"],
  },
  {
    title: "Grand Ballrooms & Wedding Lawns",
    description:
      "Magnificent pillarless banquet halls and sprawling manicured lawns capable of hosting grand destination weddings, conventions, and corporate retreats for up to 2,000 guests.",
    image:
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_2810/x_2,y_0,w_4996,h_2810,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/ananta-hotels-resorts/The_Ananta_Udaipur_1_niakxc",
    icon: <Building2 className="w-5 h-5 text-forest" />,
    tags: ["Pillarless Ballrooms", "Manicured Lawns", "Destination Weddings"],
  },
  {
    title: "Fitness Center & Indoor Recreation",
    description:
      "Stay active with modern cardio and strength equipment in the gym, or enjoy billiards, table tennis, chess, and dedicated outdoor play zones for children.",
    image:
      "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_1650,c_fit,f_auto/ananta-spa-and-resort-ajabgarh/Reception_a10391d9",
    icon: <Dumbbell className="w-5 h-5 text-forest" />,
    tags: ["Modern Gymnasium", "Indoor Games Room", "Kids Activity Zone"],
  },
  {
    title: "Golf Buggy Transit & Concierge Services",
    description:
      "Seamless chauffeured golf buggy transit across multi-acre resort hillsides, round-the-clock front desk concierge, luggage assistance, and secure valet parking.",
    image:
      "https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_1499,h_843,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/ananta-hotels-resorts/facade_of_the_lobby_at_Ananta_udaipur_sgvzk2_d5ngdh_wxradf",
    icon: <Car className="w-5 h-5 text-forest" />,
    tags: ["Buggy Estate Transit", "24/7 Front Desk", "Valet Parking"],
  },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 bg-sand-cream/40 scroll-mt-20 border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resort Living & Facilities"
          title="Amenities at Ananta"
          subtitle="Experience exceptional amenities, from Ayurvedic spas and pools to fine dining and grand celebration lawns."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesData.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl overflow-hidden border border-sand/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Photo Showcase */}
              <div className="relative aspect-[16/10] overflow-hidden bg-sand-light">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-80" />

                {/* Floating Icon Badge */}
                <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md border border-white/50">
                  {item.icon}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-medium text-charcoal group-hover:text-forest transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Pill Tags */}
                <div className="pt-3 border-t border-sand/70 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-sand-cream text-stone-700 border border-sand font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center space-y-2">
          <p className="text-xs text-stone-500 font-light">
            Amenities shown are for reference only. Availability, access, timings and inclusions may vary.
          </p>
          <div>
            <Link
              href="/#properties"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-forest font-semibold hover:underline"
            >
              <span>View property-specific amenities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

