import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { navLinks, socials } from "@/data/navigation";
import { scrollToSection, scrollToTop } from "@/lib/smoothScroll";
import styles from "./Footer.module.scss";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <button className={styles.logo} onClick={scrollToTop}>
              <span className={styles.mark}>K</span>
              kaveeshahq<span className={styles.dot}>.</span>
            </button>
            <p>
              I craft premium, interactive web experiences with clean code and fluid motion , turning ideas into fast, accessible and memorable products using React, TypeScript , Node.js , ASP.NET , SpringBoot & More.
            </p>
          </div>

          <div className={styles.linksCol}>
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() =>
                      id === "home" ? scrollToTop() : scrollToSection(id)
                    }
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.connectCol}>
            <h4>Connect</h4>
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
            </div>
            <a className={styles.mail} href="mailto:kaveeshahq@gmail.com">
              kaveeshahq@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Kaveesha Dissanayake. All rights
            reserved.
          </p>
        
        </div>
      </div>

      <button
        className={`${styles.toTop} ${visible ? styles.toTopVisible : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FiArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
