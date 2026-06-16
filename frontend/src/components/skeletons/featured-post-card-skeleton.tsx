import { Skeleton } from '@/components/ui/skeleton';

export const FeaturedPostCardSkeleton = () => {
  return (
    <div
      className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#131520]/40 p-4 sm:h-48 sm:flex-row"
      data-testid="featurepostcardskeleton"
    >
      {/* Image */}
      <div className="w-full sm:w-1/3 h-40 sm:h-full relative overflow-hidden rounded-xl border border-white/5">
        <Skeleton className="h-full w-full bg-zinc-800/40" />
      </div>

      {/* Content */}
      <div className="flex h-full w-full flex-col justify-between sm:w-2/3 py-1">
        <div className="flex flex-col gap-3">
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
          {/* Title */}
          <Skeleton className="h-6 w-3/4 bg-zinc-800/40" />
          {/* Description */}
          <Skeleton className="h-12 w-full bg-zinc-800/40" />
        </div>

        {/* Author and Time */}
        <div className="mt-3 flex items-center">
          <Skeleton className="h-3 w-1/3 bg-zinc-800/40" />
        </div>
      </div>
    </div>
  );
};
