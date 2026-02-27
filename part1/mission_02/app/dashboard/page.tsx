export default function DashboardOverview() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">👋 환영합니다!</h2>
      <p className="mb-4 text-gray-700">이곳은 대시보드 메인 화면입니다.</p>
      
      <div className="p-4 bg-blue-50 text-blue-800 rounded border border-blue-200 w-fit">
        <p className="font-semibold">[총 방문자: 1,234명] ...</p>
      </div>
    </div>
  );
}
