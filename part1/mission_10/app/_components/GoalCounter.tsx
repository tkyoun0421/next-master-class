"use client";

import { useState } from "react";

export default function GoalCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev < 10 ? prev + 1 : prev);
  };

  return (
    <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col items-center gap-4">
      <div className="text-center">
        <h3 className="font-semibold text-lg text-gray-800">새로운 공부 목표달성</h3>
        <p className="text-sm text-gray-500">오늘의 진도율을 체크해보세요</p>
      </div>
      <p className="text-4xl font-extrabold text-blue-600">{count} <span className="text-lg text-gray-400 font-medium">/ 10</span></p>
      <button
        onClick={handleClick}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={count >= 10}
      >
        목표 달성 체크 👇
      </button>
    </div>
  );
}
