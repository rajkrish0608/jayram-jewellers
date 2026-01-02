'use client';

import React from 'react';

import AdminGuard from '@/components/AdminGuard';

export default function AdminDashboardPage() {
    const [stats, setStats] = React.useState({
        products: 0,
        inquiries: 0,
        goldRate18k: 0
    });

    React.useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch Products Count
                const prodRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
                const products = await prodRes.json();

                // Fetch Gold Rate
                const rateRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gold-rates`);
                const rates = await rateRes.json();

                setStats({
                    products: products.length || 0,
                    inquiries: 45, // Mock for now
                    goldRate18k: rates.gold18k || 0
                });
            } catch (error) {
                console.error('Failed to fetch dashboard stats:', error);
            }
        };

        fetchStats();
    }, []);

    return (
        <AdminGuard>
            <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-gray-500 text-sm uppercase tracking-wider">Total Products</h3>
                            <span className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                            </span>
                        </div>
                        <p className="text-3xl font-bold text-gray-800">{stats.products}</p>
                        <p className="text-green-500 text-sm mt-2 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            Live Count
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-gray-500 text-sm uppercase tracking-wider">Inquiries</h3>
                            <span className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                            </span>
                        </div>
                        <p className="text-3xl font-bold text-gray-800">{stats.inquiries}</p>
                        <p className="text-green-500 text-sm mt-2 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            +5 new today
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-gray-500 text-sm uppercase tracking-wider">Gold Rate (18K)</h3>
                            <div className="p-3 bg-yellow-50 rounded-full">
                                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-3xl font-bold text-gray-800">₹{stats.goldRate18k.toLocaleString()}</p>
                            <p className="text-gray-500 text-sm mt-2 flex items-center">
                                Live Rate
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Inquiries</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-gray-200 text-gray-500 text-sm">
                                    <th className="pb-3 font-medium">Name</th>
                                    <th className="pb-3 font-medium">Phone</th>
                                    <th className="pb-3 font-medium">Message</th>
                                    <th className="pb-3 font-medium">Status</th>
                                    <th className="pb-3 font-medium">Date</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {[1, 2, 3].map((i) => (
                                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-4 font-medium text-gray-800">Customer {i}</td>
                                        <td className="py-4 text-gray-600">+91 93418 4799{i}</td>
                                        <td className="py-4 text-gray-600">Interested in the diamond ring...</td>
                                        <td className="py-4">
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">New</span>
                                        </td>
                                        <td className="py-4 text-gray-500">Nov {20 + i}, 2023</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminGuard>
    );
}
