type SkeletonGridProps = {
  count?: number;
};

export function SkeletonGrid({ count = 8 }: SkeletonGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className="h-36 animate-pulse rounded-lg border border-stone-200 bg-white p-5 shadow-sm"
        >
          <div className="h-4 w-2/3 rounded bg-stone-200" />
          <div className="mt-5 h-3 w-full rounded bg-stone-100" />
          <div className="mt-3 h-3 w-4/5 rounded bg-stone-100" />
        </div>
      ))}
    </div>
  );
}
