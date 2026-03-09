import ArtFrame from "./_components/ArtFrame";

async function fetchArtDetails() {
  return new Promise<{
    title: string;
    artist: string;
    year: number;
    description: string;
    history: string;
    imageUrl: string;
  }>((resolve) => {
    setTimeout(() => {
      resolve({
        title: "The Persistence of Memory",
        artist: "Salvador Dalí",
        year: 1931,
        description:
          "The well-known surrealist piece introduces the image of the soft melting pocket watch.",
        history:
          "It epitomizes Dalí's theory of 'softness' and 'hardness', which was central to his thinking at the time.",
        imageUrl:
          "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1000",
      });
    }, 500); 
  });
}

export default async function GalleryPage() {
  const art = await fetchArtDetails();

  return (
    <div className="min-h-screen bg-black text-zinc-100 py-16 px-6 sm:px-12 flex flex-col items-center selection:bg-amber-500/30">
      <header className="mb-16 text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 font-medium tracking-wide">
          Lux-Gallery
        </h1>
        <p className="text-zinc-400 font-light tracking-widest uppercase text-sm">
          Premium Art Collection
        </p>
      </header>

      <main className="w-full max-w-5xl">
        <ArtFrame>
          <div className="flex flex-col lg:flex-row bg-zinc-900 overflow-hidden">
            <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto relative bg-zinc-950">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${art.imageUrl})` }}
              />
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-zinc-900 to-zinc-950 border-l border-white/5">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">
                {art.title}
              </h2>
              <h3 className="text-xl md:text-2xl text-amber-200/80 font-light mb-8 italic">
                {art.artist}, {art.year}
              </h3>
              
              <div className="w-16 h-px bg-amber-500/30 mb-8" />
              
              <p className="text-zinc-300 leading-relaxed font-light text-lg mb-8">
                {art.description}
              </p>
              
              <div className="p-6 bg-white/5 rounded-xl border border-white/10 shadow-inner backdrop-blur-sm">
                <h4 className="text-xs font-bold text-amber-500/70 mb-3 uppercase tracking-widest">
                  Historical Context
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed italic">
                  &quot;{art.history}&quot;
                </p>
              </div>
            </div>
          </div>
        </ArtFrame>
      </main>
      
      <footer className="mt-24 text-zinc-600 text-sm font-light">
        © 2026 Lux-Gallery. All rights reserved.
      </footer>
    </div>
  );
}
