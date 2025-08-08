import React, { useState } from "react";
import ReviewOnScroll from "../ReviewOnScroll";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
        toast.success("Message Sent!");
      })
      .catch(() => {
        toast.error("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black text-white"
    >
      <ReviewOnScroll>
        <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>

          {/* Intro Text */}
          <p className="text-center text-white/80 max-w-2xl mx-auto mb-6 text-lg">
            Whether you're interested in collaboration, have a question, or just want to say hi — I'm always open to connecting!
          </p>

     
      

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                required
                name="name"
                value={formData.name}
                placeholder="Your Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/60 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                required
                name="email"
                value={formData.email}
                placeholder="example@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/60 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                required
                name="message"
                value={formData.message}
                rows={5}
                placeholder="Your Message..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/60 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>

          {/* Signature */}
          <p className="text-white/50 text-center text-sm mt-10">
            — Samiul Kabir, Frontend Developer
          </p>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Contact;
