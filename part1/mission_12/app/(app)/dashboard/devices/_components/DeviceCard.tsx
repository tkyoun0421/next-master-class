import Link from 'next/link';
import type { Device } from '@/app/_lib/db';

export function DeviceCard({ device }: { device: Device }) {
  return (
    <Link href={`/dashboard/devices/${device.id}`} className="block">
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
  );
}
