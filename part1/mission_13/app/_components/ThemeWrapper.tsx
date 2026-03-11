"use client";

import { useState } from "react";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className="min-h-screen bg-white text-black dark:bg-zinc-950 dark:text-zinc-50">
        <header className="p-4 flex justify-between items-center border-b dark:border-zinc-800 border-zinc-200">
          <h1 className="text-xl font-bold tracking-widest uppercase">Elite-Watch</h1>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 border rounded-md dark:border-zinc-600 dark:hover:bg-zinc-800 border-zinc-300 hover:bg-zinc-100"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
        <main className="max-w-7xl mx-auto p-8">{children}</main>
      </div>
    </div>
  );
}
