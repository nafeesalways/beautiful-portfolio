import React, { useEffect, useState } from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import profile from "../../assets/profile.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(isLoaded);
  const controls = useAnimation();

  useEffect(() => {
    setIsLoaded(true);
    controls.start("visible");
  }, [controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      rotateX: -15,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 1.2,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -3,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const socialVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const glowAnimation = {
    boxShadow: [
      "0 0 20px rgba(59, 130, 246, 0.3)",
      "0 0 40px rgba(59, 130, 246, 0.6)",
      "0 0 20px rgba(59, 130, 246, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 py-20 gap-12 bg-black text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Left: Text Content */}
      <ReviewOnScroll>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="md:w-1/2 text-center md:text-left z-10"
        >
          {/* Animated Title */}
          <motion.h1
            variants={titleVariants}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Hello, I'm Samiul Kabir
          </motion.h1>

          {/* Description with typewriter effect */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg mb-8 max-w-xl mx-auto md:mx-0"
          >
            I'm a Front-End Developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </motion.p>

          {/* CTA Buttons with stagger */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <motion.a
              href="#projects"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="button-bg"
              />
              <span className="relative z-10">🚀 View Projects</span>
            </motion.a>

            <motion.a
              href="#contact"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="border-2 border-blue-500/50 text-blue-500 py-3 px-6 rounded-lg font-medium relative overflow-hidden group hover:text-white transition-colors duration-300"
            >
              <motion.span className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <span className="relative z-10">✉️ Contact Me</span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-gray-800 text-white py-3 px-6 rounded-lg font-medium relative overflow-hidden group hover:bg-gray-700"
            >
              <motion.span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300" />
              <span className="relative z-10">⬇️ Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Social Links with individual animations */}
          <motion.div
            variants={containerVariants}
            className="flex justify-center md:justify-start gap-4 mt-6"
          >
            <motion.a
              href="https://www.linkedin.com/in/samiul-kabir-11177333a/"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                borderColor: "rgba(59, 130, 246, 0.8)",
              }}
              className="inline-flex items-center gap-2 border border-white/20 py-2 px-4 rounded-lg transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <FaLinkedin className="text-blue-400 text-lg" />
              </motion.div>
              LinkedIn
            </motion.a>

            <motion.a
              href="https://github.com/nafeesalways"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(75, 85, 99, 0.2)",
                borderColor: "rgba(255, 255, 255, 0.5)",
              }}
              className="inline-flex items-center gap-2 border border-white/20 py-2 px-4 rounded-lg transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <FaGithub className="text-white text-lg" />
              </motion.div>
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </ReviewOnScroll>

      {/* Right: Profile Image with enhanced animations */}
      <ReviewOnScroll>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={controls}
          className="flex justify-center relative"
        >
          {/* Rotating border effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{
              background:
                "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)",
              padding: "4px",
            }}
          >
            <div className="w-full h-full bg-black rounded-full" />
          </motion.div>

          {/* Floating image with glow */}
          <motion.img
            src={profile}
            alt="Samiul Kabir"
            className="w-72 h-72 object-cover rounded-full relative z-10"
            animate={floatingAnimation}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            style={{
              filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))",
            }}
          />

          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            animate={glowAnimation}
            style={{
              background:
                "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
            }}
          />
        </motion.div>
      </ReviewOnScroll>
    </section>
  );
};

export default Home;
