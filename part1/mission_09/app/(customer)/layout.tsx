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
  title: "Lumiere - Premium Roastery",
  description: "Welcome to Lumiere, the premium roastery",
};

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-transparent text-white mix-blend-difference">
          <div className="text-2xl font-bold tracking-widest text-[#d8a15a]">LUMIÈRE</div>
          <nav className="flex gap-8 font-medium">
            <a href="/" className="hover:text-[#d8a15a] transition-colors">SHOP</a>
            <a href="#" className="hover:text-[#d8a15a] transition-colors">ABOUT</a>
            <a href="#" className="hover:text-[#d8a15a] transition-colors">RESERVE</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
