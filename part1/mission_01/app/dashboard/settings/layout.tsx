import Link from "next/link";
import React from "react";

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-black dark:text-white">환경 설정</h1>
        
        <nav className="flex gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">
          <Link 
            href="/dashboard/settings" 
            className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white font-medium hover:underline px-2 py-1"
          >
            기본 정보
          </Link>
          <Link 
            href="/dashboard/settings/profile" 
            className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white font-medium hover:underline px-2 py-1"
          >
            프로필 설정
          </Link>
          <Link 
            href="/dashboard/settings/security" 
            className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white font-medium hover:underline px-2 py-1"
          >
            보안 설정
          </Link>
        </nav>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          설정 탭 상태 유지 테스트 (탭 전환 시 값이 남아있는지 확인)
        </label>
        <input 
          type="text" 
          placeholder="여기에 설정 탭 테스트용 값을 입력하세요..." 
          className="border border-zinc-300 dark:border-zinc-700 rounded px-3 py-2 bg-white dark:bg-black w-full max-w-sm outline-none text-black dark:text-white"
        />
      </div>

      <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
        {children}
      </div>
    </div>
  );
}
