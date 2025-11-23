'use client';

import React from 'react';

// Mock Data
const INQUIRIES = [
    { id: 1, name: 'Rahul Sharma', phone: '+91 98765 43210', message: 'I am interested in the Diamond Solitaire Ring. Is it available in size 7?', date: 'Nov 22, 2023', status: 'New' },
    { id: 2, name: 'Priya Patel', phone: '+91 98765 43211', message: 'Do you have any EMI options available for bridal sets?', date: 'Nov 21, 2023', status: 'Contacted' },
    { id: 3, name: 'Amit Singh', phone: '+91 98765 43212', message: 'Looking for a custom design for a gold pendant.', date: 'Nov 20, 2023', status: 'Closed' },
];

import AdminGuard from '@/components/AdminGuard';

export default function InquiriesPage() {
    return (
        <AdminGuard>
            <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Inquiries & Alerts</h1>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50">
                            <tr className="text-gray-500 text-sm uppercase tracking-wider">
                                <th className="px-6 py-4 font-medium">Customer</th>
                                <th className="px-6 py-4 font-medium">Message</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {INQUIRIES.map((inquiry) => (
                                <tr key={inquiry.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-800">{inquiry.name}</p>
                                        <p className="text-sm text-gray-500">{inquiry.phone}</p>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 max-w-xs truncate">{inquiry.message}</td>
                                    <td className="px-6 py-4 text-gray-500 text-sm">{inquiry.date}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${inquiry.status === 'New' ? 'bg-green-100 text-green-700' :
                                            inquiry.status === 'Contacted' ? 'bg-blue-100 text-blue-700' :
                                                'bg-gray-100 text-gray-700'
                                            }`}>
                                            {inquiry.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-gold hover:text-gold-light font-medium text-sm">View Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminGuard>
    );
}
