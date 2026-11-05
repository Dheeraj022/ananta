import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import { EnquiryProvider } from "@/components/enquiry/EnquiryContext";
import EnquiryModal from "@/components/enquiry/EnquiryModal";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: {
    default: "Ananta Hotels Rajasthan Stays — Independent Travel Partner",
    template: "%s | Ananta Hotels Partner",
  },
  description: siteConfig.description,
  keywords: [
    "Ananta Udaipur",
    "Ananta Pushkar",
    "Ananta Ajabgarh",
    "Ananta Jaipur",
    "Rajasthan luxury resort stay enquiry",
    "Independent travel partner Ananta",
  ],
  metadataBase: new URL("https://ananta-hotels-partner.vercel.app"),
  openGraph: {
    title: "Ananta Hotels Rajasthan Stays — Independent Travel Partner",
    description: siteConfig.description,
    url: "https://ananta-hotels-partner.vercel.app",
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-charcoal font-sans antialiased selection:bg-sand selection:text-forest">
        <EnquiryProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <EnquiryModal />
          <FloatingWhatsApp />
        </EnquiryProvider>
      </body>
    </html>
  );
}
