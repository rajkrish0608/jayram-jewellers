import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Jayram Jewellers | Exquisite Jewellery for Every Occasion",
  description: "Discover the finest collection of gold, diamond, and silver jewellery at Jayram Jewellers. Certified purity, lifetime buyback, and custom designs.",
  keywords: "gold jewellery, diamond rings, bridal jewellery, indian jewellers, gold rate, buy gold online",
  openGraph: {
    title: "Jayram Jewellers | Exquisite Jewellery",
    description: "Handcrafted gold and diamond masterpieces for your special moments.",
    url: "https://jayramjewellers.com",
    siteName: "Jayram Jewellers",
    images: [
      {
        url: "https://jayramjewellers.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "name": "Jayram Jewellers",
    "image": "https://jayramjewellers.com/logo.png",
    "description": "Premium jewellery store offering BIS Hallmarked gold, certified diamonds, and silver articles.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123, Jewellery Market, Main Road",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400001",
      "addressCountry": "IN"
    },
    "telephone": "+919876543210",
    "openingHours": "Mo-Sa 10:00-20:00",
    "priceRange": "₹₹₹"
  };

  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
