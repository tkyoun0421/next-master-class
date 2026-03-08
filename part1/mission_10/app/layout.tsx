import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LawPass - 행정사 합격 패스",
  description: "방대한 법령 데이터와 수험 정보를 제공하는 행정사 시험 준비 플랫폼 LawPass",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full bg-blue-600 text-white p-4 shadow-md">
          <nav className="max-w-3xl mx-auto flex items-center justify-between font-bold text-lg">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏛️</span>
              <span>LawPass</span>
            </div>
            <div className="flex gap-6 font-medium text-base">
              <Link href="/" className="hover:underline">대시보드</Link>
              <Link href="#" className="hover:underline">과목 안내</Link>
              <Link href="#" className="hover:underline">모의고사</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
