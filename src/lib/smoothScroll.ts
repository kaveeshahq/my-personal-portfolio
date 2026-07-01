import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

let lenis: Lenis | null = null;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Initialise Lenis smooth scrolling and keep GSAP ScrollTrigger in sync. */
export function initSmoothScroll(): () => void {
  if (prefersReducedMotion()) return () => {};

  lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  const raf = (time: number) => lenis?.raf(time * 1000);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(raf);
    lenis?.destroy();
    lenis = null;
  };
}

/** Smooth-scroll to an element id (navbar / anchor links). */
export function scrollToSection(id: string): void {
  const target = document.getElementById(id);
  if (!target) return;

  if (lenis) {
    lenis.scrollTo(target, { offset: -72 });
  } else {
    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

/** Scroll back to the very top. */
export function scrollToTop(): void {
  if (lenis) {
    lenis.scrollTo(0);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
