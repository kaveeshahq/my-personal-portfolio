import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { skillCategories } from "@/data/skills";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="What I Work With"
          title="Skills & Technologies"
          subtitle="A modern toolkit for building fast, scalable and delightful web experiences — grouped by where they live in the stack."
        />

        <Reveal stagger={0.14} className={styles.grid}>
          {skillCategories.map((category) => {
            const CatIcon = category.icon;
            return (
              <div key={category.title} className={styles.card}>
                <div className={styles.cardHead}>
                  <span className={styles.catIcon}>
                    <CatIcon />
                  </span>
                  <div>
                    <h3>{category.title}</h3>
                    <span className={styles.count}>
                      {category.skills.length} skills
                    </span>
                  </div>
                </div>

                <div className={styles.list}>
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <span key={skill.name} className={styles.chip}>
                        <Icon className={styles.chipIcon} />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
