import { Skeleton } from '@/components/ui/skeleton';

export const PostCardSkeleton = () => {
  return (
    <div 
      className="rounded-2xl border border-white/5 bg-[#131520]/40 p-4 flex flex-col h-80 gap-3" 
      data-testid="postcardskeleton"
    >
      <Skeleton className="h-40 w-full rounded-xl bg-zinc-800/40" />
      <div className="flex flex-col gap-2 flex-grow">
        <Skeleton className="h-3 w-1/3 bg-zinc-800/40" />
        <Skeleton className="h-5 w-3/4 bg-zinc-800/40" />
        <Skeleton className="h-10 w-full bg-zinc-800/40 flex-grow" />
        <div className="mt-2 flex gap-1.5">
          <Skeleton className="h-5 w-12 rounded-full bg-zinc-800/40" />
          <Skeleton className="h-5 w-12 rounded-full bg-zinc-800/40" />
        </div>
      </div>
    </div>
  );
};
