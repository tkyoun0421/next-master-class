export default function NewArrivalPage() {
  return (
    <div className="min-h-screen py-10 px-4 flex flex-col items-center">
      <div className="bg-white dark:bg-gray-900 shadow-[0_0_50px_rgba(168,85,247,0.2)] rounded-3xl p-10 max-w-4xl w-full border-2 border-purple-200 dark:border-purple-800 relative z-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-300 dark:bg-fuchsia-900/40 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-50 dark:mix-blend-lighten animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-300 dark:bg-indigo-900/40 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-50 dark:mix-blend-lighten animate-pulse delay-1000"></div>
        
        <div className="flex flex-col items-center text-center">
          <div className="inline-block px-4 py-2 mb-8 text-sm font-bold tracking-[0.2em] text-purple-700 uppercase bg-purple-100 rounded-full dark:bg-purple-900/50 dark:text-purple-300 shadow-sm">
            Static Priority Validation Test
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 mb-8 pb-2 drop-shadow-sm">
            🔥 NEW ARRIVALS 🔥
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl font-medium leading-relaxed">
            Welcome to the exclusive new arrivals section. 
            <span className="block mt-4 text-purple-600 dark:text-purple-400 font-bold bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-lg border border-purple-100 dark:border-purple-800/50">
              This is a static route which holds higher priority than the dynamic route equivalent.
            </span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:border-purple-300 dark:hover:border-purple-700 group">
                <div className="w-full aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/50 dark:to-indigo-900/50 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <span className="text-4xl">✨</span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 dark:group-hover:bg-black/10 transition-colors"></div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">Tech Gadget {item}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Arrived just now. Limited stock available.</p>
                <div className="mt-4 text-purple-600 dark:text-purple-400 font-semibold uppercase text-sm group-hover:underline cursor-pointer">Explore Now &rarr;</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
