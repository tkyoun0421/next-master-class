import Link from 'next/link';
import { MOCK_DEVICES } from '@/app/_lib/db';

interface Props {
  searchParams: Promise<{
    q?: string;
    cat?: string;
  }>;
}

export default async function DevicesPage({ searchParams }: Props) {
  const { q, cat } = await searchParams;
  
  const filteredDevices = MOCK_DEVICES.filter((d) => {
    let match = true;
    if (q) {
      match = match && d.name.toLowerCase().includes(q.toLowerCase());
    }
    if (cat) {
      match = match && d.category === cat;
    }
    return match;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Device Manager</h1>
        <p className="text-slate-500 mt-2">Monitor and control your smart home devices securely.</p>
      </div>

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
          <Link
            href={`?${new URLSearchParams({ ...(q && { q }), cat: 'light' }).toString()}`}
            className={`px-4 py-2 rounded-lg border ${cat === 'light' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'}`}
          >
            Lights
          </Link>
          <Link
            href={`?${new URLSearchParams({ ...(q && { q }), cat: 'security' }).toString()}`}
            className={`px-4 py-2 rounded-lg border ${cat === 'security' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'}`}
          >
            Security
          </Link>
          <Link
            href={`?${new URLSearchParams({ ...(q && { q }), cat: 'appliance' }).toString()}`}
            className={`px-4 py-2 rounded-lg border ${cat === 'appliance' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'}`}
          >
            Appliances
          </Link>
          {cat && (
            <Link href={`?${new URLSearchParams({ ...(q && { q }) }).toString()}`} className="px-4 py-2 rounded-lg border bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200">
              Clear Filter
            </Link>
          )}
        </div>
      </div>

      <div className="grid gap-4">
        {filteredDevices.length === 0 ? (
          <div className="text-center py-12 text-slate-500 bg-white rounded-xl border border-slate-200">
            No devices found.
          </div>
        ) : (
          filteredDevices.map(device => (
            <Link key={device.id} href={`/dashboard/devices/${device.id}`} className="block">
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex items-center justify-between group">
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">{device.name}</h3>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mt-1">{device.category}</p>
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${device.status === 'on' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                    {device.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
