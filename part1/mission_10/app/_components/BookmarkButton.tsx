"use client";

import { useState } from "react";

export default function BookmarkButton({ subject }: { subject: string }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
        isBookmarked
          ? "bg-yellow-100 text-yellow-800 border-yellow-300 hover:bg-yellow-200"
          : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
      } border shadow-sm`}
    >
      {isBookmarked ? `★ ${subject} 북마크 완료` : `☆ ${subject} 북마크`}
    </button>
  );
}
