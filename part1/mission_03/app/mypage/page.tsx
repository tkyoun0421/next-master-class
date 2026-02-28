export default function ProfilePage() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center space-x-4 border-b pb-6">
        <div className="h-16 w-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-2xl shadow-inner font-bold">
          김
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            👤 내 프로필 정보
          </h2>
          <p className="text-gray-500">환영합니다! 프리미엄 서비스를 이용하고 계십니다.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
          <p className="text-sm text-gray-400 font-medium mb-1">이름</p>
          <p className="text-lg font-semibold text-gray-800">김개발</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
          <p className="text-sm text-gray-400 font-medium mb-1">등급</p>
          <p className="text-lg font-semibold text-indigo-600 flex items-center">
            <span className="bg-indigo-100 p-1 rounded-md text-xs mr-2 border border-indigo-200">👑</span>
            VIP 회원
          </p>
        </div>
      </div>
    </div>
  );
}
