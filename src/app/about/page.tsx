import React from "react";
import { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Guest-Assist — Independent Travel Agency",
  description:
    "Learn about Guest-Assist, an independent travel agency operated by Hello My Trip Private Limited, providing travel information and enquiry assistance for selected Ananta properties across Rajasthan.",
};

export default function AboutPage() {
  return <AboutContent />;
}

