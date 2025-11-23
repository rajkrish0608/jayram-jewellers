'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GoldRateTicker } from '@/components/GoldRateTicker';

export default function GoldRatePage() {
    const [weight, setWeight] = React.useState('');
    const [purity, setPurity] = React.useState('22K Gold');
    const [calculatedPrice, setCalculatedPrice] = React.useState<number | null>(null);

    const [rates, setRates] = React.useState<{ '22K Gold': number; '24K Gold': number; 'Silver': number } | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        const fetchRates = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gold-rates`);
                if (!res.ok) throw new Error('Failed to fetch rates');
                const data = await res.json();
                setRates({
                    '22K Gold': data.gold22k,
                    '24K Gold': data.gold24k,
                    'Silver': data.silver
                });
            } catch (err) {
                console.error(err);
                setError('Failed to load live rates. Using default rates.');
                // Fallback rates
                setRates({
                    '22K Gold': 6850,
                    '24K Gold': 7450,
                    'Silver': 88.50
                });
            } finally {
                setLoading(false);
            }
        };

        fetchRates();
    }, []);

    const handleCalculate = () => {
        const w = parseFloat(weight);
        if (!w || isNaN(w) || !rates) return;

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


                    {/* Price Alert Section */}
                    <div className="max-w-3xl mx-auto mt-12 bg-black text-white p-8 rounded-2xl border border-gray-800">
                        <h3 className="font-serif text-2xl mb-6 text-center text-gold">Set Price Alert</h3>
                        <p className="text-center text-gray-400 mb-8">Get notified when gold rate reaches your target price.</p>

                        <form className="grid grid-cols-1 md:grid-cols-3 gap-6" onSubmit={(e) => { e.preventDefault(); alert('Price alert set successfully!'); }}>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Target Rate (₹/10g)</label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:border-gold outline-none"
                                    placeholder="Ex: 65000"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email / Phone</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:border-gold outline-none"
                                    placeholder="Contact info"
                                    required
                                />
                            </div>
                            <div className="flex items-end">
                                <button
                                    type="submit"
                                    className="w-full bg-gold text-black py-3 rounded-lg hover:bg-gold-light transition-colors font-medium"
                                >
                                    Set Alert
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main >
    );
}
