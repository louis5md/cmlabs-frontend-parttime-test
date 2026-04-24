import { PageShell } from "@/app/components/ui/PageShell";
import { SkeletonGrid } from "@/app/components/ui/SkeletonGrid";

export default function Loading() {
  return (
    <PageShell>
      <div className="mb-8 h-8 w-64 animate-pulse rounded bg-stone-200" />
      <SkeletonGrid />
    </PageShell>
  );
}
