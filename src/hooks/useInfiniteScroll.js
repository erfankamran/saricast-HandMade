
import { useEffect, useRef } from "react";

export function useInfiniteScroll({
  onLoadMore,
  enabled,
}) {
  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;

    if (!target || !enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          onLoadMore();
        }
      },
      {
        root: null,
        rootMargin: "300px 0px",
        threshold: 0,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [onLoadMore, enabled]);

  return targetRef;
}
