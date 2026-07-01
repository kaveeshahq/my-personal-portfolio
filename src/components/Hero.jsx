import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TypeAnimation } from "react-type-animation";
import { FiArrowDownRight, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Magnetic from "./Magnetic";
import Counter from "./Counter";
import { scrollToSection } from "../lib/smoothScroll";

const stats = [
  { value: 10, suffix: "+", label: "Projects Shipped" },
  { value: 1.5, suffix: "+", decimals: 1, label: "Years Experience" },
  { value: 15, suffix: "+", label: "Technologies" },
];

const Hero = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-anim", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
      }).from(
        ".hero-orb",
        { scale: 0.6, opacity: 0, duration: 1.4, ease: "power2.out" },
        0,
      );

      // Parallax the orbs on pointer move
      const move = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        gsap.to(".orb-1", { x: x * 40, y: y * 40, duration: 1 });
        gsap.to(".orb-2", { x: x * -60, y: y * -30, duration: 1 });
      };
      window.addEventListener("mousemove", move);
      return () => window.removeEventListener("mousemove", move);
    },
    { scope: root },
  );

  return (
    <section
      id="home"
      ref={root}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink pt-24"
    >
      {/* Background layers */}
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="hero-orb orb-1 aurora animate-float-slow left-[8%] top-[15%] h-72 w-72 bg-steel" />
      <div className="hero-orb orb-2 aurora left-[55%] top-[45%] h-96 w-96 bg-gold/40" />
      <div className="hero-orb aurora bottom-[5%] left-[20%] h-64 w-64 bg-navy-600" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/0 to-ink" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        <div className="hero-anim mb-6 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-navy/40 px-4 py-2 text-sm font-medium text-cream-dim backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          Available for new opportunities
        </div>

        <h1 className="hero-anim font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-cream sm:text-6xl md:text-7xl">
          Full-Stack
          <br />
          <span className="text-gradient-gold">Software Engineer</span>
        </h1>

        <p className="hero-anim mx-auto mt-6 max-w-2xl text-lg text-cream-dim md:text-xl">
          I build modern, scalable web applications end-to-end — from
          pixel-perfect interfaces to robust APIs. Working daily with React,
          Node.js, Next.js, Angular & ASP.NET.
        </p>

        <div className="hero-anim mt-4 flex h-8 items-center justify-center text-lg font-semibold text-steel-300">
          <TypeAnimation
            sequence={[
              "Crafting elegant solutions",
              1600,
              "Optimizing performance",
              1600,
              "Driving innovation",
              1600,
              "Solving complex problems",
              1600,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <div className="hero-anim mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Magnetic>
            <button
              onClick={() => scrollToSection("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-semibold text-ink transition-shadow hover:shadow-glow"
            >
              View My Work
              <FiArrowDownRight
                size={20}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </button>
          </Magnetic>
          <Magnetic>
            <a
              href="mailto:kaveeshahq@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-8 py-4 font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <FiMail size={20} />
              Get in Touch
            </a>
          </Magnetic>
        </div>

        <div className="hero-anim mt-8 flex items-center justify-center gap-5">
          <a
            href="https://github.com/kaveeshahq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream-dim transition-all hover:-translate-y-1 hover:text-gold"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/kaveeshahq/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream-dim transition-all hover:-translate-y-1 hover:text-gold"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Stats */}
        <div className="hero-anim mx-auto mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-cream/10 pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-bold text-gold md:text-4xl">
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals || 0}
                />
              </p>
              <p className="mt-2 text-xs text-cream-dim md:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-cream-dim transition-colors hover:text-gold"
        aria-label="Scroll to about"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-cream/30 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-gold" />
        </span>
      </button>
    </section>
  );
};

export default Hero;
