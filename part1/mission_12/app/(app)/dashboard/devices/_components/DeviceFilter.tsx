import Link from 'next/link';

const CATEGORIES = [
  { id: 'light', label: 'Lights' },
  { id: 'security', label: 'Security' },
  { id: 'appliance', label: 'Appliances' }
];

export function DeviceFilter({ q, cat }: { q?: string; cat?: string }) {
  return (
    <div className="flex flex-wrap gap-4 items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
      <form className="flex-1 flex gap-2">
        {cat && <input type="hidden" name="cat" value={cat} />}
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder="Search devices..."
          className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800">
          Search
        </button>
      </form>

      <div className="flex gap-2">
        {CATEGORIES.map(category => (
          <Link
            key={category.id}
            href={{ query: { ...(q && { q }), cat: category.id } }}
            className={`px-4 py-2 rounded-lg border ${cat === category.id ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'}`}
          >
            {category.label}
          </Link>
        ))}
        {cat && (
          <Link href={{ query: { ...(q && { q }) } }} className="px-4 py-2 rounded-lg border bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200">
            Clear Filter
          </Link>
        )}
      </div>
    </div>
  );
}
