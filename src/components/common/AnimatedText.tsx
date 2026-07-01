import { useRef, createElement } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./AnimatedText.module.scss";

type Tag = "h1" | "h2" | "h3" | "p" | "span";

interface AnimatedTextProps {
  text: string;
  as?: Tag;
  className?: string;
  delay?: number;
  stagger?: number;
  /** play on scroll into view instead of on mount */
  onScroll?: boolean;
  /** render the words with the accent gradient */
  gradient?: boolean;
}

/** Word-by-word mask reveal (each word slides up from behind a clip). */
const AnimatedText = ({
  text,
  as = "span",
  className,
  delay = 0,
  stagger = 0.08,
  onScroll = false,
  gradient = false,
}: AnimatedTextProps) => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const inners = el.querySelectorAll(`.${styles.inner}`);

      gsap.from(inners, {
        yPercent: 115,
        duration: 1,
        ease: "power4.out",
        delay,
        stagger,
        ...(onScroll
          ? { scrollTrigger: { trigger: el, start: "top 85%" } }
          : {}),
      });
    },
    { scope: ref },
  );

  const words = text.split(" ");

  return createElement(
    as,
    { ref, className: `${styles.text} ${className ?? ""}` },
    words.map((word, i) => (
      <span key={i} className={styles.word}>
        <span
          className={`${styles.inner} ${gradient ? styles.gradient : ""}`}
        >
          {word}
        </span>
        {i < words.length - 1 ? " " : ""}
      </span>
    )),
  );
};

export default AnimatedText;
