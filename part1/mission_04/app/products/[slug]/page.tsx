export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  return (
    <div className="min-h-screen py-10 px-4 flex flex-col items-center">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-10 max-w-3xl w-full border border-gray-100 dark:border-gray-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-bl-full -z-10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-100 dark:bg-purple-900 rounded-tr-full -z-10 opacity-50"></div>
        
        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
          Dynamic Product Route
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white capitalize">
          {slug.replace(/-/g, ' ')}
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Welcome to the dynamic detail page for this product. Our highly scalable architecture uses the URL slug to fetch and render the correct data.
        </p>
        
        <div className="bg-gray-50 dark:bg-black/50 rounded-2xl p-6 mb-8 border border-gray-100 dark:border-gray-800">
          <h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-gray-800 dark:text-gray-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            System Variables
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
              <span className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Parsed Slug</span>
              <code className="text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">{slug}</code>
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
              <span className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Feature</span>
              <span className="font-semibold text-gray-800 dark:text-gray-200">Catch-All Dynamic Routing</span>
            </div>
          </div>
        </div>
        
        <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 active:scale-95">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
