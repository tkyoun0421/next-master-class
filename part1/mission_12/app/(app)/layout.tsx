import type { Metadata } from "next";
import Link from 'next/link';
import "../globals.css";

export const metadata: Metadata = {
  title: "Smartly Dashboard",
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 min-h-screen flex text-slate-900 font-sans">
        <aside className="w-[20rem] bg-slate-900 text-white flex-shrink-0 min-h-screen p-6 sticky top-0 overflow-y-auto hidden md:block">
          <div className="text-2xl font-bold mb-10 text-blue-400">Smartly OS</div>
          <nav className="flex flex-col gap-2">
            <Link href="/dashboard/devices" className="px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors">
              Device Manager
            </Link>
            <Link href="/dashboard/logs" className="px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors">
              System Logs
            </Link>
            <Link href="/" className="px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors mt-auto">
              Exit to Site
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
