"use client";

import { useDeferredValue, useMemo, useState } from "react";
import type { Ingredient } from "@/app/lib/themealdb";
import { EmptyState } from "@/app/components/ui/EmptyState";
import { IngredientCard } from "./IngredientCard";
import { IngredientSearch } from "./IngredientSearch";

type IngredientListProps = {
  ingredients: Ingredient[];
};

export function IngredientList({ ingredients }: IngredientListProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredIngredients = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return ingredients;
    }

    return ingredients.filter((ingredient) =>
      ingredient.strIngredient.toLowerCase().includes(normalizedQuery),
    );
  }, [ingredients, deferredQuery]);

  return (
    <section className="space-y-6">
      <IngredientSearch value={query} onChange={setQuery} />

      {filteredIngredients.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredIngredients.map((ingredient) => (
            <IngredientCard key={ingredient.idIngredient} ingredient={ingredient} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="Ingredient tidak ditemukan"
          description="Coba gunakan kata kunci lain atau hapus filter pencarian."
        />
      )}
    </section>
  );
}
