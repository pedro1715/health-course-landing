import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already in viewport on mount → show immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.1 && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export function useStaggerAnimation(count, threshold = 0.1) {
  const ref = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => {
      Array.from({ length: count }, (_, i) => i).forEach((i) => {
        setTimeout(() => setVisibleItems((p) => [...p, i]), i * 100);
      });
    };

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.1 && rect.bottom > 0) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count, threshold]);

  return { ref, visibleItems };
}
