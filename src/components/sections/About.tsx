import {
  FiMapPin,
  FiBriefcase,
  FiBookOpen,
  FiCheckCircle,
  FiDownload,
} from "react-icons/fi";
import Reveal from "@/components/common/Reveal";
import Counter from "@/components/common/Counter";
import Magnetic from "@/components/common/Magnetic";
import SectionHeading from "@/components/common/SectionHeading";
import type { Stat } from "@/types";
import styles from "./About.module.scss";

const facts = [
  { icon: <FiMapPin />, label: "Location", value: "Colombo, Sri Lanka" },
  { icon: <FiBriefcase />, label: "Experience", value: "2+ Years" },
  {
    icon: <FiBookOpen />,
    label: "Education",
    value: "BSc (Hons) Computing",
  },
  { icon: <FiCheckCircle />, label: "Availability", value: "Open to work" },
];

const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Projects Completed" },
  { value: 2, suffix: "+", decimals: 1, label: "Years Experience" },
  { value: 15, suffix: "+", label: "Technologies" },
];

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into elegant interfaces"
          subtitle="A quick snapshot of who I am, what I do, and how I like to work."
        />

        <div className={styles.body}>
          {/* Bio */}
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
              care deeply about the details that make an interface feel
              premium — smooth motion, thoughtful spacing and clean,
              maintainable code.
            </p>
          </Reveal>

          {/* Quick facts */}
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
        </div>

        {/* Stats */}
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

        {/* CTA */}
        <div className={styles.cta}>
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
