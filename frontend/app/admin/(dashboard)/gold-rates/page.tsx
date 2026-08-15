'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import AdminGuard from '@/components/AdminGuard';

export default function GoldRateManagerPage() {
    const [rates, setRates] = useState({
        gold18k: 5500,
        gold24k: 7450,
        silver: 88.50
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
    const [lastUpdated, setLastUpdated] = useState<string>('Just now');

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}/api/gold-rates` : '/api/gold-rates';
                const res = await fetch(apiUrl);
                if (res.ok) {
                    const data = await res.json();
                    setRates({
                        gold18k: data.gold18k || 5500,
                        gold24k: data.gold24k || 7450,
                        silver: data.silver || 88.50
                    });
                    if (data.updatedAt) {
                        setLastUpdated(new Date(data.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
                    }
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
        setSaving(true);
        setStatusMessage(null);

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}/api/gold-rates` : '/api/gold-rates';
            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(rates)
            });

            if (res.ok) {
                const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                setLastUpdated(now);
                setStatusMessage({ type: 'success', text: 'Gold & Silver rates updated successfully!' });
            } else {
                throw new Error('Failed to update rates');
            }
        } catch (error) {
            setStatusMessage({ type: 'error', text: 'Failed to save rates. Please check network connection.' });
            console.error(error);
        } finally {
            setSaving(false);
        }
    };

    return (
        <AdminGuard>
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-serif font-bold text-gray-900">Gold & Silver Rate Manager</h1>
                        <p className="text-gray-500 text-sm mt-1">Manage live daily prices displayed across the store and website ticker.</p>
                    </div>
                </div>

                {statusMessage && (
                    <div className={`mb-6 p-4 rounded-xl text-sm font-medium flex items-center justify-between ${
                        statusMessage.type === 'success' 
                            ? 'bg-green-50 text-green-800 border border-green-200' 
                            : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                        <span>{statusMessage.text}</span>
                        <button onClick={() => setStatusMessage(null)} className="text-gray-400 hover:text-gray-600">×</button>
                    </div>
                )}

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-8">
                    <div className="mb-8 p-4 bg-amber-50/80 border border-amber-200/60 rounded-xl flex items-start">
                        <svg className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <h4 className="text-amber-900 font-semibold text-sm">Live Market Price Sync</h4>
                            <p className="text-amber-800/90 text-xs mt-1 leading-relaxed">
                                Rates updated here reflect immediately on the customer-facing ticker, gold rate calculator, and live market displays.
                            </p>
                        </div>
                    </div>

                    {loading ? (
                        <div className="py-12 text-center text-gray-400 text-sm">Loading current rates...</div>
                    ) : (
                        <form onSubmit={handleUpdate} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                                        Gold 18K <span className="text-gray-400 font-normal">(per gram)</span>
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-3.5 text-gray-400 font-medium">₹</span>
                                        <input
                                            name="gold18k"
                                            type="number"
                                            value={rates.gold18k}
                                            onChange={handleChange}
                                            className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-gray-900 bg-white font-medium text-lg transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                                        Gold 24K <span className="text-gray-400 font-normal">(per gram)</span>
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-3.5 text-amber-500 font-medium">₹</span>
                                        <input
                                            name="gold24k"
                                            type="number"
                                            value={rates.gold24k}
                                            onChange={handleChange}
                                            className="w-full pl-9 pr-4 py-3 rounded-xl border border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-gray-900 bg-white font-semibold text-lg transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2">
                                    Silver <span className="text-gray-400 font-normal">(per gram)</span>
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-3.5 text-gray-400 font-medium">₹</span>
                                    <input
                                        name="silver"
                                        type="number"
                                        step="0.01"
                                        value={rates.silver}
                                        onChange={handleChange}
                                        className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-gray-900 bg-white font-medium text-lg transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <p className="text-xs text-gray-400">
                                    Last synchronized: <span className="text-gray-600 font-medium">{lastUpdated}</span>
                                </p>
                                <Button variant="primary" className="w-full sm:w-auto px-8 py-3 bg-black hover:bg-gray-800 text-white font-medium rounded-xl">
                                    {saving ? 'Updating Rates...' : 'Update Live Rates'}
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </AdminGuard>
    );
}
