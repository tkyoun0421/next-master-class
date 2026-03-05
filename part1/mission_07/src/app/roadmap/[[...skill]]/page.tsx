import SkillSearch from "../../../components/SkillSearch";
import Link from "next/link";

export const roadmapData = [
  { id: "1", title: "Frontend", path: ["frontend"], level: "beginner", description: "웹 프론트엔드 기초 지식" },
  { id: "2", title: "Backend", path: ["backend"], level: "beginner", description: "웹 백엔드 기초 지식" },
  { id: "3", title: "React", path: ["frontend", "react"], level: "beginner", description: "컴포넌트 기반 UI 라이브러리" },
  { id: "4", title: "Vue", path: ["frontend", "vue"], level: "beginner", description: "프로그레시브 JS 프레임워크" },
  { id: "5", title: "Hooks", path: ["frontend", "react", "hooks"], level: "advanced", description: "React 상태 관리 추상화" },
  { id: "6", title: "Concurrent Mode", path: ["frontend", "react", "concurrent"], level: "advanced", description: "React 렌더링 최적화" },
  { id: "7", title: "Node.js", path: ["backend", "nodejs"], level: "beginner", description: "백엔드 JS 런타임" },
  { id: "8", title: "Express", path: ["backend", "nodejs", "express"], level: "beginner", description: "경량화 웹 프레임워크" },
  { id: "9", title: "NestJS", path: ["backend", "nodejs", "nestjs"], level: "advanced", description: "엔터프라이즈 백엔드 아키텍처" },
  { id: "10", title: "DevOps", path: ["devops"], level: "beginner", description: "인프라스트럭처와 배포 관리" },
];

export default async function RoadmapPage({
  params,
  searchParams,
}: {
  params: Promise<{ skill?: string[] }>;
  searchParams: Promise<{ q?: string; level?: string }>;
}) {
  const resolvedParams = await params;
  const {q, level} = await searchParams;

  const skill = resolvedParams.skill || [];

  const currentLevel = level || "all";
  const actionPath = skill.length > 0 ? `/roadmap/${skill.join("/")}` : "/roadmap";

  const isMatchingPath = (itemPath: string[]) => {
    if (itemPath.length < skill.length) return false;

    return skill.every((segment, i) => segment === itemPath[i]);
  };

  const filteredData = roadmapData.filter((item) => {
    const pathMatch = isMatchingPath(item.path);

    const levelMatch = currentLevel === "all" || item.level === currentLevel;

    const queryMatch = !q || item.title.toLowerCase().includes(q.toLowerCase());

    return pathMatch && levelMatch && queryMatch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-12 font-sans text-slate-900 dark:text-slate-100 flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-10">
        <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
              <span className="text-5xl animate-bounce">🎯</span>
              {skill.length === 0 ? "ROOT ROADMAP" : skill.join(" > ")}
            </h1>
            <p className="text-indigo-200 text-lg max-w-xl mx-auto">
              {skill.length === 0
                ? "여정의 시작! 어떤 기술 트리를 파헤치고 싶으신가요?"
                : `${skill[skill.length - 1].toUpperCase()} 계층의 기술들을 탐색하고 있습니다.`}
            </p>
          </div>
        </div>
        <SkillSearch initialQuery={q} actionPath={actionPath} currentLevel={currentLevel} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {filteredData.map((item) => (
            <Link
              key={item.id}
              href={`/roadmap/${item.path.join("/")}`}
              className="group block p-6 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 hover:shadow-xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 shrink-0 h-full bg-indigo-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h2>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                    item.level === "beginner"
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
                      : "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300"
                  }`}
                >
                  {item.level === "beginner" ? "입문" : "심화"}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6">{item.description}</p>
              
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 p-2 rounded-lg break-all">
                <span>🔗</span>
                {item.path.join(" / ")}
              </div>
            </Link>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="flex flex-col items-center justify-center p-16 text-slate-500">
            <span className="text-6xl mb-4">🏜️</span>
            <p className="text-lg font-medium">현재 필터에 해당하는 기술 데이터가 없습니다.</p>
          </div>
        )}

      </div>
    </div>
  );
}
