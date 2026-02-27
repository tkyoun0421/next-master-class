import Link from "next/link";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-48px)]">
      <aside className="w-64 bg-zinc-100 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-6 shrink-0">
        <div className="font-bold text-xl text-black dark:text-white">
          Nexus Dashboard
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            사이드바 상태 유지 테스트
          </label>
          <input 
            type="text" 
            placeholder="여기에 입력하세요..." 
            className="border border-zinc-300 dark:border-zinc-700 rounded px-3 py-2 bg-white dark:bg-black w-full outline-none text-black dark:text-white"
          />
        </div>

        <nav className="flex flex-col gap-3 mt-4">
          <Link href="/dashboard" className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white font-medium hover:underline">
            대시보드 홈
          </Link>
          <Link href="/dashboard/settings" className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white font-medium hover:underline">
            설정 메뉴
          </Link>
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium mt-4">
            &larr; 랜딩 페이지로 나가기
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8 bg-white dark:bg-black">
        {children}
      </main>
    </div>
  );
}
