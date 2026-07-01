import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";
import styles from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) => {
  return (
    <div className={`${styles.heading} ${styles[align]}`}>
      <Reveal className={styles.eyebrow} y={20}>
        <span className={styles.line} />
        {eyebrow}
      </Reveal>
      <AnimatedText
        as="h2"
        className={styles.title}
        text={title}
        onScroll
        stagger={0.06}
      />
      {subtitle && (
        <Reveal className={styles.subtitle} y={20} delay={0.1}>
          {subtitle}
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;
