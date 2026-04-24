import Link from "next/link";
import Image from "next/image";
import type { MealSummary } from "@/app/lib/themealdb";

type MealCardProps = {
  meal: MealSummary;
};

export function MealCard({ meal }: MealCardProps) {
  return (
    <Link
      href={`/meals/${meal.idMeal}`}
      className="group overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
    >
      <div className="aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={480}
          height={360}
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h2 className="line-clamp-2 text-base font-semibold leading-6 text-stone-950 group-hover:text-emerald-800">
          {meal.strMeal}
        </h2>
      </div>
    </Link>
  );
}
