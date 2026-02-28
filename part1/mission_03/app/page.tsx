import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center space-y-6">
        <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
          🚀
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Next.js 마스터 클래스
        </h1>
        <p className="text-gray-500 text-lg">
          미션 3: 파일 시스템 라우팅과 중첩 레이아웃
        </p>
        
        <div className="pt-6">
          <Link
            href="/mypage"
            className="inline-flex w-full justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            마이페이지로 이동하기
          </Link>
        </div>
      </div>
    </div>
  );
}
