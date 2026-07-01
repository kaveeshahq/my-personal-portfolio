import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

interface CounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}

/** Counts up from 0 to `value` the first time it scrolls into view. */
const Counter = ({ value, suffix = "", decimals = 0, className }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const obj = { n: 0 };
          gsap.to(obj, {
            n: value,
            duration: 1.7,
            ease: "power2.out",
            onUpdate: () => setDisplay(obj.n),
          });
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default Counter;
