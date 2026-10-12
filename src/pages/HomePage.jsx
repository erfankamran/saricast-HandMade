
import ProductGrid from "../components/ProductGrid";
import { useProducts } from "../hooks/useProducts";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export default function HomePage() {
  const {
    products,
    loading,
    loadingMore,
    error,
    hasMore,
    loadMore,
  } = useProducts();

  const sentinelRef = useInfiniteScroll({
    onLoadMore: loadMore,
    enabled: hasMore && !loading && !loadingMore && !error,
  });

  return (
    <main className="mx-auto max-w-5xl px-4 py-5">
      <input
        type="search"
        placeholder="جستجوی محصولات..."
        aria-label="جستجوی محصولات"
        className="mb-5 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-gray-500"
      />

      <section className="mb-6 rounded-3xl bg-gradient-to-l from-gray-900 to-gray-600 p-6 text-white">
        <p className="text-sm text-gray-300">پیشنهاد ویژه</p>
        <h2 className="mt-2 text-2xl font-extrabold">
          خریدی ساده و سریع
        </h2>
        <p className="mt-2 text-sm text-gray-200">
          محصولات مورد علاقه‌ات را پیدا کن.
        </p>
      </section>

      <h2 className="mb-4 text-lg font-bold">محصولات فروشگاه</h2>

      <ProductGrid
        products={products}
        loading={loading}
        loadingMore={loadingMore}
        error={error}
        hasMore={hasMore}
        onLoadMore={loadMore}
        sentinelRef={sentinelRef}
      />
    </main>
  );
}
