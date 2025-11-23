import React from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';

export const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image Placeholder - Replace with actual image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop")',
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-0">
                <h2 className="text-gold text-lg md:text-xl uppercase tracking-[0.3em] mb-4 animate-fade-in-up">
                    Welcome to JAYRAM Jewellers
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight max-w-4xl animate-fade-in-up delay-100">
                    Exquisite Jewellery for <br />
                    <span className="italic text-gold-light">Every Occasion</span>
                </h1>
                <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-10 font-light animate-fade-in-up delay-200">
                    Discover our timeless collection of handcrafted gold, diamond, and silver masterpieces designed to celebrate your most precious moments.
                </p>

                <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up delay-300">
                    <Link href="/shop">
                        <Button variant="primary" size="lg">View Collection</Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg">Book Appointment</Button>
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};
