
import { ShoppingCart } from "lucide-react";

export default function CartPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center">
        <ShoppingCart className="mx-auto h-10 w-10 text-gray-400" />
        <h1 className="mt-4 text-xl font-bold">سبد خرید</h1>
        <p className="mt-2 text-sm text-gray-500">
          سبد خرید شما فعلاً خالی است.
        </p>
      </div>
    </main>
  );
}
