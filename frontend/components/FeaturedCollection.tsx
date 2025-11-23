'use client';

import React, { useState } from 'react';
import { ProductCard, Product } from './ProductCard';
import { Button } from './ui/Button';

const CATEGORIES = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bangles', 'Bridal Sets'];

const DUMMY_PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'Royal Kundan Necklace',
        type: 'Necklace',
        price: 150000,
        weight: 25.5,
        category: 'Necklaces',
        image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1974&auto=format&fit=crop'
    },
    {
        id: '2',
        name: 'Diamond Solitaire Ring',
        type: 'Ring',
        price: 45000,
        weight: 3.2,
        category: 'Rings',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: '3',
        name: 'Traditional Gold Jhumka',
        type: 'Earrings',
        price: 65000,
        weight: 12.0,
        category: 'Earrings',
        image: 'https://images.unsplash.com/photo-1635767798638-3e2523c96d27?q=80&w=1976&auto=format&fit=crop'
    },
    {
        id: '4',
        name: 'Antique Gold Bangle',
        type: 'Bangles',
        price: 85000,
        weight: 18.5,
        category: 'Bangles',
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: '5',
        name: 'Bridal Polki Set',
        type: 'Bridal Sets',
        price: 450000,
        weight: 85.0,
        category: 'Bridal Sets',
        image: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=2068&auto=format&fit=crop'
    },
    {
        id: '6',
        name: 'Rose Gold Pendant',
        type: 'Necklace',
        price: 25000,
        weight: 4.5,
        category: 'Necklaces',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop'
    }
];

export const FeaturedCollection = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts = activeCategory === 'All'
        ? DUMMY_PRODUCTS
        : DUMMY_PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <section className="py-20 bg-off-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-gold text-lg uppercase tracking-widest mb-2">Our Collections</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-black mb-8">Featured Masterpieces</h3>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 ${activeCategory === cat
                                        ? 'bg-black text-white shadow-lg'
                                        : 'bg-white text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="text-center">
                    <Button variant="secondary" size="lg">View All Collections</Button>
                </div>
            </div>
        </section>
    );
};
