import { Skeleton } from '@/components/ui/skeleton';

export const LatestPostCardSkeleton = () => {
  return (
    <div 
      className="rounded-xl border border-white/5 bg-[#1a1c28]/35 p-3.5 flex flex-col gap-2.5" 
      data-testid="latestpostcardskeleton"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-wrap gap-1.5">
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <Skeleton
                key={index}
                className="h-5 w-12 rounded-full bg-zinc-800/40"
              />
            ))}
        </div>
        <Skeleton className="h-3.5 w-3.5 rounded-sm bg-zinc-800/40" />
      </div>
      
      <Skeleton className="h-5 w-11/12 bg-zinc-800/40" />
      
      <Skeleton className="h-3 w-1/3 bg-zinc-800/40" />
    </div>
  );
};
