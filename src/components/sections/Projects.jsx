import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReviewOnScroll from "../ReviewOnScroll";
import {
  HiExternalLink,
  HiCode,
  HiX,
  HiLightningBolt,
  HiCheckCircle,
} from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const projectData = [
  {
    id: "1",
    name: "TicketHub",
    image:
      "https://images.unsplash.com/photo-1538905386057-4a5a580c45a6?w=600&auto=format&fit=crop&q=60",
    techStack: ["Next.js", "NextAuth", "MongoDB", "SSLCOMMERZ"],
    category: "Full Stack",
    description:
      "TicketHub is a modern online ticket booking platform that enables users to browse, book, and manage tickets for movies, concerts, workshops, and community events. The system provides real-time seat selection, secure payments, and automatic e-ticket generation with QR codes.",
    features: [
      "Real-time seat selection",
      "Secure payment integration",
      "QR code ticket generation",
      "Role-based dashboards",
    ],
    challenges:
      "Implementing real-time seat selection without booking conflicts, and maintaining smooth performance during high traffic were major challenges. Role-based access control and ensuring seamless synchronization between user, organizer, and admin dashboards also required careful architectural planning.",
    futurePlans:
      "Introduce AI-powered event recommendations based on user preferences, integrate push notifications for real-time updates, launch a mobile PWA version for better accessibility, and add multi-language support with international payment gateway expansion.",
    liveLink: "https://ticket-hub-online-ticket-booking-sy.vercel.app",
    githubLink: "https://github.com/anik804/TicketHub-Online-Ticket-Booking-System",
  },
  {
    id: "2",
    name: "GardenHub",
    image:
      "https://camo.githubusercontent.com/c8bd368c7a80235bf3d5c2030922a16615b71fdb90742ba2f81b10f48e1e3b60/68747470733a2f2f696d672e6672656570696b2e636f6d2f667265652d70686f746f2f6d616c652d68616e64732d63757474696e672d6275736865732d776974682d6269672d73636973736f72735f3635313339362d313534392e6a70673f67613d4741312e312e313734343531313632332e313734393338353938302673656d743d6169735f6974656d735f626f6f7374656426773d373430",
    techStack: ["React", "Tailwind CSS", "Firebase", "MongoDB"],
    category: "Full Stack",
    description:
      "A social gardening app where users can share tips, explore gardeners, and manage garden content.",
    features: [
      "Social networking for gardeners",
      "Image upload with Firebase",
      "Real-time content updates",
      "Community features",
    ],
    challenges:
      "Implementing secure image uploads with Firebase Storage and managing real-time database updates efficiently.",
    futurePlans:
      "Add AI-powered plant disease detection and community event scheduling features.",
    liveLink: "https://garden-life1.netlify.app",
    githubLink: "https://github.com/nafeesalways/gardening-client",
    serverGithubLink: "https://github.com/nafeesalways/gardening-server",
  },
  {
    id: "3",
    name: "Food Tracking System",
    image:
      "https://camo.githubusercontent.com/b31d1b67cb7d30d474915e065e608d1754d0147094e24a52c08850d7e2a5f36a/68747470733a2f2f696d672e6672656570696b2e636f6d2f667265652d70686f746f2f776f6d616e2d627579696e672d6672756974732d6f6e6c696e652d7573696e672d6865722d736d61727470686f6e655f32332d323134393234303337342e6a70673f67613d4741312e312e313734343531313632332e313734393338353938302673656d743d6169735f6974656d735f626f6f7374656426773d373430",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Firebase"],
    category: "Full Stack",
    description:
      "A smart inventory system to track food items, manage storage, and receive expiry alerts.",
    features: [
      "Food inventory tracking",
      "Expiry notifications",
      "Storage management",
      "Analytics dashboard",
    ],
    challenges:
      "Building a reliable notification system for expiry alerts and optimizing database queries for large inventories.",
    futurePlans:
      "Integrate barcode scanning for faster item entry and expand to a mobile app version.",
    liveLink: "https://freshkeep-test1.netlify.app",
    githubLink: "https://github.com/nafeesalways/food-tracker-client",
  },
  {
    id: "4",
    name: "Sports Management System",
    image:
      "https://images.unsplash.com/photo-1551543801-fb7bdeb9fc4a?w=500&auto=format&fit=crop&q=60",
    techStack: ["React", "Express", "MongoDB", "Firebase Auth", "Stripe"],
    category: "Full Stack",
    description:
      "A club operations app featuring court booking, membership, approvals, announcements, and payments.",
    features: [
      "Court booking system",
      "Membership management",
      "Payment processing",
      "Admin dashboard",
    ],
    challenges:
      "Managing role-based access control for admins and members while keeping the UI intuitive.",
    futurePlans:
      "Add real-time match scheduling, performance analytics, and a mobile-friendly booking system.",
    liveLink: "https://champion-club1.netlify.app",
    githubLink: "https://github.com/nafeesalways/sports-club-client",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
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

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <ReviewOnScroll>
        <div className="max-w-7xl mx-auto relative z-10">
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
                Featured Projects
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work, featuring full-stack applications
              with modern technologies and best practices.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projectData.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-full text-xs text-blue-300 font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300"
                    >
                      <HiLightningBolt className="text-lg" />
                      View Details
                    </motion.button>

                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2.5 bg-gray-800 border border-gray-700 text-white rounded-lg hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center"
                    >
                      <HiExternalLink className="text-xl" />
                    </motion.a>

                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2.5 bg-gray-800 border border-gray-700 text-white rounded-lg hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center"
                    >
                      <FaGithub className="text-xl" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </ReviewOnScroll>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-black/70 transition-all"
                >
                  <HiX className="text-2xl" />
                </button>

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {selectedProject.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-full text-xs text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <HiCode className="text-blue-400" />
                    Overview
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <HiCheckCircle className="text-green-400" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    🚧 Challenges Faced
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.challenges}
                  </p>
                </div>

                {/* Future Plans */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    🌱 Future Plans
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.futurePlans}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300"
                  >
                    <HiExternalLink className="text-xl" />
                    View Live Site
                  </motion.a>

                  <motion.a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg hover:border-blue-500/50 transition-all duration-300"
                  >
                    <FaGithub className="text-xl" />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
