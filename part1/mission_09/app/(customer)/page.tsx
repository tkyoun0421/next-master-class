import Image from "next/image";

export default function CustomerHome() {
  return (
    <main className="min-h-screen bg-zinc-950 flex justify-center text-white relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>
      
      <div className="z-10 flex flex-col items-center justify-center text-center max-w-4xl px-6 h-screen">
        <span className="text-[#d8a15a] tracking-[0.3em] text-sm md:text-md uppercase mb-4 font-semibold">New Arrival</span>
        <h1 className="text-5xl md:text-8xl font-serif font-medium mb-8 tracking-tighter mix-blend-plus-lighter">
          Kenya Nyeri<br />AA Top
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 mb-12 max-w-2xl leading-relaxed font-light">
          Experience the vibrant notes of blackberry, grapefruit, and hibiscus in our latest single-origin pour over collection.
        </p>
        <button className="px-10 py-4 bg-[#d8a15a] hover:bg-[#c28f4a] text-black rounded-none font-semibold transition-all hover:scale-105 uppercase tracking-widest text-sm">
          Shop Now
        </button>
      </div>
    </main>
  );
}
