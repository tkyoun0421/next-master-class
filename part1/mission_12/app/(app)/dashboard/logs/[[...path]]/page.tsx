import Link from 'next/link';

interface Props {
  params: Promise<{
    path?: string[];
  }>;
}

export default async function LogsPage({ params }: Props) {
  const { path = [] } = await params;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">System Logs</h1>
      <p className="text-slate-500">Infinite depths of hardware logs exploration.</p>

      <div className="bg-slate-900 text-green-400 font-mono p-6 rounded-xl overflow-x-auto border border-slate-800 shadow-xl">
        <div className="flex items-center gap-2 mb-8 text-sm text-slate-400 border-b border-slate-800 pb-4">
          <Link href="/dashboard/logs" className="hover:text-white transition-colors">root</Link>
          {path.map((segment, index) => {
            const currentPath = path.slice(0, index + 1).join('/');
            return (
              <div key={index} className="flex items-center gap-2">
                <span>/</span>
                <Link href={`/dashboard/logs/${currentPath}`} className="hover:text-white transition-colors">
                  {segment}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="space-y-2 opacity-80">
          <div>[INFO] Accessing node: {path.length > 0 ? path.join('/') : 'root'}</div>
          <div>[WARN] Potential anomaly detected in module {path[path.length - 1] || 'core'}_v2.</div>
          <div>[DEBUG] Initializing trace stack... OK.</div>
        </div>

        <div className="mt-8 flex gap-4">
          <Link href={`/dashboard/logs/${[...path, 'kernel'].join('/')}`} className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded">
            Explore /kernel
          </Link>
          <Link href={`/dashboard/logs/${[...path, 'network'].join('/')}`} className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded">
            Explore /network
          </Link>
        </div>
      </div>
    </div>
  );
}
