import { WATCH_DATA } from "./_lib/store";
import AddToCartButton from "./_components/AddToCartButton";

export default function Catalog() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {WATCH_DATA.map((watch) => (
        <div
          key={watch.id}
          className="group flex flex-col bg-zinc-50 dark:bg-zinc-900 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-lg dark:hover:shadow-zinc-800/30"
        >
          <div className="h-64 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center p-8">
            <span className="text-zinc-400 dark:text-zinc-600 font-mono text-sm tracking-widest uppercase">
              {watch.brand}
            </span>
          </div>
          
          <div className="flex flex-col flex-1 p-6">
            <h2 className="text-sm tracking-widest uppercase text-zinc-500 mb-1">{watch.brand}</h2>
            <h3 className="text-xl font-medium mb-3">{watch.name}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 flex-1 line-clamp-3">
              {watch.description}
            </p>
            
            <div className="flex flex-col gap-2 mt-auto">
              <span className="text-lg font-semibold tracking-wide">
                ${watch.price.toLocaleString()}
              </span>
              <AddToCartButton watchId={watch.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
