import { IngredientList } from "@/app/components/ingredients/IngredientList";
import { EmptyState } from "@/app/components/ui/EmptyState";
import { ErrorState } from "@/app/components/ui/ErrorState";
import { PageShell } from "@/app/components/ui/PageShell";
import { getIngredients } from "@/app/lib/themealdb";

export const metadata = {
  title: "Ingredients | Meal Explorer",
  description: "Browse ingredients from TheMealDB.",
};

export const dynamic = "force-dynamic";

export default async function IngredientsPage() {
  let ingredients;

  try {
    ingredients = await getIngredients();
  } catch {
    return (
      <PageShell>
        <ErrorState />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          TheMealDB Ingredients
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-950 sm:text-5xl">
          Pilih ingredient favoritmu
        </h1>
        <p className="mt-4 text-base leading-7 text-stone-600">
          Jelajahi ingredient, cari berdasarkan nama, lalu lihat meal yang bisa dibuat dari pilihan
          tersebut.
        </p>
      </div>

      {ingredients.length > 0 ? (
        <IngredientList ingredients={ingredients} />
      ) : (
        <EmptyState
          title="Belum ada ingredient"
          description="TheMealDB tidak mengembalikan data ingredient saat ini."
        />
      )}
    </PageShell>
  );
}
