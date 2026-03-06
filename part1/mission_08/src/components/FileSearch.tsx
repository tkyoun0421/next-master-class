import React from "react";

export default function FileSearch({
  initialQuery,
  actionPath,
  ext,
}: {
  initialQuery?: string;
  actionPath: string;
  ext?: string;
}) {
  return (
    // TODO 1: action 속성에 actionPath를 주입하여 현재 폴더 내에서 검색이 발생하게 하세요.
    // TODO 2: input의 name을 "q"로 설정하고 defaultValue에 initialQuery를 넣으세요.
    <form action={actionPath} className="flex items-center space-x-2 w-full max-w-sm">
      <input
        type="text"
        name="q"
        defaultValue={initialQuery}
        placeholder="현재 폴더에서 검색..."
        className="flex-1 border p-2 rounded text-black"
      />
      {ext && <input type="hidden" name="ext" value={ext} />}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        검색
      </button>
    </form>
  );
}
