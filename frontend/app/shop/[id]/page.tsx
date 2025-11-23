'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';

// Mock Data - Replace with API call later
const PRODUCTS = [
    {
        id: '1',
        name: 'Royal Kundan Necklace',
        type: 'Necklace',
        price: 150000,
        weight: 25.5,
        category: 'Necklaces',
        description: 'A masterpiece of traditional craftsmanship, this Royal Kundan Necklace features intricate detailing and premium quality stones set in 22K gold. Perfect for weddings and special occasions.',
        image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1974&auto=format&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop', // Placeholder
            'https://images.unsplash.com/photo-1635767798638-3e2523c96d27?q=80&w=1976&auto=format&fit=crop'  // Placeholder
        ]
    },
    // ... other products (using same mock data for demo)
];

export default function ProductDetailsPage() {
    const params = useParams();
    const product = PRODUCTS.find(p => p.id === params.id) || PRODUCTS[0]; // Fallback for demo

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Image Gallery */}
                    <div className="w-full lg:w-1/2 space-y-4">
                        <div className="aspect-square w-full rounded-2xl overflow-hidden bg-gray-100">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {product.images.map((img, idx) => (
                                <div key={idx} className="aspect-square rounded-lg overflow-hidden cursor-pointer border border-transparent hover:border-gold transition-all">
                                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-8">
                            <span className="text-gold text-sm uppercase tracking-widest">{product.category}</span>
                            <h1 className="text-4xl md:text-5xl font-serif text-black mt-2 mb-4">{product.name}</h1>
                            <p className="text-3xl font-light text-gray-900">Price on Request</p>
                        </div>

                        <div className="space-y-6 mb-10">
                            <p className="text-gray-600 leading-relaxed">{product.description}</p>

                            <div className="grid grid-cols-2 gap-6 p-6 bg-off-white rounded-xl">
                                <div>
                                    <p className="text-gray-500 text-sm mb-1">Purity</p>
                                    <p className="font-medium">22K Gold</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm mb-1">Weight</p>
                                    <p className="font-medium">{product.weight}g</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm mb-1">Certification</p>
                                    <p className="font-medium">BIS Hallmarked</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm mb-1">Availability</p>
                                    <p className="text-green-600 font-medium">In Stock</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="primary" size="lg" className="flex-1">
                                Add to Cart
                            </Button>
                            <Button variant="secondary" size="lg" className="flex-1">
                                Book Appointment
                            </Button>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <h4 className="font-serif text-lg mb-4">Why Buy From Us?</h4>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    100% Certified Jewellery
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Lifetime Exchange & Buyback
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Free Insured Shipping
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
