
import { Grid2X2 } from "lucide-react";

const categories = [
  "موبایل و لوازم جانبی",
  "پوشاک",
  "کفش",
  "خانه و آشپزخانه",
  "ساعت و اکسسوری",
  "دیجیتال",
];

export default function CategoriesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-6">
      <h1 className="text-xl font-extrabold">دسته‌بندی‌ها</h1>
      <p className="mt-2 text-sm text-gray-500">
        دسته مورد نظرت را انتخاب کن.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className="flex min-h-28 flex-col items-start justify-between rounded-2xl border border-gray-100 bg-white p-4 text-right shadow-sm transition hover:bg-gray-50"
          >
            <Grid2X2 className="text-gray-500" />
            <span className="text-sm font-bold">{category}</span>
          </button>
        ))}
      </div>
    </main>
  );
}
