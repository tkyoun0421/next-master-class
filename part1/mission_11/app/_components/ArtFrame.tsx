"use client";

import { ReactNode } from "react";
import LikeButton from "./LikeButton";

interface ArtFrameProps {
  children: ReactNode;
}

export default function ArtFrame({ children }: ArtFrameProps) {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-[0_0_40px_rgba(251,191,36,0.15)] bg-zinc-950 border border-zinc-800">
      <div className="transition-transform duration-700 ease-out group-hover:scale-[1.02]">
        {children}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex flex-col justify-end p-8">
        <div className="flex justify-end pointer-events-auto">
          <LikeButton />
        </div>
      </div>
    </div>
  );
}
