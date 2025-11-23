import React from 'react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FAQ() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-6">
                <h1 className="text-4xl font-serif text-black mb-8">Frequently Asked Questions</h1>
                <div className="prose max-w-none text-gray-600">
                    <h3 className="text-xl font-bold text-black mt-4">Do you offer certified jewellery?</h3>
                    <p>Yes, all our gold and diamond jewellery is BIS Hallmarked and IGI/GIA certified.</p>
                    {/* Add more content as needed */}
                </div>
            </div>
            <Footer />
        </main>
    );
}
