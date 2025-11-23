import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { FeaturedCollection } from "@/components/FeaturedCollection";
import { GoldRateTicker } from "@/components/GoldRateTicker";
import { AboutSection } from "@/components/AboutSection";
import { Testimonials } from "@/components/Testimonials";
import { BlogPreview } from "@/components/BlogPreview";
import { ContactSection } from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <FeaturedCollection />
      <GoldRateTicker />
      <AboutSection />
      <Testimonials />
      <BlogPreview />
      <ContactSection />
      <Footer />
    </main>
  );
}
