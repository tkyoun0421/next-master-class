import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-in fade-in zoom-in duration-500">
      <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
        Welcome to Tech-Flow
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl text-center leading-relaxed">
        Your ultimate destination for global electronics and accessories. 
        Discover the latest tech products with our cutting-edge platform.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        <Link 
          href="/products/iphone-15" 
          className="group relative border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 transition-all group-hover:w-full group-hover:opacity-10 opacity-100 dark:opacity-50" />
          <h2 className="text-2xl font-bold mb-3 text-blue-900 dark:text-blue-100">Dynamic Routing</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium font-mono bg-white/50 dark:bg-black/50 p-2 rounded inline-block mb-4">
            /products/[slug]
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            View product details dynamically using infinite slug parameters.
          </p>
          <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
            Test Link: iPhone 15 &rarr;
          </div>
        </Link>
        
        <Link 
          href="/shop/laptop/macbook-pro" 
          className="group relative border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-green-50 to-white dark:from-green-950 dark:to-gray-900 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-green-500 transition-all group-hover:w-full group-hover:opacity-10 opacity-100 dark:opacity-50" />
          <h2 className="text-2xl font-bold mb-3 text-green-900 dark:text-green-100">Nested Routing</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium font-mono bg-white/50 dark:bg-black/50 p-2 rounded inline-block mb-4">
            /shop/[category]/[itemId]
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Explore advanced multi-dimensional data extraction in categories.
          </p>
          <div className="mt-6 flex items-center text-green-600 dark:text-green-400 font-semibold text-sm uppercase tracking-wider">
            Test Link: Macbook Pro &rarr;
          </div>
        </Link>
        
        <Link 
          href="/products/new-arrival" 
          className="group relative border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950 dark:to-gray-900 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-purple-500 transition-all group-hover:w-full group-hover:opacity-10 opacity-100 dark:opacity-50" />
          <h2 className="text-2xl font-bold mb-3 text-purple-900 dark:text-purple-100">Static Priority</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium font-mono bg-white/50 dark:bg-black/50 p-2 rounded inline-block mb-4">
            /products/new-arrival
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Verify that a static route has higher priority than a dynamic route.
          </p>
          <div className="mt-6 flex items-center text-purple-600 dark:text-purple-400 font-semibold text-sm uppercase tracking-wider">
            Test Link: New Arrival &rarr;
          </div>
        </Link>
      </div>
    </div>
  );
}
