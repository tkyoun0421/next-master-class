import { MOCK_DEVICES } from '@/app/_lib/db';
import { notFound } from 'next/navigation';
import ToggleButton from './toggle-button';
import Link from 'next/link';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function DeviceDetailPage({ params }: Props) {
  const { id } = await params;
  
  const device = MOCK_DEVICES.find(d => d.id === id);
  if (!device) return notFound();

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <Link href="/dashboard/devices" className="text-blue-600 hover:underline mb-8 inline-block">
        &larr; Back to Devices
      </Link>
      
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{device.name}</h1>
            <p className="text-slate-500 uppercase tracking-widest text-sm mt-2">{device.category}</p>
          </div>
          <div className="px-4 py-1.5 rounded-md bg-slate-100 font-mono text-sm border border-slate-200">
            ID: {device.id}
          </div>
        </div>

        <div className="py-8 border-y border-slate-100 flex items-center justify-between">
          <div className="text-lg font-medium text-slate-700">Power Status</div>
          <ToggleButton initialStatus={device.status} deviceId={device.id} />
        </div>
      </div>
    </div>
  );
}
