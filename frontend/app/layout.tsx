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
  title: "JAYRAM Jewellers | Exquisite Jewellery for Every Occasion",
  description: "Discover the finest collection of gold, diamond, and silver jewellery at JAYRAM Jewellers. Certified purity, lifetime buyback, and custom designs.",
  keywords: "gold jewellery, diamond rings, bridal jewellery, indian jewellers, gold rate, buy gold online",
  openGraph: {
    title: "JAYRAM Jewellers | Exquisite Jewellery",
    description: "Handcrafted gold and diamond masterpieces for your special moments.",
    url: "https://jayramjewellers.com",
    siteName: "JAYRAM Jewellers",
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
    "name": "JAYRAM Jewellers",
    "image": "https://jayramjewellers.com/logo.png",
    "description": "Premium jewellery store offering BIS Hallmarked gold, certified diamonds, and silver articles.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gola Road, Garh Nokha",
      "addressLocality": "Sasaram",
      "addressRegion": "Bihar",
      "postalCode": "802215",
      "addressCountry": "IN"
    },
    "telephone": "+919341847997",
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
