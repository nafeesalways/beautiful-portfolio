import React, { useState } from "react";
import { motion } from "framer-motion";
import ReviewOnScroll from "../ReviewOnScroll";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
} from "react-icons/hi";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((res) => {
        console.log(res);
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message sent successfully! I'll get back to you soon.");
        setIsSubmitting(false);
      })
      .catch(() => {
        toast.error("Oops! Something went wrong. Please try again.");
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: HiMail,
      label: "Email",
      value: "samiulnafeez@gmail.com",
      href: "mailto:samiulnafeez@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: HiPhone,
      label: "Phone",
      value: "+880 1533 865 826",
      href: "tel:+8801533865826",
      color: "text-green-400",
    },
    {
      icon: HiLocationMarker,
      label: "Location",
      value: "Chittagong, Bangladesh",
      href: null,
      color: "text-purple-400",
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/samiul-kabir-11177333a/",
      color: "text-blue-400",
      hoverColor: "hover:bg-blue-500/10",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/nafeesalways",
      color: "text-white",
      hoverColor: "hover:bg-gray-500/10",
    },
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

  return (
  <section
  id="contact"
  className="min-h-screen py-12 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
>
  {/* Background Elements */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
  <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl" />
  <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />

  <ReviewOnScroll>
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16 px-2 sm:px-0"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>
        <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed px-2 sm:px-0">
          Whether you're interested in collaboration, have a question, or just want to say hi — I'm always open to connecting!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-2 sm:px-0">
        {/* Left: Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div
                    className={`p-2 sm:p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 ${info.color} group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className="text-xl sm:text-2xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-blue-400 transition-colors font-medium break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Connect on Social Media</h3>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 sm:p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl ${social.color} ${social.hoverColor} transition-all duration-300 group`}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl sm:text-2xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4 sm:p-6"
          >
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
              <HiPaperAirplane className="text-blue-400" />
              Response Time
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              I typically respond <span className="text-blue-400 font-semibold">In Time</span>. For urgent inquiries, feel free to call directly.
            </p>
          </motion.div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-all duration-500"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name..."
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-500 transition focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                Your Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Your Email..."
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-500 transition focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                placeholder="Description...."
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-500 transition focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all duration-300 ${
                isSubmitting
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              } text-white`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <HiPaperAirplane className="text-xl" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>

          {/* Privacy Note */}
          <p className="text-gray-500 text-xs text-center mt-6 px-1 sm:px-0">
            Your information is secure and will never be shared with third parties.
          </p>
        </motion.div>
      </div>

      {/* Footer Signature */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12 md:mt-16 px-2 sm:px-0"
      >
        <p className="text-gray-500 text-sm">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
            Samiul Kabir
          </span>
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Frontend Developer | Problem Solver | Tech Enthusiast
        </p>
      </motion.div>
    </div>
  </ReviewOnScroll>
</section>

  );
};

export default Contact;
