import { useRef } from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import { FaShieldAlt, FaSync, FaUserTie } from "react-icons/fa";
import { gsap, useGSAP } from "@/lib/gsap";
import { socials } from "@/data/navigation";
import { scrollToSection } from "@/lib/smoothScroll";
import Magnetic from "@/components/common/Magnetic";
import AnimatedText from "@/components/common/AnimatedText";
import profile from "@/assets/DUL08743.jpeg";
import styles from "./Hero.module.scss";

const chips = [
  { icon: <FaShieldAlt  />, label: "Confident", cls: "chip1" },
  { icon: <FaSync  />, label: "Agile", cls: "chip2" },
  { icon: <FaUserTie  />, label: "Lead", cls: "chip3" },
];

const Hero = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(`.${styles.eyebrow}`, { y: 24, opacity: 0, duration: 0.7 }, 0.2)
        .from(
          `.${styles.desc}`,
          { y: 24, opacity: 0, duration: 0.7 },
          0.9,
        )
        .from(
          `.${styles.ctas} > *`,
          { y: 24, opacity: 0, duration: 0.7, stagger: 0.12 },
          1.05,
        )
        .from(
          `.${styles.socials} > *`,
          { y: 20, opacity: 0, duration: 0.5, stagger: 0.08 },
          1.3,
        )
        .from(
          `.${styles.imageWrap}`,
          { scale: 0.8, opacity: 0, duration: 1.1, ease: "power2.out" },
          0.5,
        )
        .from(
          `.${styles.chip}`,
          { scale: 0, opacity: 0, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)" },
          1.1,
        )
        .from(
          `.${styles.scroll}`,
          { opacity: 0, y: 10, duration: 0.6 },
          1.6,
        );

      // Continuous floating chips + blobs
      gsap.to(`.${styles.chip}`, {
        y: "+=14",
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
      });
      gsap.to(`.${styles.blob1}`, {
        x: 30,
        y: -20,
        scale: 1.1,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(`.${styles.blob2}`, {
        x: -40,
        y: 20,
        scale: 1.15,
        duration: 10,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: root },
  );

  return (
    <section id="home" ref={root} className={styles.hero}>
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.wave}>👋</span> Hi, I'm Kaveesha
          </p>

          <AnimatedText
            as="h1"
            className={styles.name}
            text="Software"
            delay={0.35}
            stagger={0.1}
          />
          <AnimatedText
            as="h1"
            className={styles.name}
            text="Engineer"
            gradient
            delay={0.5}
            stagger={0.1}
          />

          <p className={styles.desc}>
            I craft premium, interactive web experiences with clean code and
            fluid motion , turning ideas into fast, accessible and memorable
            products using React, TypeScript , Node.js , ASP.NET , SpringBoot  & More.
          </p>

          <div className={styles.ctas}>
            <Magnetic strength={0.35}>
              <button
                className={styles.primary}
                onClick={() => scrollToSection("projects")}
                data-magnetic
              >
                View My Work <FiArrowUpRight />
              </button>
            </Magnetic>
            <Magnetic strength={0.35}>
              <button
                className={styles.secondary}
                onClick={() => scrollToSection("contact")}
                data-magnetic
              >
                Get in Touch
              </button>
            </Magnetic>
          </div>

          <div className={styles.socials}>
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <Icon />
              </a>
            ))}
            <span className={styles.socialLine} />
            <span className={styles.socialLabel}>Follow me</span>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageWrap}>
            <div className={styles.ring} />
            <img src={profile} alt="Kaveesha Dissanayake" loading="eager" />
          </div>
          {chips.map((chip) => (
            <div
              key={chip.label}
              className={`${styles.chip} ${styles[chip.cls]}`}
            >
              <span className={styles.chipIcon}>{chip.icon}</span>
              {chip.label}
            </div>
          ))}
        </div>
      </div>

      <button
        className={styles.scroll}
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to about"
      >
        <span>Scroll</span>
        <FiArrowDown />
      </button>
    </section>
  );
};

export default Hero;
