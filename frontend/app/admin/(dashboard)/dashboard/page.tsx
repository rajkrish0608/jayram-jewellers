'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboardPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/admin/gold-rates');
    }, [router]);

    return (
        <div className="flex items-center justify-center min-h-[50vh]">
            <p className="text-gray-400 text-sm">Redirecting to Gold Rate Manager...</p>
        </div>
    );
}
