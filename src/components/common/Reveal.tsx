import { useRef, type ReactNode, type CSSProperties } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** initial vertical / horizontal offset */
  y?: number;
  x?: number;
  delay?: number;
  duration?: number;
  /** when set, animates direct children with this stagger */
  stagger?: number;
  scale?: number;
  once?: boolean;
}

/** Reusable GSAP scroll-triggered entrance. */
const Reveal = ({
  children,
  className,
  style,
  y = 44,
  x = 0,
  delay = 0,
  duration = 0.9,
  stagger = 0,
  scale = 1,
  once = true,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const targets: Element | HTMLCollection = stagger ? el.children : el;

      gsap.from(targets, {
        opacity: 0,
        y,
        x,
        scale,
        duration,
        delay,
        ease: "power3.out",
        stagger: stagger || 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: once
            ? "play none none none"
            : "play none none reverse",
        },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};

export default Reveal;
