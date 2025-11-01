import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Logo and Name */}
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10"
            src="https://cdn-icons-png.flaticon.com/128/4997/4997543.png"
            alt="Logo"
          />
          <a
            href="#home"
            className="text-xl font-bold font-mono text-white hover:text-blue-400 transition-colors"
          >
            Samiul<span className="text-blue-500">.tech</span>
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-blue-400 font-medium">Samiul.tech</span> — All
            rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
