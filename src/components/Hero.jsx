import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll"; 
const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
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
      const particleCount = Math.floor(window.innerWidth * 0.05);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(255, 215, 0, ${Math.random() * 0.5 + 0.2})`,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Check boundaries
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(255, 215, 0, ${
                0.1 * (1 - distance / 100)
              })`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
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
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full bg-[#100210]"
      />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="inline-block bg-[#30052F] px-4 py-1 rounded-full text-sm font-medium text-white mb-4">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-white mb-4"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5E0A5C] to-[#FF69B4]">
            Kaveesha Dissanayake
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          <TypeAnimation
            sequence={[
              "A passionate developer",
              1000,
              "A creative thinker",
              1000,
              "A problem solver",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-[#5E0A5C] to-[#FF69B4] text-[#100210] font-bold rounded-full hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#5E0A5C]/20"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 bg-transparent border-2 border-[#5E0A5C] text-white font-bold rounded-full hover:bg-[#5E0A5C]/10 hover:transform hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <Link
            to="about"
            smooth={true}
            duration={800}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
