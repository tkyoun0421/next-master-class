"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState("");

  const tabs = [
    { name: "프로필", href: "/mypage" },
    { name: "주문 내역", href: "/mypage/orders" },
    { name: "위시리스트", href: "/mypage/wishlist" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
          <h1 className="text-3xl font-bold mb-6 tracking-tight">마이페이지</h1>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="relative w-full sm:w-72">
              <label htmlFor="search" className="sr-only">내 검색</label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                id="search"
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="내 검색 (예: 배송조회)"
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-lg leading-5 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm transition-colors duration-200"
              />
            </div>
            
            <nav className="flex space-x-1 bg-white/10 p-1 rounded-xl w-full sm:w-auto overflow-x-auto">
              {tabs.map((tab) => {
                const isActive = pathname === tab.href;
                return (
                  <Link
                    key={tab.name}
                    href={tab.href}
                    className={`
                      px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
                      ${isActive 
                        ? "bg-white text-indigo-700 shadow-sm" 
                        : "text-indigo-50 hover:bg-white/20 hover:text-white"
                      }
                    `}
                  >
                    {isActive && <span className="mr-1.5">👉</span>}
                    {tab.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
