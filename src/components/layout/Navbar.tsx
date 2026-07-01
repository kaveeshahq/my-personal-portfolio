import { useEffect, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { navLinks, socials } from "@/data/navigation";
import { scrollToSection, scrollToTop } from "@/lib/smoothScroll";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    if (id === "home") scrollToTop();
    else scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <button className={styles.logo} onClick={() => go("home")}>
          <span className={styles.logoMark}>K</span>
          <span className={styles.logoText}>
            kaveeshahq<span className={styles.dot}>.</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className={styles.links}>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`${styles.link} ${active === id ? styles.linkActive : ""}`}
                onClick={() => go(id)}
              >
                {label}
                <span className={styles.underline} />
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          {socials.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className={styles.social}
            >
              <Icon />
            </a>
          ))}
          <button className={styles.cta} onClick={() => go("contact")}>
            Let's talk
          </button>
        </div>

        <button
          className={styles.burger}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map(({ id, label }, i) => (
            <li key={id} style={{ transitionDelay: `${0.08 * i + 0.1}s` }}>
              <button
                className={active === id ? styles.mobileActive : ""}
                onClick={() => go(id)}
              >
                <span className={styles.mobileIndex}>
                  0{i + 1}
                </span>
                {label}
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.mobileSocials}>
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
      </div>
    </header>
  );
};

export default Navbar;
