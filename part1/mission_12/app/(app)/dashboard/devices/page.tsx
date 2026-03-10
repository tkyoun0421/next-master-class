import { MOCK_DEVICES } from '@/app/_lib/db';
import { DeviceFilter } from './_components/DeviceFilter';
import { DeviceCard } from './_components/DeviceCard';

interface Props {
  searchParams: Promise<{
    q?: string;
    cat?: string;
  }>;
}

export default async function DevicesPage({ searchParams }: Props) {
  const { q, cat } = await searchParams;
  
  const filteredDevices = MOCK_DEVICES.filter((d) => {
    const matchCategory = !cat || d.category === cat;
    const matchQuery = !q || d.name.toLowerCase().includes(q.toLowerCase());
    return matchCategory && matchQuery;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Device Manager</h1>
        <p className="text-slate-500 mt-2">Monitor and control your smart home devices securely.</p>
      </div>

      <DeviceFilter q={q} cat={cat} />

      <div className="grid gap-4">
        {filteredDevices.length === 0 ? (
          <div className="text-center py-12 text-slate-500 bg-white rounded-xl border border-slate-200">
            No devices found.
          </div>
        ) : (
          filteredDevices.map(device => (
            <DeviceCard key={device.id} device={device} />
          ))
        )}
      </div>
    </div>
  );
}
