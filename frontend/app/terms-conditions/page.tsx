import React from 'react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsConditions() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-20 container mx-auto px-6">
                <h1 className="text-4xl font-serif text-black mb-8">Terms & Conditions</h1>
                <div className="prose max-w-none text-gray-600">
                    <p>Welcome to Jayram Jewellers. By using our website, you agree to comply with and be bound by the following terms and conditions.</p>
                    {/* Add more content as needed */}
                </div>
            </div>
            <Footer />
        </main>
    );
}
