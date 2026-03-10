import Link from 'next/link';

export default function MarketingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
        The Future of <span className="text-blue-600">Smart Homes</span>
      </h1>
      <p className="text-xl text-slate-600 mb-10 max-w-2xl">
        Manage thousands of devices globally with lightning-fast speeds and enterprise-grade security.
      </p>
      <Link href="/dashboard/devices" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
        Access Dashboard
      </Link>
    </div>
  );
}
