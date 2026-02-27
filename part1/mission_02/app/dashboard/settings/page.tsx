export default function DashboardSettings() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">⚙️ 환경 설정</h2>
      <p className="mb-6 text-gray-700">여기는 설정 페이지입니다.</p>
      
      <form className="flex flex-col gap-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <input 
            type="checkbox" 
            defaultChecked 
            className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />
          <span className="text-gray-800">이메일 알림 받기</span>
        </label>
        
        <label className="flex items-center gap-3 cursor-pointer">
          <input 
            type="checkbox" 
            className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />
          <span className="text-gray-800">다크 모드 사용</span>
        </label>
      </form>
    </div>
  );
}
