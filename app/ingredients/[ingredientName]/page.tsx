import Link from "next/link";
import { MealList } from "@/app/components/meals/MealList";
import { EmptyState } from "@/app/components/ui/EmptyState";
import { ErrorState } from "@/app/components/ui/ErrorState";
import { PageShell } from "@/app/components/ui/PageShell";
import { getMealsByIngredient } from "@/app/lib/themealdb";

type IngredientDetailPageProps = {
  params: Promise<{
    ingredientName: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: IngredientDetailPageProps) {
  const { ingredientName } = await params;
  const ingredient = decodeURIComponent(ingredientName);

  return {
    title: `${ingredient} Meals | Meal Explorer`,
    description: `Meals using ${ingredient} from TheMealDB.`,
  };
}

export default async function IngredientDetailPage({ params }: IngredientDetailPageProps) {
  const { ingredientName } = await params;
  const ingredient = decodeURIComponent(ingredientName);
  let meals;

  try {
    meals = await getMealsByIngredient(ingredient);
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
          Back to ingredients
        </Link>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-950 sm:text-5xl">
          Meals with {ingredient}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
          Pilih salah satu meal untuk melihat instructions, recipe, dan video tutorial jika
          tersedia.
        </p>
      </div>

      {meals.length > 0 ? (
        <MealList meals={meals} />
      ) : (
        <EmptyState
          title="Meal tidak tersedia"
          description="Tidak ada meal yang ditemukan untuk ingredient ini."
        />
      )}
    </PageShell>
  );
}
