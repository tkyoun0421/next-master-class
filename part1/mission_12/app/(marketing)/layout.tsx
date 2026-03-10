import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Smartly - Next Generation Smart Home",
  description: "Experience the ultimate smart home platform with Smartly.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900">
        <header className="fixed top-0 w-full backdrop-blur-md bg-white/70 border-b border-slate-200 z-50">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="font-bold text-xl">Smartly</div>
            <nav className="space-x-4">
              <a href="#" className="text-sm font-medium hover:text-blue-600">Features</a>
              <a href="#" className="text-sm font-medium hover:text-blue-600">Pricing</a>
            </nav>
          </div>
        </header>
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <footer className="border-t border-slate-200 py-12 text-center text-slate-500">
          &copy; 2026 Smartly. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
