'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ProductCard, Product } from '@/components/ProductCard';

// Mock Data - Replace with API call later
const PRODUCTS: Product[] = [
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

const CATEGORIES = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bangles', 'Bridal Sets', 'Accessories'];

export default function ShopPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [priceRange, setPriceRange] = useState(500000);

    const filteredProducts = PRODUCTS.filter(product => {
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
        const matchesPrice = product.price <= priceRange;
        return matchesCategory && matchesPrice;
    });

    return (
        <main className="min-h-screen bg-off-white">
            <Navbar />

            {/* Header */}
            <div className="bg-black text-white pt-32 pb-12 px-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Collections</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">Explore our exquisite range of handcrafted jewellery, designed to make every moment special.</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
                {/* Sidebar Filters */}
                <aside className="w-full lg:w-1/4 space-y-8">
                    <div>
                        <h3 className="text-xl font-serif mb-4 border-b border-gray-200 pb-2">Categories</h3>
                        <ul className="space-y-3">
                            {CATEGORIES.map(category => (
                                <li key={category}>
                                    <button
                                        onClick={() => setActiveCategory(category)}
                                        className={`text-sm uppercase tracking-wider transition-colors ${activeCategory === category ? 'text-gold font-bold' : 'text-gray-600 hover:text-black'}`}
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-serif mb-4 border-b border-gray-200 pb-2">Price Range</h3>
                        <input
                            type="range"
                            min="0"
                            max="500000"
                            step="1000"
                            value={priceRange}
                            onChange={(e) => setPriceRange(Number(e.target.value))}
                            className="w-full accent-gold"
                        />
                        <div className="flex justify-between text-sm text-gray-600 mt-2">
                            <span>₹0</span>
                            <span>₹{priceRange.toLocaleString()}</span>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="w-full lg:w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
