import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(window.innerWidth * 0.03);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: `rgba(57, 88, 134, ${Math.random() * 0.3 + 0.1})`,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        particles.forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 142, 203, ${0.08 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-[#F0F3FA] via-[#D5DEEF] to-[#F0F3FA] pt-24"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full opacity-40"
      />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block bg-[#B1C9EF]/50 px-4 py-2 rounded-full text-sm font-semibold text-[#395886] backdrop-blur-sm border border-[#8AAEE0]/30">
            Welcome to my digital space
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-[#395886] mb-4 leading-tight"
        >
          Full-Stack <br />
          <span className="bg-gradient-to-r from-[#638ECB] to-[#8AAEE0] bg-clip-text text-transparent">
            Software Engineer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-[#638ECB] mb-8 max-w-2xl mx-auto"
        >
          Building modern, scalable web applications. Experienced with React,
          Node.js, Angular , ASP.NET and Next.js.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-[#395886] mb-10 h-16"
        >
          <TypeAnimation
            sequence={[
              "Crafting elegant solutions",
              1500,
              "Optimizing performance",
              1500,
              "Driving innovation",
              1500,
              "Solving complex problems",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-semibold text-[#638ECB]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#395886] text-white rounded-lg hover:bg-[#638ECB] transition-all duration-300 hover:gap-3 cursor-pointer font-semibold"
          >
            Explore My Work
            <FiArrowRight size={20} />
          </Link>
          <a
            href="mailto:kaveeshahiran3011@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#395886] text-[#395886] rounded-lg hover:bg-[#395886]/10 transition-all duration-300 font-semibold"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-3 gap-6 mt-16 md:mt-24 max-w-md mx-auto"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-[#638ECB]">10+</p>
            <p className="text-sm text-[#395886] mt-2">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#638ECB]">1.5+</p>
            <p className="text-sm text-[#395886] mt-2">Years Exp</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#638ECB]">5+</p>
            <p className="text-sm text-[#395886] mt-2">Tech Stack</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#638ECB]"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
