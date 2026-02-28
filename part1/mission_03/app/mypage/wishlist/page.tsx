export default function WishlistPage() {
  const wishItems = [
    { id: "WSH-001", name: "최신 스마트폰 15 Pro", price: "₩1,650,000", badge: "할인중", color: "bg-red-100 text-red-700" },
    { id: "WSH-002", name: "노이즈 캔슬링 헤드폰", price: "₩450,000", badge: "품절임박", color: "bg-orange-100 text-orange-700" },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          ❤️ 위시리스트
        </h2>
        <p className="text-gray-500 mt-1">관심 상품으로 등록하신 목록입니다.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {wishItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col items-center justify-between group">
            <div className="w-full flex justify-end mb-2">
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${item.color}`}>
                {item.badge}
              </span>
            </div>
            <div className="h-24 w-24 bg-rose-50 rounded-full flex items-center justify-center text-rose-300 text-4xl mb-4 group-hover:scale-110 transition-transform">
              🎁
            </div>
            <h3 className="font-semibold text-gray-800 text-center">{item.name}</h3>
            <p className="text-indigo-600 font-bold mt-2">{item.price}</p>
            <button className="mt-4 w-full bg-gray-900 text-white rounded-lg py-2 text-sm font-medium hover:bg-gray-800 transition-colors">
              장바구니 담기
            </button>
          </div>
        ))}
        {wishItems.length === 0 && (
          <div className="col-span-full py-10 flex items-center justify-center text-gray-400 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            위시리스트가 비어있습니다.
          </div>
        )}
      </div>
    </div>
  );
}
