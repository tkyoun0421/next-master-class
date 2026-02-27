export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-black dark:text-white mb-2">대시보드 메인 페이지</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        여기는 대시보드의 기본 콘텐츠 영역입니다.
      </p>
      <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 mt-4">
        <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">요약 통계</h3>
        <p className="text-zinc-500">통계 데이터가 표시됩니다.</p>
      </div>
    </div>
  );
}
