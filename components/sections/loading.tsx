import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="relative h-full">
      <div className="p-3">
        <div className="overflow-hidden h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg">
          <div className="relative h-[300px]">
            <Skeleton className="absolute inset-0 m-4" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-8" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-5 w-24" />
              </div>
              <Skeleton className="h-9 w-28 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CategoryCardSkeleton() {
  return (
    <div className="relative aspect-[16/9]">
      <Skeleton className="absolute inset-0 rounded-lg" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="flex items-center gap-3 mb-3">
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="h-6 w-32" />
        </div>
        <Skeleton className="h-4 w-full mb-4" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function TestimonialCardSkeleton() {
  return (
    <div className="p-6 h-full bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg">
      <div className="flex items-center gap-4 mb-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div>
          <Skeleton className="h-5 w-24 mb-1" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-4 h-4" />
        ))}
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
}
