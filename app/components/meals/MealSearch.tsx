"use client";

type MealSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function MealSearch({ value, onChange }: MealSearchProps) {
  return (
    <label className="block">
      <span className="sr-only">Cari meal</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Cari meal berdasarkan nama"
        className="h-12 w-full rounded-lg border border-stone-300 bg-white px-4 text-sm outline-none transition placeholder:text-stone-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
        type="search"
      />
    </label>
  );
}
