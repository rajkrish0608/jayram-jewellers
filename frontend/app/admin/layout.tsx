'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        const adminInfo = localStorage.getItem('adminInfo');
        if (!adminInfo) {
            router.push('/admin/login');
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('adminInfo');
        router.push('/admin/login');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className={`bg-black text-white w-64 flex-shrink-0 transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'} fixed md:relative z-30 h-full flex flex-col`}>
                <div className="p-6 border-b border-gray-800 flex justify-between items-center flex-none">
                    <h2 className="text-xl font-serif text-gold">Admin Panel</h2>
                    <button onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-400 hover:text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
                    <Link href="/admin/dashboard" className="block px-4 py-3 rounded hover:bg-gray-800 text-gray-300 hover:text-white transition-colors">
                        Dashboard Overview
                    </Link>
                    <Link href="/admin/products" className="block px-4 py-3 rounded hover:bg-gray-800 text-gray-300 hover:text-white transition-colors">
                        Product Manager
                    </Link>
                    <Link href="/admin/gold-rates" className="block px-4 py-3 rounded hover:bg-gray-800 text-gray-300 hover:text-white transition-colors">
                        Gold Rate Manager
                    </Link>
                    <Link href="/admin/inquiries" className="block px-4 py-3 rounded hover:bg-gray-800 text-gray-300 hover:text-white transition-colors">
                        Inquiries & Alerts
                    </Link>
                </nav>

                <div className="p-4 border-t border-gray-800 flex-none">
                    <button onClick={handleLogout} className="w-full flex items-center justify-center px-4 py-2 text-red-400 hover:bg-red-900/20 rounded transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
                <header className="bg-white shadow-sm p-4 flex justify-between items-center md:hidden">
                    <button onClick={() => setSidebarOpen(true)} className="text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                    <span className="font-serif text-gold font-bold">JAYRAM JEWELLERS</span>
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
