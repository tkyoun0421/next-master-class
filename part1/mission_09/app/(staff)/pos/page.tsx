import { formatCurrency } from "../../_utils/currency";

export default function StaffPosDashboard() {
  const dailyRevenue = 3850000;
  
  const pendingOrders = [
    { id: "ORD-1042", items: ["Kenya Nyeri AA Top Pour Over", "Classic Canele"], status: "Preparing", time: "14:02" },
    { id: "ORD-1043", items: ["Iced Oat Latte", "Espresso Macchiato"], status: "Waiting", time: "14:05" },
    { id: "ORD-1044", items: ["Guatemala Antigua Drip", "Almond Croissant"], status: "Waiting", time: "14:08" },
    { id: "ORD-1045", items: ["Signature Vanilla Bean Latte"], status: "Waiting", time: "14:11" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-extrabold text-zinc-900 tracking-tight">Orders</h1>
          <p className="text-zinc-500 mt-2 font-medium">Manage today's requests and monitor incoming tickets.</p>
        </div>
        <div className="text-right bg-white p-6 rounded-2xl shadow-sm border border-zinc-200 min-w-[200px]">
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Today's Revenue</p>
          <p className="text-4xl font-black text-emerald-600">{formatCurrency(dailyRevenue)}</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden lg:col-span-2">
          <div className="p-6 border-b border-zinc-100 bg-zinc-50 flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-3 text-zinc-800">
              Active Queue 
              <span className="bg-[#d8a15a] text-white py-1.5 px-3.5 rounded-full text-sm font-black shadow-md">
                {pendingOrders.length}
              </span>
            </h2>
            <button className="text-sm font-semibold text-zinc-500 hover:text-black">
              View Completed
            </button>
          </div>
          
          <div className="divide-y divide-zinc-100">
            {pendingOrders.map((order) => (
              <div key={order.id} className="p-6 flex items-center justify-between hover:bg-zinc-50/80 transition-colors group cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className={`w-20 h-20 rounded-xl flex flex-col items-center justify-center font-mono font-bold border-2 ${
                    order.status === 'Preparing' 
                      ? 'bg-amber-50 text-amber-700 border-amber-200' 
                      : 'bg-zinc-50 text-zinc-500 border-transparent shadow-sm'
                  }`}>
                    <span className="text-[10px] text-opacity-70 mb-1">#{order.id.split('-')[1]}</span>
                    <span className="text-lg">{order.time}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 text-lg mb-1.5 group-hover:text-[#d8a15a] transition-colors">{order.id}</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-zinc-600 font-medium">
                      {order.items.map((item, idx) => (
                        <span key={idx} className="bg-zinc-100 px-3 py-1 rounded-md">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className={`px-4 py-2 rounded-lg text-sm font-bold shadow-sm ${
                    order.status === 'Preparing' 
                      ? 'bg-amber-500 text-white' 
                      : 'bg-white text-zinc-600 border border-zinc-200'
                  }`}>
                    {order.status}
                  </span>
                  <button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 transition-colors">
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="bg-zinc-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#d8a15a] rounded-full blur-3xl opacity-20"></div>
            <h3 className="text-lg font-bold text-zinc-300 mb-2">System Status</h3>
            <div className="text-4xl font-black mb-6 flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              All Online
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-medium border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Order Sync</span>
                <span className="text-emerald-400 tracking-wider">LIVE</span>
              </div>
              <div className="flex justify-between items-center text-sm font-medium border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Inventory Sync</span>
                <span className="text-emerald-400 tracking-wider">LIVE</span>
              </div>
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-zinc-400">Payment Gateway</span>
                <span className="text-emerald-400 tracking-wider">LIVE</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
