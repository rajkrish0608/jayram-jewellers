'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export default function AddProductPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        category: 'Rings',
        price: '',
        weight: '',
        description: '',
        image: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Product Data:', formData);
        // Add API call here
        router.push('/admin/products');
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>
                <Button variant="outline" size="sm" onClick={() => router.back()} className="!text-gray-600 !border-gray-300 hover:!bg-gray-100">
                    Cancel
                </Button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
                            <input
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none text-black bg-white"
                                placeholder="Ex: Diamond Solitaire Ring"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none bg-white text-black"
                            >
                                {['Rings', 'Necklaces', 'Earrings', 'Bangles', 'Bridal Sets', 'Accessories'].map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Price (₹)</label>
                            <input
                                name="price"
                                type="number"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none text-black bg-white"
                                placeholder="45000"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Weight (g)</label>
                            <input
                                name="weight"
                                type="number"
                                step="0.01"
                                value={formData.weight}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none text-black bg-white"
                                placeholder="3.5"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                        <textarea
                            name="description"
                            rows={4}
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none text-black bg-white"
                            placeholder="Detailed product description..."
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
                        <input
                            name="image"
                            type="url"
                            value={formData.image}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none text-black bg-white"
                            placeholder="https://example.com/image.jpg"
                            required
                        />
                        <p className="text-xs text-gray-500 mt-1">Enter a direct link to the image.</p>
                    </div>

                    <div className="pt-4">
                        <Button variant="primary" className="w-full py-3">
                            Create Product
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
