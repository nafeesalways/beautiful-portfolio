import React from "react";
import ReviewOnScroll from "../ReviewOnScroll";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black"
    >
      <ReviewOnScroll>
        <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <form className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                id="name"
                required
                name="name"
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/60 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                id="email"
                required
                name="email"
                placeholder="example@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/60 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                id="message"
                required
                name="message"
                rows={5}
                placeholder="Your Message..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/60 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Contact;
