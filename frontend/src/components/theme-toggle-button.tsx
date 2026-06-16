import Moon from '@/assets/svg/moon.svg';

function ThemeToggle() {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur-md">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500"></span>
      </span>
      <img src={Moon} className="h-3.5 w-3.5" alt="moon" />
      <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">Dark Mode</span>
    </div>
  );
}

export default ThemeToggle;
