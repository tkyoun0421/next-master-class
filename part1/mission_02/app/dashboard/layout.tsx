"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-4 border-r">
        <h1 className="text-xl font-bold mb-4">Dev Dashboard</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">검색:</label>
          <input 
            type="text" 
            placeholder="Next.js 최고!" 
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <nav className="flex flex-col gap-2">
          <span className="font-medium text-gray-700">메뉴:</span>
          <Link href="/dashboard" className="text-blue-600 hover:underline">
            {pathname === '/dashboard' ? '👉' : '-'} 홈 (Overview)
          </Link>
          <Link href="/dashboard/settings" className="text-blue-600 hover:underline">
            {pathname === '/dashboard/settings' ? '👉' : '-'} 설정 (Settings)
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
