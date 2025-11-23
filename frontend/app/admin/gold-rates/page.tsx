'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function GoldRateManagerPage() {
    const [rates, setRates] = useState({
        gold22k: 6850,
        gold24k: 7450,
        silver: 88.50
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRates({ ...rates, [e.target.name]: Number(e.target.value) });
    };

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Updated Rates:', rates);
        // Add API call here
        alert('Gold rates updated successfully!');
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Gold Rate Manager</h1>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start">
                    <svg className="w-6 h-6 text-yellow-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                        <h4 className="text-yellow-800 font-medium">Important Note</h4>
                        <p className="text-yellow-700 text-sm mt-1">Updating these rates will immediately reflect on the website ticker and product price calculations (if dynamic pricing is enabled).</p>
                    </div>
                </div>

                <form onSubmit={handleUpdate} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Gold 22K (per gram)</label>
                        <div className="relative">
                            <span className="absolute left-4 top-3 text-gray-500">₹</span>
                            <input
                                name="gold22k"
                                type="number"
                                value={rates.gold22k}
                                onChange={handleChange}
                                className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none text-black bg-white"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Gold 24K (per gram)</label>
                        <div className="relative">
                            <span className="absolute left-4 top-3 text-gray-500">₹</span>
                            <input
                                name="gold24k"
                                type="number"
                                value={rates.gold24k}
                                onChange={handleChange}
                                className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none text-black bg-white"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Silver (per gram)</label>
                        <div className="relative">
                            <span className="absolute left-4 top-3 text-gray-500">₹</span>
                            <input
                                name="silver"
                                type="number"
                                step="0.01"
                                value={rates.silver}
                                onChange={handleChange}
                                className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none text-black bg-white"
                                required
                            />
                        </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                        <p className="text-sm text-gray-500">Last updated: Today, 10:30 AM</p>
                        <Button variant="primary" className="px-8">
                            Update Rates
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
