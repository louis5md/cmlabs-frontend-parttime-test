import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              TheMealDB Recipe Browser
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-stone-950 sm:text-6xl">
              Temukan meal dari ingredient yang kamu punya.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
              Browse ingredient, filter meal, dan buka detail recipe lengkap dengan measurement,
              instructions, serta video tutorial jika tersedia.
            </p>
            <div className="mt-8">
              <Link
                href="/ingredients"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-700 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200"
              >
                Mulai dari Ingredients
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
            <div className="aspect-[4/3] overflow-hidden rounded-md bg-stone-100">
              <Image
                src="https://www.themealdb.com/images/media/meals/1548772327.jpg"
                alt="A plated meal preview"
                width={640}
                height={480}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
              <div className="rounded-md bg-stone-50 p-3">
                <p className="font-bold text-stone-950">List</p>
                <p className="mt-1 text-stone-500">Ingredients</p>
              </div>
              <div className="rounded-md bg-stone-50 p-3">
                <p className="font-bold text-stone-950">Filter</p>
                <p className="mt-1 text-stone-500">Meals</p>
              </div>
              <div className="rounded-md bg-stone-50 p-3">
                <p className="font-bold text-stone-950">Detail</p>
                <p className="mt-1 text-stone-500">Recipe</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
