import { PageShell } from "@/app/components/ui/PageShell";
import { SkeletonGrid } from "@/app/components/ui/SkeletonGrid";

export default function Loading() {
  return (
    <PageShell>
      <div className="mb-8 space-y-3">
        <div className="h-4 w-32 animate-pulse rounded bg-stone-200" />
        <div className="h-10 w-full max-w-xl animate-pulse rounded bg-stone-200" />
      </div>
      <SkeletonGrid />
    </PageShell>
  );
}
