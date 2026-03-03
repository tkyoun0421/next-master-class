"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function TopBar() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 lg:px-8 mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl tracking-wide text-primary">Electra</span>
        </Link>
        <div className="flex items-center space-x-4 text-sm font-medium">
          <div className="flex gap-2">
            {category && (
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                Category: {category}
              </span>
            )}
            {sort && (
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Sort: {sort === 'asc' ? 'Low to High' : 'High to Low'}
              </span>
            )}
            {!category && !sort && (
              <span className="text-muted-foreground text-xs bg-slate-100 rounded-md px-2 py-1">
                All Products
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
