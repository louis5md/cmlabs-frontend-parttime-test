type ErrorStateProps = {
  title?: string;
  description?: string;
};

export function ErrorState({
  title = "Data belum bisa dimuat",
  description = "Terjadi kendala saat menghubungi TheMealDB. Coba muat ulang halaman ini.",
}: ErrorStateProps) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-900">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-red-700">{description}</p>
    </div>
  );
}
