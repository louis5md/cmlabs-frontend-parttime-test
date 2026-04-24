"use client";

import { useMemo, useState } from "react";
import type { MealSummary } from "@/app/lib/themealdb";
import { EmptyState } from "@/app/components/ui/EmptyState";
import { MealCard } from "./MealCard";
import { MealSearch } from "./MealSearch";

type MealListProps = {
  meals: MealSummary[];
};

export function MealList({ meals }: MealListProps) {
  const [query, setQuery] = useState("");

  const filteredMeals = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return meals;
    }

    return meals.filter((meal) => meal.strMeal.toLowerCase().includes(normalizedQuery));
  }, [meals, query]);

  return (
    <section className="space-y-6">
      <MealSearch value={query} onChange={setQuery} />

      {filteredMeals.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMeals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="Meal tidak ditemukan"
          description="Coba kata kunci lain untuk ingredient ini."
        />
      )}
    </section>
  );
}
