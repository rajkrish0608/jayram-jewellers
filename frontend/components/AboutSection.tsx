import React from 'react';
import { Button } from './ui/Button';

export const AboutSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=1976&auto=format&fit=crop")' }}
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-gold text-lg uppercase tracking-widest mb-2">Our Story</h2>
                        <h3 className="text-4xl md:text-5xl font-serif text-black mb-6">A Legacy of Trust & Elegance</h3>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Founded by Aman Verma, Jayram Jewellers has been a beacon of purity and craftsmanship for over three decades. We believe that every piece of jewellery tells a story, and we are honored to be a part of yours.
                        </p>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            From traditional designs passed down through generations to contemporary masterpieces, our collection reflects the perfect blend of heritage and modernity.
                        </p>
                        <Button variant="primary">Visit Us Today</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
