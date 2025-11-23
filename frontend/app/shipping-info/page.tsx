import React from 'react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ShippingInfo() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-6">
                <h1 className="text-4xl font-serif text-black mb-8">Shipping Information</h1>
                <div className="prose max-w-none text-gray-600">
                    <p>We offer secure and insured shipping for all our jewellery products. Learn more about our shipping partners and delivery times.</p>
                    {/* Add more content as needed */}
                </div>
            </div>
            <Footer />
        </main>
    );
}
