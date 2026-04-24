import Image from "next/image";
import { getRecipeItems, type MealDetailData } from "@/app/lib/themealdb";
import { RecipeList } from "./RecipeList";
import { YoutubeEmbed } from "./YoutubeEmbed";

type MealDetailProps = {
  meal: MealDetailData;
};

export function MealDetail({ meal }: MealDetailProps) {
  const recipeItems = getRecipeItems(meal);
  const instructions = meal.strInstructions
    ?.split(/\r?\n/)
    .map((step) => step.trim())
    .filter(Boolean);

  return (
    <article className="space-y-8">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
        <div className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            width={800}
            height={800}
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              {meal.strCategory || "Meal"}
              {meal.strArea ? ` / ${meal.strArea}` : ""}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-950 sm:text-5xl">
              {meal.strMeal}
            </h1>
          </div>

          <section className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-stone-950">Instructions</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-stone-700 sm:text-base">
              {instructions && instructions.length > 0 ? (
                instructions.map((step) => <p key={step}>{step}</p>)
              ) : (
                <p>Instruksi belum tersedia untuk meal ini.</p>
              )}
            </div>
          </section>
        </div>
      </section>

      <RecipeList items={recipeItems} />
      <YoutubeEmbed url={meal.strYoutube} />
    </article>
  );
}
