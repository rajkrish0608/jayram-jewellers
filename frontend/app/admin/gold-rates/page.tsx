'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

import AdminGuard from '@/components/AdminGuard';

export default function GoldRateManagerPage() {
    const [rates, setRates] = useState({
        gold22k: 0,
        gold24k: 0,
        silver: 0
    });
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        const fetchRates = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gold-rates`);
                if (res.ok) {
                    const data = await res.json();
                    setRates({
                        gold22k: data.gold22k,
                        gold24k: data.gold24k,
                        silver: data.silver
                    });
                }
            } catch (error) {
                console.error('Failed to fetch rates:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchRates();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRates({ ...rates, [e.target.name]: Number(e.target.value) });
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gold-rates`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(rates)
            });

            if (res.ok) {
                alert('Gold rates updated successfully!');
            } else {
                throw new Error('Failed to update');
            }
        } catch (error) {
            alert('Error updating rates');
            console.error(error);
        }
    };

    return (
        <AdminGuard>
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
        </AdminGuard>
    );
}
