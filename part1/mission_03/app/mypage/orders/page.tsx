export default function OrdersPage() {
  const orders = [
    { id: "ORD-001", name: "기계식 키보드", status: "배송완료", date: "2023.10.25", color: "bg-green-100 text-green-700 border-green-200" },
    { id: "ORD-002", name: "무선 마우스", status: "배송중", date: "2023.11.01", color: "bg-blue-100 text-blue-700 border-blue-200" },
    { id: "ORD-003", name: "모니터 암", status: "상품준비중", date: "2023.11.05", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          📦 내 주문 내역
        </h2>
        <p className="text-gray-500 mt-1">최근 주문하신 상품들의 상태를 확인할 수 있습니다.</p>
      </div>
      
      <ul className="divide-y divide-gray-100 bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
        {orders.map((order) => (
          <li key={order.id} className="p-5 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-center w-full">
              <div>
                <p className="text-xs text-gray-400 font-medium mb-1">{order.id} | {order.date}</p>
                <p className="font-semibold text-gray-800 text-lg">{order.name}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${order.color}`}>
                {order.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
