import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech-Flow",
  description: "Global Electronics & Accessories Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
          <Link href="/" className="text-2xl font-extrabold tracking-tight">Tech-Flow</Link>
          <nav className="flex gap-6 font-medium">
            <Link href="/products/iphone-15" className="hover:text-blue-500 transition-colors">Products</Link>
            <Link href="/shop/laptop/macbook-pro" className="hover:text-green-500 transition-colors">Shop</Link>
            <Link href="/products/new-arrival" className="hover:text-purple-500 transition-colors">New Arrival</Link>
          </nav>
        </header>
        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
