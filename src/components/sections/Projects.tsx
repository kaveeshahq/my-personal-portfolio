import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { gsap, useGSAP } from "@/lib/gsap";
import SectionHeading from "@/components/common/SectionHeading";
import { projects } from "@/data/projects";
import styles from "./Projects.module.scss";

const Projects = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(`.${styles.row}`).forEach((row) => {
        const media = row.querySelector(`.${styles.media}`);
        const content = row.querySelector(`.${styles.content}`);
        const img = row.querySelector(`.${styles.img}`);

        gsap.from(media, {
          opacity: 0,
          x: row.classList.contains(styles.reverse) ? 60 : -60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 80%" },
        });
        gsap.from(content, {
          opacity: 0,
          x: row.classList.contains(styles.reverse) ? -60 : 60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 80%" },
        });

        // subtle parallax on the image
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      });
    },
    { scope: root },
  );

  return (
    <section id="projects" ref={root} className={styles.projects}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          subtitle="A collection of projects where design meets engineering — each built to be fast, polished and genuinely useful."
        />

        <div className={styles.rows}>
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`${styles.row} ${i % 2 === 1 ? styles.reverse : ""}`}
            >
              <div className={styles.media}>
                <a
                  href={project.live ?? project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mediaLink}
                >
                  <div className={styles.imgWrap}>
                    <img
                      className={styles.img}
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                    <span className={styles.overlay}>
                      <FiArrowUpRight />
                    </span>
                  </div>
                </a>
              </div>

              <div className={styles.content}>
                <span className={styles.index}>
                  0{i + 1}
                  {project.featured && (
                    <span className={styles.featured}>★ Featured</span>
                  )}
                </span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>

                <ul className={styles.tags}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className={styles.actions}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ghost}
                  >
                    <FaGithub /> Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.solid}
                    >
                      Live Demo <FiArrowUpRight />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.more}>
          <a
            href="https://github.com/kaveeshahq"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.moreLink}
          >
            <FaGithub /> View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
