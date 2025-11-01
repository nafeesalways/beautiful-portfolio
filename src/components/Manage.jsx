import React from "react";
import { motion } from "framer-motion";
import { HiCode, HiServer, HiDeviceMobile, HiSparkles } from "react-icons/hi";

const servicesData = [
  {
    title: "Frontend Development",
    icon: HiCode,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    description:
      "Crafting modern, responsive interfaces using React, Next.js, and Tailwind CSS to ensure seamless user interaction and pixel-perfect designs.",
    features: ["React & Next.js", "Responsive Design", "Performance Optimized"],
  },
  {
    title: "Backend Development",
    icon: HiServer,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/20",
    description:
      "Building scalable and secure backend systems with Node.js, Express, and MongoDB to power robust web applications with RESTful APIs.",
    features: ["Node.js & Express", "MongoDB", "API Development"],
  },
  {
    title: "Mobile-First Design",
    icon: HiDeviceMobile,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/20",
    description:
      "Designing intuitive layouts that prioritize mobile responsiveness, ensuring a consistent experience across all devices and screen sizes.",
    features: ["Responsive Layouts", "Cross-Browser", "Accessibility"],
  },
  {
    title: "UI/UX Optimization",
    icon: HiSparkles,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-500/20",
    description:
      "Enhancing usability and aesthetics through thoughtful design choices, user research, and data-driven improvements for better engagement.",
    features: ["User Research", "Prototyping", "A/B Testing"],
  },
];

const Manage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              What I Offer
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I specialize in developing high-quality, user-friendly, and scalable
            web applications. Here are the core areas where I can help bring your
            vision to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm border ${service.borderColor} rounded-2xl p-6 transition-all duration-500 hover:border-opacity-60 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]`}
            >
              {/* Icon Container */}
              <div className="mb-6">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-bold mb-3 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-gray-500"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Ready to start your next project?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-lg font-medium hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300"
          >
            Let's Work Together
            <span className="text-xl">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Manage;
