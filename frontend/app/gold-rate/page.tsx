'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GoldRateTicker } from '@/components/GoldRateTicker';

export default function GoldRatePage() {
    const [weight, setWeight] = React.useState('');
    const [purity, setPurity] = React.useState('22K Gold');
    const [calculatedPrice, setCalculatedPrice] = React.useState<number | null>(null);

    // Mock rates matching the ticker
    const rates = {
        '22K Gold': 6850,
        '24K Gold': 7450,
        'Silver': 88.50
    };

    const handleCalculate = () => {
        const w = parseFloat(weight);
        if (!w || isNaN(w)) return;

        const rate = rates[purity as keyof typeof rates];
        setCalculatedPrice(w * rate);
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-20">
                <div className="container mx-auto px-6 mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-black mb-4">Live Gold Rates</h1>
                    <p className="text-gray-600">Real-time updates for 22K, 24K Gold and Silver.</p>
                </div>

                <GoldRateTicker />

                <div className="container mx-auto px-6 mt-20">
                    <div className="max-w-3xl mx-auto bg-off-white p-8 rounded-2xl border border-gray-100">
                        <h3 className="font-serif text-2xl text-black mb-6 text-center">Rate Calculator</h3>
                        <p className="text-center text-gray-500 mb-8">Estimate the price of your jewellery based on current rates.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Weight (grams)</label>
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold outline-none text-black bg-white"
                                    placeholder="Enter weight"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Purity</label>
                                <select
                                    value={purity}
                                    onChange={(e) => setPurity(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold outline-none bg-white text-black"
                                >
                                    <option value="22K Gold">22K Gold</option>
                                    <option value="24K Gold">24K Gold</option>
                                    <option value="Silver">Silver</option>
                                </select>
                            </div>
                        </div>

                        {calculatedPrice !== null && (
                            <div className="mt-6 p-4 bg-gold/10 rounded-lg text-center">
                                <p className="text-gray-600 mb-1">Estimated Price</p>
                                <p className="text-3xl font-serif text-gold font-bold">₹{calculatedPrice.toLocaleString()}</p>
                            </div>
                        )}

                        <button
                            onClick={handleCalculate}
                            className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors"
                        >
                            Calculate Price
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
