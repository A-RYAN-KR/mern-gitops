type CategoryColors = Map<string, [string, string]>;

const categoryColors: CategoryColors = new Map([
  [
    'Travel', 
    [
      'bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:bg-pink-500/20', 
      'bg-pink-500/80 border border-pink-400 text-white shadow-md shadow-pink-500/20'
    ]
  ],
  [
    'Nature', 
    [
      'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20', 
      'bg-emerald-500/80 border border-emerald-400 text-white shadow-md shadow-emerald-500/20'
    ]
  ],
  [
    'City', 
    [
      'bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500/20', 
      'bg-amber-500/80 border border-amber-400 text-white shadow-md shadow-amber-500/20'
    ]
  ],
  [
    'Adventure', 
    [
      'bg-sky-500/10 border border-sky-500/20 text-sky-400 hover:bg-sky-500/20', 
      'bg-sky-500/80 border border-sky-400 text-white shadow-md shadow-sky-500/20'
    ]
  ],
  [
    'Beaches', 
    [
      'bg-violet-500/10 border border-violet-500/20 text-violet-400 hover:bg-violet-500/20', 
      'bg-violet-500/80 border border-violet-400 text-white shadow-md shadow-violet-500/20'
    ]
  ],
  [
    'Landmarks', 
    [
      'bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20', 
      'bg-rose-500/80 border border-rose-400 text-white shadow-md shadow-rose-500/20'
    ]
  ],
]);

export const categories: string[] = Array.from(categoryColors.keys());

export function getCategoryColors(category: string): [string, string] {
  const colorTuple: [string, string] | undefined = categoryColors.get(category);
  return colorTuple ?? [
    'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20', 
    'bg-cyan-500/80 border border-cyan-400 text-white shadow-md shadow-cyan-500/20'
  ];
}
