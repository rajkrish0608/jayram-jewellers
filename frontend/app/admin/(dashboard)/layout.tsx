'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
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
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className={`bg-black text-white w-64 flex-shrink-0 transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'} fixed md:relative z-30 h-screen flex flex-col`}>
                <div className="p-6 border-b border-gray-800 flex justify-between items-center flex-none">
                    <div>
                        <h2 className="text-xl font-serif text-amber-400 font-bold tracking-wide">JAYRAM JEWELLERS</h2>
                        <p className="text-gray-400 text-xs mt-0.5">Admin Management</p>
                    </div>
                    <button onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-400 hover:text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
                    <Link 
                        href="/admin/gold-rates" 
                        className={`flex items-center px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                            pathname === '/admin/gold-rates' || pathname === '/admin/dashboard'
                                ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20' 
                                : 'text-gray-300 hover:bg-gray-900 hover:text-white'
                        }`}
                    >
                        <svg className="w-5 h-5 mr-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Gold Rate Manager
                    </Link>

                    <Link 
                        href="/" 
                        target="_blank"
                        className="flex items-center px-4 py-3 rounded-xl font-medium text-sm text-gray-400 hover:bg-gray-900 hover:text-white transition-all"
                    >
                        <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Live Website ↗
                    </Link>
                </nav>

                <div className="p-4 border-t border-gray-800 flex-none">
                    <button onClick={handleLogout} className="w-full flex items-center justify-center px-4 py-2.5 text-red-400 hover:bg-red-950/30 rounded-xl transition-colors text-sm font-medium">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
                <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center md:hidden">
                    <button onClick={() => setSidebarOpen(true)} className="text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                    <span className="font-serif text-amber-500 font-bold">JAYRAM JEWELLERS</span>
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6 md:p-10">
                    {children}
                </main>
            </div>
        </div>
    );
}
