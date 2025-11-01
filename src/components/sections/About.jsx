import React from "react";
import { motion } from "framer-motion";
import ReviewOnScroll from "../ReviewOnScroll";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaFigma,
  FaCreditCard,
  FaKey,
  FaServer,
  FaLock,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiStripe,
  SiFirebase,
  SiAxios,
} from "react-icons/si";
import { HiAcademicCap, HiBadgeCheck, HiCode, HiHeart } from "react-icons/hi";

const About = () => {
  // Tech stack data with Stripe and SSLCommerz
const techStack = [
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-orange-400" },
  { name: "NextAuth", icon: FaLock, color: "text-cyan-400" },
  { name: "JWT", icon: FaKey, color: "text-blue-400" },
  { name: "Axios", icon: SiAxios, color: "text-purple-400" },
  { name: "REST API", icon: FaServer, color: "text-teal-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "Figma", icon: FaFigma, color: "text-purple-400" },
  { name: "Stripe", icon: SiStripe, color: "text-indigo-400" },
  { name: "SSLCommerz", icon: FaCreditCard, color: "text-emerald-400" },
];

  // Stats data
  const stats = [
    { label: "Years Experience", value: "1+", icon: HiCode },
    { label: "Projects Completed", value: "10+", icon: HiAcademicCap },
    { label: "Technologies", value: "10+", icon: HiBadgeCheck },
    { label: "Passion Level", value: "100%", icon: HiHeart },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <ReviewOnScroll>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A passionate developer crafting digital experiences with modern
              technologies
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 text-center hover:border-blue-400/40 transition-all duration-300 group"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-400 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Bio Section */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10 hover:border-blue-500/30 transition-all duration-500 mb-12"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                Hey there! I'm a passionate and creative{" "}
                <span className="text-blue-400 font-semibold">
                  Front-End Developer
                </span>{" "}
                from Bangladesh with a deep love for crafting modern, fast, and
                responsive web applications using React, Next.js, Node.js, and
                modern database technologies.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                My programming journey began during my undergraduate years when
                simple curiosity about how websites work led me down the rabbit
                hole of coding. From building my first static page to developing
                dynamic, production-ready applications, I've been on an exciting
                path of{" "}
                <span className="text-purple-400 font-semibold">
                  constant learning and experimentation
                </span>
                .
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                I truly enjoy transforming ideas into real-world digital
                solutions—from intuitive UI/UX design to building
                performance-optimized, scalable platforms. Working on projects
                that blend creativity with problem-solving excites me the most,
                especially when I can collaborate with other developers and
                designers to push boundaries.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Outside of programming, I explore design trends, photography,
                and technology communities. I'm also into sports like cricket
                and football, which help me stay active and balanced. For me,{" "}
                <span className="text-cyan-400 font-semibold">
                  technology isn't just a career—it's a way of bringing ideas to
                  life
                </span>{" "}
                and making an impact.
              </p>
            </div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl px-6 py-4 flex items-center gap-3 hover:border-blue-500/50 transition-all duration-300"
                >
                  <tech.icon className={`text-2xl ${tech.color}`} />
                  <span className="text-white font-medium">{tech.name}</span>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certification Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Education Card */}
            <motion.div
              variants={cardVariants}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <HiAcademicCap className="text-3xl text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-blue-500/30">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    B.Sc. in Textile Engineering
                  </h4>
                  <p className="text-blue-400 font-medium mb-2">
                    Textile Engineering College, Chittagong
                  </p>
                  <p className="text-gray-400 text-sm mb-2">
                    Affiliated with Bangladesh University of Textiles (BUTEX)
                  </p>
                  <p className="text-gray-500 text-sm">2022 - Present</p>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4">
                  <h5 className="text-sm font-semibold text-blue-300 mb-2">
                    Relevant Coursework
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {["C Programming", "Web Development", "Database Systems"].map(
                      (course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-gray-300"
                        >
                          {course}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certification Card */}
            <motion.div
              variants={cardVariants}
              className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(147,51,234,0.15)] transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <HiBadgeCheck className="text-3xl text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Certification & Training
                </h3>
              </div>

              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-purple-500/30">
                  <h4 className="text-lg font-semibold text-white mb-2">
                   Responsive Web Design
                  </h4>
                  <p className="text-purple-400 font-medium mb-2">
                    Creative IT Institute,Chittagong,Bangladesh
                  </p>
                  <p className="text-gray-500 text-sm mb-3">2024</p>

                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>
                        Collaborated on multiple projects and innovative
                        solutions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>
                        Developed and maintained E-commerce platforms
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>
                        Hands-on experience with modern web technologies
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 text-lg mb-6">
              Interested in working together?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-lg font-medium hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300"
            >
              Let's Build Something Amazing
              <span className="text-xl">→</span>
            </motion.a>
          </motion.div>
        </ReviewOnScroll>
      </div>
    </section>
  );
};

export default About;
