import React from "react";
import SectionHeading from "../common/SectionHeading";
import { Mountain, Tent, Waves, Sparkles } from "lucide-react";

const highlights = [
  {
    title: "Aravalli Hillside Living",
    property: "The Ananta Udaipur",
    description:
      "Villas perched along 40 acres of green hillside, offering open-to-sky garden bathrooms, private balconies, and mountain views.",
    icon: <Mountain className="w-6 h-6 text-gold" />,
  },
  {
    title: "Tented Desert Sanctuaries",
    property: "Ananta Spa & Resort Pushkar",
    description:
      "Canopied luxury tents with handcrafted wooden interiors and private sit-outs framed by palm courtyards and desert hills.",
    icon: <Tent className="w-6 h-6 text-gold" />,
  },
  {
    title: "Private Pool Hideaways",
    property: "Ananta Spa & Resort Ajabgarh",
    description:
      "Boutique privacy with standalone stone villas featuring personal splash pools, secluded courtyards, and starlit valley skies.",
    icon: <Waves className="w-6 h-6 text-gold" />,
  },
  {
    title: "Palatial Rajputana Grandeur",
    property: "Ananta Spa & Resort Jaipur",
    description:
      "Classical Rajasthani architectural arches, expansive courtyards, grand banquet venues, and convenient proximity to Amer Fort.",
    icon: <Sparkles className="w-6 h-6 text-gold" />,
  },
];

export default function HighlightsSection() {
  return (
    <section className="py-20 bg-charcoal text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Distinct Settings"
          title="Factual Architectural & Setting Highlights"
          subtitle="Each property reflects its geographic surroundings, offering distinct structural designs and accommodation formats."
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-charcoal-dark border border-stone-800 hover:border-gold/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-stone-800/80 flex items-center justify-center mb-5 border border-stone-700">
                  {item.icon}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-gold font-semibold mb-1">
                  {item.property}
                </div>
                <h3 className="font-serif text-xl font-light text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

