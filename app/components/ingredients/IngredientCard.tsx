import Link from "next/link";
import Image from "next/image";
import type { Ingredient } from "@/app/lib/themealdb";

type IngredientCardProps = {
  ingredient: Ingredient;
};

export function IngredientCard({ ingredient }: IngredientCardProps) {
  const description = ingredient.strDescription?.trim();
  const thumbnail = ingredient.strThumb?.trim();

  return (
    <Link
      href={`/ingredients/${encodeURIComponent(ingredient.strIngredient)}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
    >
      <div className="flex aspect-[4/3] items-center justify-center bg-stone-100">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={ingredient.strIngredient}
            width={360}
            height={270}
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white text-2xl font-bold text-emerald-700 shadow-sm">
            {ingredient.strIngredient.slice(0, 1).toUpperCase()}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
          Ingredient
        </span>
        <h2 className="mt-3 text-xl font-semibold text-stone-950 group-hover:text-emerald-800">
          {ingredient.strIngredient}
        </h2>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-stone-600">
          {description || "Lihat daftar meal yang menggunakan ingredient ini."}
        </p>
      </div>
    </Link>
  );
}
