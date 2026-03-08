import GoalCounter from "./_components/GoalCounter";
import BookmarkButton from "./_components/BookmarkButton";

export default function Dashboard() {
  const examSubjects = [
    { id: 1, name: "민법(총칙)", description: "민법의 기본 원리와 총칙을 다룹니다." },
    { id: 2, name: "행정법", description: "행정조직, 행정작용 및 구제에 관한 법입니다." },
    { id: 3, name: "행정학개론", description: "행정의 이념, 조직, 인사, 재정을 배웁니다." },
    { id: 4, name: "사무관리론", description: "행정업무의 효율적 운영을 위한 규정을 학습합니다." },
    { id: 5, name: "행정사실무법", description: "행정사 실무와 관련된 각종 법령과 절차를 익힙니다." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-8">
      <main className="max-w-3xl mx-auto flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-gray-900">
            행정사 합격 패스 대시보드
          </h1>
          <p className="text-gray-600">
            LawPass에서 제공하는 수험 정보와 목표 관리로 합격을 준비하세요!
          </p>
        </header>

        <section>
          <GoalCounter />
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold border-b pb-2">행정사 핵심 과목</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {examSubjects.map((subject) => (
              <div
                key={subject.id}
                className="p-4 border rounded-lg bg-white shadow-sm flex flex-col gap-3"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-1">{subject.name}</h3>
                  <p className="text-sm text-gray-600">{subject.description}</p>
                </div>
                <div className="mt-auto flex justify-end">
                  <BookmarkButton subject={subject.name} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
