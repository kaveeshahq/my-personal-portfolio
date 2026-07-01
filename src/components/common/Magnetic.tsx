import { useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

/** Pulls its child toward the cursor on hover, springs back on leave. */
const Magnetic = ({ children, strength = 0.4, className }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    gsap.to(el, { x, y, duration: 0.4, ease: "power3.out" });
  };

  const handleLeave = () => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ display: "inline-block" }}
    >
      {children}
    </div>
  );
};

export default Magnetic;
