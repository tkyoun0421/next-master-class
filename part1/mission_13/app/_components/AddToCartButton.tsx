"use client";

import { useState } from "react";

export default function AddToCartButton({ watchId }: { watchId: string }) {
  const [clicked, setClicked] = useState(false);

  const handleAddToCart = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`w-full py-3 mt-4 text-sm font-semibold tracking-wide uppercase ${
        clicked
          ? "bg-green-600 text-white"
          : "bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      }`}
    >
      {clicked ? "Added to Cart ✓" : "Add to Cart"}
    </button>
  );
}
