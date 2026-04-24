import Link from "next/link";
import { MealDetail } from "@/app/components/meals/MealDetail";
import { EmptyState } from "@/app/components/ui/EmptyState";
import { ErrorState } from "@/app/components/ui/ErrorState";
import { PageShell } from "@/app/components/ui/PageShell";
import { getMealDetail } from "@/app/lib/themealdb";

type MealDetailPageProps = {
  params: Promise<{
    mealId: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: MealDetailPageProps) {
  const { mealId } = await params;
  const meal = await getMealDetail(mealId);

  return {
    title: meal ? `${meal.strMeal} | Meal Explorer` : "Meal Detail | Meal Explorer",
    description: meal ? `Recipe and instructions for ${meal.strMeal}.` : "Meal detail page.",
  };
}

export default async function MealDetailPage({ params }: MealDetailPageProps) {
  const { mealId } = await params;
  let meal;

  try {
    meal = await getMealDetail(mealId);
  } catch {
    return (
      <PageShell>
        <ErrorState />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="mb-8">
        <Link
          href="/ingredients"
          className="text-sm font-medium text-emerald-700 transition hover:text-emerald-900"
        >
          Browse ingredients
        </Link>
      </div>

      {meal ? (
        <MealDetail meal={meal} />
      ) : (
        <EmptyState
          title="Meal tidak ditemukan"
          description="Meal dengan ID tersebut tidak tersedia di TheMealDB."
        />
      )}
    </PageShell>
  );
}
