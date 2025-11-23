'use client';

import React from 'react';

import AdminGuard from '@/components/AdminGuard';

export default function AdminInquiriesPage() {
    const [inquiries, setInquiries] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchInquiries = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/inquiries`);
                const data = await res.json();
                setInquiries(data);
            } catch (error) {
                console.error('Failed to fetch inquiries:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchInquiries();
    }, []);

    return (
        <AdminGuard>
            <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Inquiries & Alerts</h1>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    {loading ? (
                        <div className="p-8 text-center text-gray-500">Loading inquiries...</div>
                    ) : (
                        <table className="w-full text-left">
                            <thead className="bg-gray-50">
                                <tr className="text-gray-500 text-sm uppercase tracking-wider">
                                    <th className="px-6 py-4 font-medium">Date</th>
                                    <th className="px-6 py-4 font-medium">Name</th>
                                    <th className="px-6 py-4 font-medium">Email</th>
                                    <th className="px-6 py-4 font-medium">Phone</th>
                                    <th className="px-6 py-4 font-medium">Message</th>
                                    <th className="px-6 py-4 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {inquiries.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-8 text-center text-gray-500">No inquiries found.</td>
                                    </tr>
                                ) : (
                                    inquiries.map((inquiry) => (
                                        <tr key={inquiry._id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-gray-600 text-sm">
                                                {new Date(inquiry.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-800">{inquiry.name}</td>
                                            <td className="px-6 py-4 text-gray-600">{inquiry.email}</td>
                                            <td className="px-6 py-4 text-gray-600">{inquiry.phone}</td>
                                            <td className="px-6 py-4 text-gray-600 max-w-xs truncate" title={inquiry.message}>
                                                {inquiry.message}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${inquiry.status === 'New' ? 'bg-blue-100 text-blue-800' :
                                                        inquiry.status === 'Replied' ? 'bg-green-100 text-green-800' :
                                                            'bg-gray-100 text-gray-800'
                                                    }`}>
                                                    {inquiry.status}
                                                </span>
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
