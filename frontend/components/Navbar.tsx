'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl md:text-3xl font-serif text-gold font-bold tracking-wider">
                    JAYRAM JEWELLERS
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-white hover:text-gold transition-colors text-sm uppercase tracking-widest">Home</Link>
                    <Link href="/shop" className="text-white hover:text-gold transition-colors text-sm uppercase tracking-widest">Collections</Link>
                    <Link href="/gold-rate" className="text-white hover:text-gold transition-colors text-sm uppercase tracking-widest">Gold Rate</Link>
                    <Link href="/blog" className="text-white hover:text-gold transition-colors text-sm uppercase tracking-widest">Blog</Link>
                    <Link href="/about" className="text-white hover:text-gold transition-colors text-sm uppercase tracking-widest">About</Link>
                    <Link href="/contact" className="text-white hover:text-gold transition-colors text-sm uppercase tracking-widest">Contact</Link>

                    <Link href="/contact">
                        <Button variant="primary" size="sm">Book Appointment</Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-gray-800">
                    <div className="flex flex-col p-6 space-y-4">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold transition-colors text-lg uppercase tracking-widest">Home</Link>
                        <Link href="/shop" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold transition-colors text-lg uppercase tracking-widest">Collections</Link>
                        <Link href="/gold-rate" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold transition-colors text-lg uppercase tracking-widest">Gold Rate</Link>
                        <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold transition-colors text-lg uppercase tracking-widest">Blog</Link>
                        <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold transition-colors text-lg uppercase tracking-widest">About</Link>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold transition-colors text-lg uppercase tracking-widest">Contact</Link>

                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                            <Button variant="primary" className="w-full">Book Appointment</Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
