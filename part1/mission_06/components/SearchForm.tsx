export default function SearchForm({ initialQuery }: { initialQuery?: string }) {
  return (
    <form action="" method="get" className="flex items-center gap-2">
      <input
        type="text"
        name="q"
        defaultValue={initialQuery}
        placeholder="검색어 입력..."
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        검색
      </button>
    </form>
  );
}
