import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumiere POS - Staff",
  description: "Lumiere cafe internal management dashboard",
};

export default function StaffLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex bg-[#f4f4f5] text-zinc-900 min-h-screen`}>
        {/* LNB - Sidebar */}
        <aside className="w-64 bg-zinc-900 text-zinc-100 flex flex-col items-start p-6 fixed h-full shadow-2xl border-r border-[#333]">
          <div className="text-xl font-bold mb-10 tracking-widest text-[#d8a15a] border-b border-zinc-800 w-full pb-6 text-center">LUMIÈRE POS</div>
          <nav className="flex flex-col gap-3 w-full">
            <a href="/pos" className="bg-[#d8a15a] text-black p-3.5 rounded-lg w-full text-left font-bold transition-colors shadow-[0_0_15px_rgba(216,161,90,0.3)]">
              Real-time Orders
            </a>
            <a href="#" className="p-3.5 rounded-lg w-full text-left font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all">
              Inventory
            </a>
            <a href="#" className="p-3.5 rounded-lg w-full text-left font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all">
              Sales Dashboard
            </a>
            <a href="#" className="p-3.5 rounded-lg w-full text-left font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all">
              Staff Schedule
            </a>
          </nav>
          
          <div className="mt-auto pt-6 border-t border-zinc-800 w-full">
            <div className="flex items-center gap-3 bg-zinc-800 p-3 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-zinc-700 flex flex-shrink-0 items-center justify-center font-bold text-zinc-300">
                S1
              </div>
              <div className="text-sm">
                <p className="font-semibold text-zinc-100">Station 01</p>
                <p className="text-zinc-500 text-xs">Seoul, Gangnam</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="ml-64 flex-1 p-8 md:p-12 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
