import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col">
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 lg:py-24">
        <div className="flex flex-col items-center justify-center space-y-8 text-center mt-12">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-zinc-900 dark:text-zinc-100">Smart Living</span>
              <br />
              <span className="text-zinc-500 dark:text-zinc-400">Starts Here</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 mt-6 leading-relaxed">
              Discover the latest premium home appliances at Electra. Upgrade your home with our AI-powered kitchen and living solutions designed for comfort and efficiency.
            </p>
          </div>
          
          <div className="flex w-full items-center justify-center gap-4 py-8">
            <Link 
              href="/products" 
              className="group inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90"
            >
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
