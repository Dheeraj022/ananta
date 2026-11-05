# Ananta Hotels — Independent Travel Partner Website

A responsive lead-generation and property-discovery web application built for an independent travel partner showcasing four luxury **Ananta** hotel properties in Rajasthan:

1. **The Ananta Udaipur** — Udaipur, Rajasthan
2. **Ananta Spa & Resort Pushkar** — Pushkar, Rajasthan
3. **Ananta Spa & Resort Ajabgarh** — Ajabgarh, Rajasthan
4. **Ananta Spa & Resort Jaipur** — Jaipur, Rajasthan

---

## 🌟 Key Features

- **Brand-Inspired Aesthetic**: High-hospitality visual design based on the Ananta aesthetic, using natural design tokens (Forest Green `#286B4D`, Earth Brown `#70452F`, Warm Beige `#E9DDC5`, Deep Charcoal `#17251F`, and Muted Gold `#C6A66B`) paired with Cormorant Garamond serif headings and Montserrat sans-serif body typography.
- **Aamby Valley Style Accommodation Accordion**: Dedicated compact room browsing with smooth expansion, room image galleries, verified specifications (size, capacity, bed type, view, features), and direct room enquiry triggers.
- **Lead Generation Concierge**: Validated enquiry forms (both embedded and modal) with auto-prefilling of selected properties and room names, check-in/out date validation, bot honeypot protection, and instant reference generation.
- **Clear Independent Partner Disclosures**: Prominent, compliant disclosures on the header banner, introduction section, individual property pages, enquiry forms, and footer.
- **Comprehensive Page Architecture**:
  - `Home` (`/`)
  - `About Us` (`/about`)
  - `Contact Us` (`/contact`)
  - `The Ananta Udaipur` (`/properties/the-ananta-udaipur` & `/the-ananta-udaipur`)
  - `Ananta Spa & Resort Pushkar` (`/properties/ananta-spa-resort-pushkar` & `/ananta-spa-resort-pushkar`)
  - `Ananta Spa & Resort Ajabgarh` (`/properties/ananta-spa-resort-ajabgarh` & `/ananta-spa-resort-ajabgarh`)
  - `Ananta Spa & Resort Jaipur` (`/properties/ananta-spa-resort-jaipur` & `/ananta-spa-resort-jaipur`)
  - `Privacy Policy` (`/privacy-policy`)
  - `Disclaimer` (`/disclaimer`)
  - `Terms & Conditions` (`/terms-and-conditions`)
  - `XML Sitemap` (`/sitemap.xml`) & `Robots.txt` (`/robots.txt`)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, SSG & Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment Ready**: Optimized for Vercel / Node production environments

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
├── ananta_hotels_landing_page_brief.md  # Client development brief
├── src/
│   ├── app/
│   │   ├── api/enquiry/route.ts         # Server-side enquiry validation & handling
│   │   ├── properties/[slug]/page.tsx   # Dedicated property detail pages (SSG)
│   │   ├── about/page.tsx               # About Us page
│   │   ├── contact/page.tsx             # Contact Us page
│   │   ├── disclaimer/page.tsx          # Legal Disclaimer & Independent Partner Notice
│   │   ├── privacy-policy/page.tsx      # Privacy Policy
│   │   ├── terms-and-conditions/page.tsx# Terms & Conditions
│   │   ├── sitemap.ts                   # Dynamic XML sitemap
│   │   ├── robots.ts                    # Robots.txt
│   │   ├── not-found.tsx                # Custom 404 page
│   │   ├── layout.tsx                   # Root layout with fonts, header, footer & modal
│   │   ├── page.tsx                     # Home page
│   │   └── globals.css                  # Global styles & design tokens
│   ├── components/
│   │   ├── common/                      # Header, Footer, PartnerNotice, SectionHeading, Breadcrumbs
│   │   ├── enquiry/                     # EnquiryForm, EnquiryModal, EnquiryContext
│   │   ├── home/                        # Hero, Intro, PropertyCard, PropertyGrid, WhyExplore, Highlights, EnquiryStrip
│   │   └── property/                    # PropertyHero, PropertyOverview, AmenitiesGrid, AccommodationAccordion, RoomImageCarousel, LocationSection
│   ├── data/
│   │   ├── properties.ts                # Structured factual data for all 4 Ananta properties & rooms
│   │   └── site-config.ts               # Site metadata, partner disclosures & contact configuration
│   ├── lib/
│   │   └── utils.ts                     # Utility functions (cn, date formatters)
│   └── types/
│       └── property.ts                  # TypeScript interfaces for properties, rooms & enquiries
└── tailwind.config.ts                   # Custom hospitality palette & typography setup
```

