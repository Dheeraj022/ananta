import React from "react";
import { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Guest-assist — Independent Travel Partner",
  description:
    "Learn about Guest-assist, an independent travel partner connecting discerning guests with four exceptional Ananta resort properties across Rajasthan.",
};

export default function AboutPage() {
  return <AboutContent />;
}

