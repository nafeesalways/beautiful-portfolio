import React, { useEffect, useState } from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import profile from "../../assets/profile.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Optimized animation variants using transform properties
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Simplified Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Gradient Orbs - Reduced count for performance */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="order-2 lg:order-1 text-center lg:text-left z-10"
          >
            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Samiul Kabir
              </span>
            </motion.h1>

            {/* Subtitle with gradient underline */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200 mb-2">
                Front-End Developer
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto lg:mx-0" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Passionate about crafting beautiful, performant web experiences. I
              specialize in building scalable applications with modern
              technologies like MERN Stack, Next.js, and Tailwind CSS.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                <span className="relative z-10">View My Work</span>
                <HiArrowDown className="relative z-10 group-hover:translate-y-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 border-2 border-blue-500/50 text-blue-400 py-3 px-8 rounded-lg font-medium overflow-hidden transition-all duration-300 hover:text-white hover:border-blue-400"
              >
                <span className="absolute inset-0 bg-blue-500/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <span className="relative z-10">Get In Touch</span>
              </motion.a>
            </motion.div>

            {/* Social Links - Cleaner design */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-gray-500 text-sm font-medium">
                Connect:
              </span>
              <div className="flex gap-3">
                <motion.a
                  href="https://www.linkedin.com/in/samiul-kabir-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>

                <motion.a
                  href="https://github.com/nafeesalways"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-500/10 border border-gray-500/30 text-gray-300 hover:bg-gray-500/20 hover:border-gray-300 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="text-xl" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            <div className="relative group">
              {/* Animated border gradient */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-gradient-spin" />

              {/* Image container */}
              <div className="relative">
                <motion.img
                  src={profile}
                  alt="Samiul Kabir - Front-End Developer"
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-black"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-xl border-4 border-black"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      variants={badgeVariants}
                      className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-3 py-2"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                    </motion.div>
                    <span className="text-sm font-bold">Open To Work</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs font-medium">Scroll Down</span>
            <HiArrowDown className="text-xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* Custom gradient animation keyframe */}
      <style jsx>{`
        @keyframes gradient-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-gradient-spin {
          animation: gradient-spin 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;
