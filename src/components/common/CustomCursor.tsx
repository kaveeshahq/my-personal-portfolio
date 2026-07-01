import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import styles from "./CustomCursor.module.scss";

/** A subtle accent ring + dot that trails the pointer (fine-pointer devices only). */
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    document.body.classList.add(styles.hideNative);

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const xDot = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3" });

    let shown = false;
    const move = (e: MouseEvent) => {
      if (!shown) {
        shown = true;
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
      }
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const isInteractive = (t: EventTarget | null) =>
      t instanceof Element &&
      t.closest("a, button, input, textarea, [data-magnetic], [data-cursor]");

    const over = (e: MouseEvent) => {
      if (isInteractive(e.target)) ring.classList.add(styles.hover);
    };
    const out = (e: MouseEvent) => {
      if (isInteractive(e.target)) ring.classList.remove(styles.hover);
    };
    const leave = () => gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    const enter = () => gsap.to([dot, ring], { opacity: 1, duration: 0.2 });

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);

    return () => {
      document.body.classList.remove(styles.hideNative);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
