'use client';

import { useState } from 'react';

export default function ToggleButton({ initialStatus }: { initialStatus: string }) {
  const [isOn, setIsOn] = useState(initialStatus === 'on');

  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        isOn ? 'bg-blue-600' : 'bg-slate-300'
      }`}
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
          isOn ? 'translate-x-9' : 'translate-x-1'
        }`}
      />
    </button>
  );
}
