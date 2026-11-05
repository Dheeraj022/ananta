export const siteConfig = {
  name: "Rajasthan Luxury Retreats — Independent Partner",
  shortTitle: "Ananta Resorts Partner Stays",
  description:
    "Explore four premier Ananta hotel properties across Rajasthan: Udaipur, Pushkar, Ajabgarh, and Jaipur. Dedicated travel partner assisting with bespoke stay enquiries and retreat planning.",
  partnerDisclosure:
    "We are an independent travel partner providing property information and assisting visitors with stay enquiries. We are not the official website of Ananta Hotels. Property names, descriptions, and images are used for identification and informational purposes, subject to applicable permissions. Enquiry submission does not confirm a booking or guarantee availability.",
  shortDisclosure:
    "Independent Travel Partner • Property Discovery & Enquiry Concierge Only • Not the Official Ananta Hotels Website",
  bookingNotice:
    "Submitting an enquiry does not confirm a booking or guarantee room availability. All requests are subject to confirmation through the relevant property or booking channel.",
  contact: {
    phone: "+91 98765 43210 (Enquiry Desk)",
    phoneRaw: "+919876543210",
    email: "stay-enquiries@luxuryretreatspartner.com",
    hours: "Monday – Saturday: 9:00 AM – 8:00 PM IST",
    address: "Concierge Operations Desk, Travel Partner Network, Rajasthan, India",
    isPlaceholder: true, // Marked for client verification
  },
  navigation: [
    { label: "Home", href: "/" },
    {
      label: "Our Properties",
      href: "#properties",
      children: [
        { label: "The Ananta Udaipur", href: "/properties/the-ananta-udaipur" },
        { label: "Ananta Spa & Resort Pushkar", href: "/properties/ananta-spa-resort-pushkar" },
        { label: "Ananta Spa & Resort Ajabgarh", href: "/properties/ananta-spa-resort-ajabgarh" },
        { label: "Ananta Spa & Resort Jaipur", href: "/properties/ananta-spa-resort-jaipur" },
      ],
    },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  footerLinks: {
    properties: [
      { label: "The Ananta Udaipur", href: "/properties/the-ananta-udaipur" },
      { label: "Ananta Spa & Resort Pushkar", href: "/properties/ananta-spa-resort-pushkar" },
      { label: "Ananta Spa & Resort Ajabgarh", href: "/properties/ananta-spa-resort-ajabgarh" },
      { label: "Ananta Spa & Resort Jaipur", href: "/properties/ananta-spa-resort-jaipur" },
    ],
    company: [
      { label: "About Our Partner Service", href: "/about" },
      { label: "Contact Concierge Desk", href: "/contact" },
      { label: "Enquiry Guide", href: "/#enquiry" },
    ],
    legal: [
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
  whyExploreWithUs: [
    {
      title: "Focused Property Insights",
      description:
        "Detailed overviews of accommodations, amenities, and resort surroundings to help you choose the ideal retreat.",
      icon: "Compass",
    },
    {
      title: "Tailored Enquiry Assistance",
      description:
        "Our dedicated team reviews your stay preferences, group sizes, and dates to guide your enquiry to the right resort channel.",
      icon: "UserCheck",
    },
    {
      title: "Transparent & Respectful",
      description:
        "Clear guidance without high-pressure tactics or misleading claims. We provide factual details for a smooth planning experience.",
      icon: "ShieldCheck",
    },
    {
      title: "Multi-Property Knowledge",
      description:
        "Comparing Udaipur's lush hills, Pushkar's desert charm, Ajabgarh's secluded valley, and Jaipur's regal grandeur in one place.",
      icon: "Layers",
    },
  ],
};

