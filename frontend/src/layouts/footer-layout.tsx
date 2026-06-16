function footer() {
  const newDate = new Date();
  const year = newDate.getFullYear();

  return (
    <footer className="flex min-h-[8vh] flex-col items-center justify-between border-t border-white/5 bg-[#0a0b12]/80 backdrop-blur-md px-6 py-4 text-center sm:flex-row sm:px-16 lg:px-24 mt-auto">
      <div className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-500">
        WANDERLUST
      </div>
      <div className="mt-2 text-xs tracking-wider text-zinc-500 sm:mt-0">
        <span className="mr-1">&copy;</span>
        {year} Wanderlust. All Rights Reserved.
      </div>
    </footer>
  );
}

export default footer;
