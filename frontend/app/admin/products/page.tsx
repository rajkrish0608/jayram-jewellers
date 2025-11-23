'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

// Mock Data
const PRODUCTS = [
    { id: '1', name: 'Royal Kundan Necklace', category: 'Necklaces', price: 150000, stock: 5 },
    { id: '2', name: 'Diamond Solitaire Ring', category: 'Rings', price: 45000, stock: 12 },
    { id: '3', name: 'Traditional Gold Jhumka', category: 'Earrings', price: 65000, stock: 8 },
];

export default function AdminProductsPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Product Manager</h1>
                <Link href="/admin/products/new">
                    <Button variant="primary" size="sm">
                        + Add New Product
                    </Button>
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50">
                        <tr className="text-gray-500 text-sm uppercase tracking-wider">
                            <th className="px-6 py-4 font-medium">Product Name</th>
                            <th className="px-6 py-4 font-medium">Category</th>
                            <th className="px-6 py-4 font-medium">Price</th>
                            <th className="px-6 py-4 font-medium">Stock</th>
                            <th className="px-6 py-4 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {PRODUCTS.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-800">{product.name}</td>
                                <td className="px-6 py-4 text-gray-600">{product.category}</td>
                                <td className="px-6 py-4 text-gray-600">₹{product.price.toLocaleString()}</td>
                                <td className="px-6 py-4 text-gray-600">{product.stock}</td>
                                <td className="px-6 py-4 space-x-2">
                                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">Edit</button>
                                    <button className="text-red-600 hover:text-red-800 font-medium text-sm">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
