
function ProductCardSkeleton() {
    return (
      <div className="animate-pulse overflow-hidden rounded-2xl border border-gray-100 bg-white p-2">
        <div className="aspect-square rounded-xl bg-gray-200" />
        <div className="mt-3 h-4 w-3/4 rounded bg-gray-200" />
        <div className="mt-2 h-4 w-1/2 rounded bg-gray-200" />
      </div>
    );
  }
  
  function ProductCard({ product }) {
    return (
      <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-2">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          decoding="async"
          className="aspect-square w-full rounded-xl bg-gray-100 object-cover"
        />
  
        <h3 className="mt-3 line-clamp-2 text-sm font-medium text-gray-800">
          {product.title}
        </h3>
  
        <p className="mt-2 text-sm font-bold text-gray-900">
          {product.price.toLocaleString("fa-IR")} تومان
        </p>
      </article>
    );
  }
  
  export default function ProductGrid({
    products,
    initialLoading,
    loadingMore,
    error,
    hasMore,
    sentinelRef,
    onRetry,
    onLoadMore,
  }) {
    if (initialLoading) {
      return (
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 6 }, (_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      );
    }
  
    return (
      <section>
        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
  
          {loadingMore &&
            Array.from({ length: 2 }, (_, i) => (
              <ProductCardSkeleton key={`skeleton-${i}`} />
            ))}
        </div>
  
        {error && (
          <div className="py-6 text-center">
            <p className="mb-3 text-sm text-red-600">{error}</p>
            <button
              onClick={onRetry}
              className="rounded-xl bg-gray-900 px-4 py-2 text-sm text-white"
            >
              تلاش مجدد
            </button>
          </div>
        )}
  
        {!error && hasMore && (
          <div
            ref={sentinelRef}
            className="flex min-h-12 items-center justify-center py-4"
          >
            <button
              onClick={onLoadMore}
              className="text-sm text-gray-500"
            >
              {loadingMore ? "در حال بارگذاری..." : "بارگذاری بیشتر"}
            </button>
          </div>
        )}
  
        {!hasMore && products.length > 0 && (
          <p className="py-6 text-center text-sm text-gray-500">
            همه محصولات نمایش داده شدند.
          </p>
        )}
      </section>
    );
  }
  