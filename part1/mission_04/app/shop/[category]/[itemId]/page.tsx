export default async function ShopItemPage({
  params,
}: {
  params: Promise<{ category: string; itemId: string }>;
}) {
  const { category, itemId } = await params;
  
  return (
    <div className="min-h-screen py-10 px-4 flex flex-col items-center">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-10 max-w-4xl w-full border border-gray-100 dark:border-gray-800">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          
          <div className="w-full sm:w-1/3 aspect-square bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900 rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-sm -skew-y-12 transform -translate-y-1/2 rounded-full blur-2xl"></div>
            <span className="text-6xl font-black text-green-300 dark:text-green-800 opacity-50 uppercase absolute break-all p-4 text-center leading-none pointer-events-none">
              {category}
            </span>
          </div>
          
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-green-700 uppercase bg-green-100 rounded-full dark:bg-green-900/30 dark:text-green-300">
              Nested Routing
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white capitalize">
              {itemId.replace(/-/g, ' ')}
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400">
              This page showcases Next.js nested dynamic routing. By extracting multiple parameters from the URL, we can build highly specific detail pages.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-50 dark:bg-black/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                <span className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Category Parameter</span>
                <code className="text-teal-600 dark:text-teal-400 font-bold bg-teal-50 dark:bg-teal-900/20 px-2 py-1 rounded w-full break-all inline-block">{category}</code>
              </div>
              
              <div className="bg-gray-50 dark:bg-black/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                <span className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Item ID Parameter</span>
                <code className="text-green-600 dark:text-green-400 font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded w-full break-all inline-block">{itemId}</code>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-100 dark:border-gray-800 mt-6 flex gap-4">
              <button className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-all shadow-lg hover:shadow-green-500/30">
                Buy Now
              </button>
              <button className="px-6 py-3 border-2 border-green-600 text-green-600 dark:border-green-500 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 font-medium rounded-xl transition-all">
                Save
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
