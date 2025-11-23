'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AboutSection } from '@/components/AboutSection';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-20">
                <AboutSection />

                <div className="container mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <h3 className="font-serif text-2xl text-gold mb-4">Legacy</h3>
                            <p className="text-gray-600">Over 50 years of trust and tradition in crafting exquisite jewellery.</p>
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl text-gold mb-4">Craftsmanship</h3>
                            <p className="text-gray-600">Master artisans dedicated to creating timeless masterpieces.</p>
                        </div>
                        <div>
                            <h3 className="font-serif text-2xl text-gold mb-4">Purity</h3>
                            <p className="text-gray-600">100% BIS Hallmarked gold and certified diamonds.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
