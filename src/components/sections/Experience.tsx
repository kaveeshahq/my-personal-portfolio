import { useRef } from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { gsap, useGSAP } from "@/lib/gsap";
import SectionHeading from "@/components/common/SectionHeading";
import { experience } from "@/data/experience";
import styles from "./Experience.module.scss";

const Experience = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        `.${styles.lineFill}`,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: `.${styles.timeline}`,
            start: "top 65%",
            end: "bottom 75%",
            scrub: true,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(`.${styles.item}`).forEach((item) => {
        gsap.from(item.querySelector(`.${styles.card}`), {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 82%" },
        });
        gsap.from(item.querySelector(`.${styles.dot}`), {
          scale: 0,
          duration: 0.5,
          ease: "back.out(2)",
          scrollTrigger: { trigger: item, start: "top 82%" },
        });
      });
    },
    { scope: root },
  );

  return (
    <section id="experience" ref={root} className={styles.experience}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Career Path"
          title="Experience"
          subtitle="My professional journey so far — the roles and moments that shaped how I build."
        />

        <div className={styles.timeline}>
          <div className={styles.line}>
            <div className={styles.lineFill} />
          </div>

          {experience.map((job, i) => (
            <div
              key={job.id}
              className={`${styles.item} ${i % 2 === 1 ? styles.right : styles.left}`}
            >
              <span className={styles.dot} />
              <div className={styles.card}>
                <span className={styles.type}>{job.type}</span>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.company}>{job.company}</p>

                <div className={styles.meta}>
                  <span>
                    <FiCalendar /> {job.period}
                  </span>
                  <span>
                    <FiMapPin /> {job.location}
                  </span>
                </div>

                <p className={styles.desc}>{job.description}</p>

                <ul className={styles.skills}>
                  {job.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
