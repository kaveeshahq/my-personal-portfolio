import {
  FiMapPin,
  FiBriefcase,
  FiBookOpen,
  FiCheckCircle,
  FiDownload,
} from "react-icons/fi";
import Reveal from "@/components/common/Reveal";
import Counter from "@/components/common/Counter";
import AnimatedText from "@/components/common/AnimatedText";
import Magnetic from "@/components/common/Magnetic";
import profile from "@/assets/ring-me.jpeg";
import type { Stat } from "@/types";
import styles from "./About.module.scss";

const facts = [
  { icon: <FiMapPin />, label: "Location", value: "Colombo, Sri Lanka" },
  { icon: <FiBriefcase />, label: "Experience", value: "1.5+ Years" },
  {
    icon: <FiBookOpen />,
    label: "Education",
    value: "BSc (Hons) Computing",
  },
  { icon: <FiCheckCircle />, label: "Availability", value: "Open to work" },
];

const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 1.5, suffix: "+", decimals: 1, label: "Years Experience" },
  { value: 15, suffix: "+", label: "Technologies" },
];

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        {/* Image */}
        <Reveal className={styles.visual} x={-40} y={0}>
          <div className={styles.frame}>
            <img src={profile} alt="Kaveesha Dissanayake" loading="lazy" />
            <div className={styles.badge}>
              <span className={styles.badgeNum}>1.5+</span>
              <span className={styles.badgeLabel}>Years of Experience</span>
            </div>
          </div>
          <div className={styles.accentShape} />
        </Reveal>

        {/* Content */}
        <div className={styles.content}>
          <Reveal className={styles.eyebrow} y={20}>
            <span className={styles.line} /> About Me
          </Reveal>

          <AnimatedText
            as="h2"
            className={styles.title}
            text="Turning ideas into elegant interfaces"
            onScroll
            stagger={0.05}
          />

          <Reveal stagger={0.12} className={styles.text}>
            <p>
              I'm a dedicated Frontend-focused Software Engineer with a strong
              passion for building fast, accessible and beautiful web
              applications. I'm currently pursuing a BSc (Hons) in Computing &
              Information Systems at SUSL, blending academic depth with hands-on
              industry experience.
            </p>
            <p>
              I thrive in dynamic environments, adapt quickly to new tools, and
              care deeply about the details that make an interface feel premium —
              smooth motion, thoughtful spacing and clean, maintainable code.
            </p>
          </Reveal>

          <Reveal stagger={0.1} className={styles.facts}>
            {facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <span className={styles.factIcon}>{fact.icon}</span>
                <div>
                  <span className={styles.factLabel}>{fact.label}</span>
                  <span className={styles.factValue}>{fact.value}</span>
                </div>
              </div>
            ))}
          </Reveal>

          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statNum}>
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          <Magnetic strength={0.3}>
            <a
              href="/resume.pdf"
              download="Kaveesha-Dissanayake-CV.pdf"
              className={styles.cv}
              data-magnetic
            >
              <FiDownload /> Download CV
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default About;
