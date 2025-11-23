'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export const GoldRateTicker = () => {
    const [rates, setRates] = useState({
        gold22k: 6850,
        gold24k: 7450,
        silver: 88.50
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gold-rates`);
                if (!res.ok) throw new Error('Failed to fetch rates');
                const data = await res.json();
                setRates({
                    gold22k: data.gold22k,
                    gold24k: data.gold24k,
                    silver: data.silver
                });
            } catch (err) {
                console.error('Failed to fetch ticker rates:', err);
            }
        };

        fetchRates();
        // Refresh every minute
        const interval = setInterval(fetchRates, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-12 bg-black border-y border-gold/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-gold text-lg uppercase tracking-widest mb-2">Live Market Rates</h3>
                        <p className="text-gray-400 text-sm">Updated every few seconds</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="text-center">
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Gold 22K (1g)</p>
                            <p className="text-3xl font-serif text-white">₹{rates.gold22k.toLocaleString()}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Gold 24K (1g)</p>
                            <p className="text-3xl font-serif text-gold">₹{rates.gold24k.toLocaleString()}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Silver (1g)</p>
                            <p className="text-3xl font-serif text-gray-300">₹{rates.silver.toFixed(2)}</p>
                        </div>
                    </div>

                    <Button variant="outline" size="sm" className="whitespace-nowrap">
                        Set Price Alert
                    </Button>
                </div>
            </div>
        </section>
    );
};
