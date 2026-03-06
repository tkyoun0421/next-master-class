import React from 'react';
import Link from 'next/link';
import FileSearch from '@/components/FileSearch';

type Props = {
  params: Promise<{ path?: string[] }>;
  searchParams: Promise<{ q?: string; ext?: string }>;
};

type FileItem = {
  id: string;
  name: string;
  type: "folder" | "file";
  path: string[];
  extension?: string;
};

const mockData: FileItem[] = [
  { id: "1", name: "documents", type: "folder", path: [] },
  { id: "2", name: "images", type: "folder", path: [] },
  { id: "3", name: "이력서_국문.pdf", type: "file", path: [], extension: "pdf" },
  { id: "4", name: "프로젝트_백업.zip", type: "file", path: [], extension: "zip" },
  { id: "5", name: "work", type: "folder", path: ["documents"] },
  { id: "10", name: "notes.txt", type: "file", path: ["documents"], extension: "txt" },
  { id: "6", name: "2024_연봉계약서.pdf", type: "file", path: ["documents", "work"], extension: "pdf" },
  { id: "7", name: "프로젝트_기획안.pdf", type: "file", path: ["documents", "work"], extension: "pdf" },
  { id: "8", name: "vacation.png", type: "file", path: ["images"], extension: "png" },
  { id: "9", name: "logo.png", type: "file", path: ["images"], extension: "png" },
];

export default async function DrivePage({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const pathArray = resolvedParams.path || [];
  const q = resolvedSearchParams.q || "";
  const ext = resolvedSearchParams.ext || "";

  // filter data
  let currentItems = mockData.filter(item => {
    if (item.path.length !== pathArray.length) return false;
    for (let i = 0; i < pathArray.length; ++i) {
      if (item.path[i] !== pathArray[i]) return false;
    }
    return true;
  });

  if (q) {
    currentItems = currentItems.filter(item => item.name.toLowerCase().includes(q.toLowerCase()));
  }

  if (ext) {
    currentItems = currentItems.filter(item => item.type === "file" && item.extension === ext);
  }

  const basePath = pathArray.length > 0 ? `/drive/${pathArray.join("/")}` : "/drive";

  // Breadcrumbs
  const breadcrumbs = pathArray.map((p, i) => {
    const url = `/drive/${pathArray.slice(0, i + 1).join("/")}`;
    return { label: p, url };
  });

  // Query String Builder
  const buildQuery = (newExt?: string) => {
    const params = new URLSearchParams();
    if (newExt) params.set("ext", newExt);
    if (q) params.set("q", q);
    const qs = params.toString();
    return qs ? `?${qs}` : '';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black p-8 text-black dark:text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Top bar: Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center mb-8 border-b pb-6 border-gray-200 dark:border-gray-800">
          <FileSearch initialQuery={q} actionPath={basePath} ext={ext} />
          
          <div className="flex space-x-2">
            <Link 
              href={`${basePath}${buildQuery()}`}
              className={`px-4 py-2 border rounded transition-colors ${!ext ? 'bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-900/30' : 'hover:bg-gray-100 dark:hover:bg-zinc-800 dark:border-zinc-700'}`}
            >
              {!ext ? '👉 전체 보기' : '전체 보기'}
            </Link>
            <Link 
              href={`${basePath}${buildQuery('pdf')}`}
              className={`px-4 py-2 border rounded transition-colors ${ext === 'pdf' ? 'bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-900/30' : 'hover:bg-gray-100 dark:hover:bg-zinc-800 dark:border-zinc-700'}`}
            >
              {ext === 'pdf' ? '👉 PDF만 보기' : 'PDF만 보기'}
            </Link>
            <Link 
              href={`${basePath}${buildQuery('png')}`}
              className={`px-4 py-2 border rounded transition-colors ${ext === 'png' ? 'bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-900/30' : 'hover:bg-gray-100 dark:hover:bg-zinc-800 dark:border-zinc-700'}`}
            >
              {ext === 'png' ? '👉 이미지만 보기' : '이미지만 보기'}
            </Link>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="text-xl font-medium mb-8 flex text-gray-700 dark:text-gray-300">
          <Link href="/drive" className="hover:text-blue-600 transition-colors">📂 내 드라이브</Link>
          {breadcrumbs.map((crumb) => (
            <React.Fragment key={crumb.url}>
              <span className="mx-2 text-gray-400 font-light">&gt;</span>
              <Link href={crumb.url} className="hover:text-blue-600 transition-colors">
                {crumb.label}
              </Link>
            </React.Fragment>
          ))}
        </div>

        {/* Folder / File List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentItems.map(item => {
            if (item.type === 'folder') {
              const folderUrl = `${basePath === '/drive' ? '/drive' : basePath}/${item.name}${buildQuery(ext)}`;
              return (
                <Link 
                  key={item.id} 
                  href={folderUrl} 
                  className="group flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <span className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-bottom-left">📁</span>
                  <span className="font-semibold text-lg truncate">{item.name}</span>
                </Link>
              );
            }

            // File items
            let icon = "📄";
            if (item.extension === 'zip') icon = "📦";
            if (item.extension === 'png') icon = "🖼️";
            if (item.extension === 'pdf') icon = "📕";

            return (
              <div 
                key={item.id} 
                className="flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-800"
              >
                <span className="text-4xl mb-4">{icon}</span>
                <span className="font-medium truncate text-gray-800 dark:text-gray-200">{item.name}</span>
                <span className="text-xs text-gray-500 mt-2 uppercase flex-1">{item.extension} file</span>
              </div>
            );
          })}
        </div>

        {currentItems.length === 0 && (
          <div className="py-20 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 border-2 border-dashed rounded-xl mt-8">
            <span className="text-5xl mb-4 text-gray-300 dark:text-gray-600">📭</span>
            <p className="text-lg">해당 조건에 맞는 항목이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
