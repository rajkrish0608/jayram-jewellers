'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

import AdminGuard from '@/components/AdminGuard';

export default function AdminProductsPage() {
    const [products, setProducts] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);

    const fetchProducts = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this product?')) return;

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                fetchProducts(); // Refresh list
            } else {
                alert('Failed to delete product');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <AdminGuard>
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
                    {loading ? (
                        <div className="p-8 text-center text-gray-500">Loading products...</div>
                    ) : (
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
                                {products.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-8 text-center text-gray-500">No products found. Add one to get started.</td>
                                    </tr>
                                ) : (
                                    products.map((product) => (
                                        <tr key={product._id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-gray-800">{product.name}</td>
                                            <td className="px-6 py-4 text-gray-600">{product.category}</td>
                                            <td className="px-6 py-4 text-gray-600">₹{product.price.toLocaleString()}</td>
                                            <td className="px-6 py-4 text-gray-600">{product.countInStock || 0}</td>
                                            <td className="px-6 py-4 space-x-2">
                                                <Link href={`/admin/products/${product._id}`}>
                                                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">Edit</button>
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(product._id)}
                                                    className="text-red-600 hover:text-red-800 font-medium text-sm"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </AdminGuard>
    );
}
