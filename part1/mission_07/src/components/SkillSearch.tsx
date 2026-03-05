import Link from "next/link";

export default function SkillSearch({
  initialQuery,
  actionPath,
  currentLevel = "all",
}: {
  initialQuery?: string;
  actionPath: string;
  currentLevel?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <form action={actionPath} className="flex items-center space-x-2 w-full max-w-lg">
        {currentLevel && currentLevel !== "all" && (
          <input type="hidden" name="level" value={currentLevel} />
        )}
        <input
          type="text"
          name="q"
          defaultValue={initialQuery}
          placeholder="기술명 검색..."
          className="flex-1 border p-3 rounded-xl text-black"
        />
        <button type="submit" className="bg-slate-900 dark:bg-slate-100 dark:text-black text-white px-6 py-3 rounded-xl font-bold">
          검색
        </button>
      </form>
      <div className="flex space-x-2">
        <Link
          href={`${actionPath}?${new URLSearchParams({
            ...(initialQuery ? { q: initialQuery } : {}),
            level: 'all'
          }).toString()}`}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            currentLevel === "all" ? "bg-slate-900 border border-slate-900 text-white dark:bg-slate-100 dark:text-black" : "bg-transparent border border-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
          }`}
        >
          전체
        </Link>
        <Link
          href={`${actionPath}?${new URLSearchParams({
            ...(initialQuery ? { q: initialQuery } : {}),
            level: 'beginner'
          }).toString()}`}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            currentLevel === "beginner" ? "bg-slate-900 border border-slate-900 text-white dark:bg-slate-100 dark:text-black" : "bg-transparent border border-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
          }`}
        >
          입문
        </Link>
        <Link
          href={`${actionPath}?${new URLSearchParams({
            ...(initialQuery ? { q: initialQuery } : {}),
            level: 'advanced'
          }).toString()}`}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            currentLevel === "advanced" ? "bg-slate-900 border border-slate-900 text-white dark:bg-slate-100 dark:text-black" : "bg-transparent border border-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
          }`}
        >
          심화
        </Link>
      </div>
    </div>
  );
}
