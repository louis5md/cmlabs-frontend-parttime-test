const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export type Ingredient = {
  idIngredient: string;
  strIngredient: string;
  strDescription: string | null;
  strType: string | null;
  strThumb?: string | null;
};

export type MealSummary = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type MealDetailData = MealSummary & {
  strCategory: string | null;
  strArea: string | null;
  strInstructions: string | null;
  strYoutube: string | null;
  [key: `strIngredient${number}`]: string | null;
  [key: `strMeasure${number}`]: string | null;
};

type IngredientsResponse = {
  meals: Ingredient[] | null;
};

type MealsResponse = {
  meals: MealSummary[] | null;
};

type MealDetailResponse = {
  meals: MealDetailData[] | null;
};

async function fetchFromMealDb<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Gagal mengambil data dari TheMealDB.");
  }

  return response.json() as Promise<T>;
}

export async function getIngredients() {
  const data = await fetchFromMealDb<IngredientsResponse>("/list.php?i=list");

  return data.meals ?? [];
}

export async function getMealsByIngredient(ingredientName: string) {
  const query = encodeURIComponent(ingredientName);
  const data = await fetchFromMealDb<MealsResponse>(`/filter.php?i=${query}`);

  return data.meals ?? [];
}

export async function getMealDetail(mealId: string) {
  const query = encodeURIComponent(mealId);
  const data = await fetchFromMealDb<MealDetailResponse>(`/lookup.php?i=${query}`);

  return data.meals?.[0] ?? null;
}

export function getRecipeItems(meal: MealDetailData) {
  return Array.from({ length: 20 }, (_, index) => {
    const position = index + 1;
    const ingredient = meal[`strIngredient${position}`]?.trim();
    const measure = meal[`strMeasure${position}`]?.trim();

    if (!ingredient) {
      return null;
    }

    return {
      ingredient,
      measure: measure || "Secukupnya",
    };
  }).filter((item): item is { ingredient: string; measure: string } => Boolean(item));
}
