import React from 'react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ReturnPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-6">
                <h1 className="text-4xl font-serif text-black mb-8">Return Policy</h1>
                <div className="prose max-w-none text-gray-600">
                    <p>We want you to be completely satisfied with your purchase. If you are not, please review our return policy below.</p>
                    {/* Add more content as needed */}
                </div>
            </div>
            <Footer />
        </main>
    );
}
