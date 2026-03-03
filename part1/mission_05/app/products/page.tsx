import Link from "next/link";
import { products } from "@/lib/data";

interface PageProps {
  searchParams: Promise<{ 
    sort?: string; 
    category?: string;
  }>;
}

export default async function ProductsPage({ searchParams }: PageProps) {
  const { sort, category } = await searchParams;

  let filteredProducts = [...products];

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (sort === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (sort) params.set("sort", sort);
    
    if (value === "") {
        params.delete(name);
    } else {
        params.set(name, value);
    }
    
    return params.toString();
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="flex flex-col gap-8 md:flex-row">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-20 rounded-xl border bg-card text-card-foreground shadow-sm p-4">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">Filters</h3>
                <Link
                  href="/products"
                  className="text-xs text-muted-foreground hover:text-primary hover:underline"
                >
                  Clear All
                </Link>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-3 text-muted-foreground">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/products?${createQueryString("category", "kitchen")}`}
                      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border ${
                        category === "kitchen"
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background hover:bg-accent hover:text-accent-foreground border-input"
                      }`}
                    >
                      Kitchen
                    </Link>
                    <Link
                      href={`/products?${createQueryString("category", "living")}`}
                      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border ${
                        category === "living"
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background hover:bg-accent hover:text-accent-foreground border-input"
                      }`}
                    >
                      Living Room
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3 text-muted-foreground">Sort By Price</h4>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/products?${createQueryString("sort", "asc")}`}
                      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border ${
                        sort === "asc"
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background hover:bg-accent hover:text-accent-foreground border-input"
                      }`}
                    >
                      Low to High
                    </Link>
                    <Link
                      href={`/products?${createQueryString("sort", "desc")}`}
                      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border ${
                        sort === "desc"
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background hover:bg-accent hover:text-accent-foreground border-input"
                      }`}
                    >
                      High to Low
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Products</h2>
            <p className="text-sm text-muted-foreground">{filteredProducts.length} results</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md h-full flex flex-col"
              >
                <div className="aspect-[4/3] w-full bg-zinc-100 flex items-center justify-center overflow-hidden">
                    <span className="text-zinc-400 text-sm font-medium">Image</span>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold tracking-tight text-lg line-clamp-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1 capitalize">{product.category}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between mt-auto">
                    <p className="font-semibold text-xl">${product.price.toLocaleString()}</p>
                    <div className="flex items-center gap-1">
                      <span className="text-amber-500">★</span>
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed text-center mt-6 p-8">
              <h3 className="mt-4 text-lg font-semibold">No products found</h3>
              <p className="mb-4 mt-2 text-sm text-muted-foreground">
                We couldn&apos;t find anything matching your current filters.
              </p>
              <Link
                href="/products"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Clear all filters
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
