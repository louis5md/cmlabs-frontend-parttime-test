type RecipeItem = {
  ingredient: string;
  measure: string;
};

type RecipeListProps = {
  items: RecipeItem[];
};

export function RecipeList({ items }: RecipeListProps) {
  return (
    <section className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-stone-950">Recipe</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={`${item.ingredient}-${item.measure}`}
            className="flex items-start justify-between gap-4 rounded-md bg-stone-50 px-4 py-3 text-sm"
          >
            <span className="font-medium text-stone-900">{item.ingredient}</span>
            <span className="text-right text-stone-600">{item.measure}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
