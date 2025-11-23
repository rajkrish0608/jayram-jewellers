'use client';

import React, { useState, useEffect } from 'react';

const REVIEWS = [
    {
        id: 1,
        name: "Priya Sharma",
        rating: 5,
        text: "Absolutely stunning collection! The craftsmanship is unmatched, and the staff was incredibly helpful in helping me choose my bridal set.",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        id: 2,
        name: "Rahul Mehta",
        rating: 5,
        text: "Trustworthy and transparent. I've been buying gold from Jayram Jewellers for years, and their purity is always 100% guaranteed.",
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        id: 3,
        name: "Anjali Gupta",
        rating: 4,
        text: "Beautiful designs and great service. The custom ring they made for my engagement was exactly what I imagined.",
        image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
];

export const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-off-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-gold text-lg uppercase tracking-widest mb-2">Testimonials</h2>
                <h3 className="text-4xl font-serif text-black mb-12">What Our Clients Say</h3>

                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {REVIEWS.map((review) => (
                                <div key={review.id} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                                        <div className="flex justify-center mb-6">
                                            <img src={review.image} alt={review.name} className="w-20 h-20 rounded-full border-2 border-gold p-1" />
                                        </div>
                                        <div className="flex justify-center mb-4 text-gold">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-600 text-lg italic mb-6">"{review.text}"</p>
                                        <h4 className="text-xl font-serif text-black">{review.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {REVIEWS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-gold w-8' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
