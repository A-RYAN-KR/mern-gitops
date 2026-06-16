function hero() {
  return (
    <div className="mb-6 flex max-w-2xl flex-1 flex-col justify-end text-zinc-100">
      <h1 className="cursor-text text-3xl font-extrabold md:text-5xl tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
        Journey Beyond Horizons
      </h1>
      
      <p className="my-4 cursor-text text-sm md:text-base leading-relaxed text-zinc-300">
        Dive into the world of travel with stories that transport you to far-off lands. Adventure
        awaits around every corner. It's time to explore the world!
      </p>
      
      <div className="cursor-text flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-violet">
        <span className="h-2 w-2 rounded-full bg-brand-violet animate-pulse shadow-[0_0_8px_rgba(124,58,237,0.8)]"></span>
        Let's Go
      </div>
    </div>
  );
}

export default hero;
