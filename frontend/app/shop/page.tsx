'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ProductCard, Product } from '@/components/ProductCard';



const CATEGORIES = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bangles', 'Bridal Sets', 'Accessories'];

export default function ShopPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');
    const [priceRange, setPriceRange] = useState(500000);

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
                const data = await res.json();
                // Map _id to id for frontend compatibility if needed, or just use _id
                const mappedData = data.map((p: any) => ({
                    id: p._id,
                    name: p.name,
                    type: p.type,
                    price: p.price || 0, // Handle optional price
                    weight: p.weight,
                    category: p.category,
                    image: p.image
                }));
                setProducts(mappedData);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
        const matchesPrice = (product.price || 0) <= priceRange;
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
