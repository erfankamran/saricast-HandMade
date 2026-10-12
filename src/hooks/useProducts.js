
import { useCallback, useEffect, useRef, useState } from "react";

const PAGE_SIZE = 8;

const mockProducts = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  title: `محصول شماره ${index + 1}`,
  price: (index + 1) * 125000,
  image: `https://picsum.photos/seed/product-${index + 1}/400/400`,
}));

function fetchProducts(page) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * PAGE_SIZE;

      resolve({
        items: mockProducts.slice(start, start + PAGE_SIZE),
        hasMore: start + PAGE_SIZE < mockProducts.length,
      });
    }, 800);
  });
}

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const pageRef = useRef(0);
  const requestLock = useRef(false);

  const loadPage = useCallback(async (page, isInitial = false) => {
    if (requestLock.current) return;

    requestLock.current = true;
    setError("");

    if (isInitial) {
      setInitialLoading(true);
    } else {
      setLoadingMore(true);
    }

    try {
      const result = await fetchProducts(page);

      setProducts((current) =>
        isInitial ? result.items : [...current, ...result.items]
      );

      pageRef.current = page;
      setHasMore(result.hasMore);
    } catch {
      setError("بارگذاری محصولات ناموفق بود.");
    } finally {
      requestLock.current = false;
      setInitialLoading(false);
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    loadPage(1, true);
  }, [loadPage]);

  const loadMore = useCallback(() => {
    if (
      requestLock.current ||
      initialLoading ||
      loadingMore ||
      !hasMore
    ) {
      return;
    }

    loadPage(pageRef.current + 1);
  }, [loadPage, initialLoading, loadingMore, hasMore]);

  const retry = useCallback(() => {
    const isInitial = products.length === 0;
    loadPage(isInitial ? 1 : pageRef.current + 1, isInitial);
  }, [loadPage, products.length]);

  return {
    products,
    initialLoading,
    loadingMore,
    error,
    hasMore,
    loadMore,
    retry,
  };
}
