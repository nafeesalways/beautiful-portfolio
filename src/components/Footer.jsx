import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left: Logo and Name */}
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10"
            src="https://cdn-icons-png.flaticon.com/128/4997/4997543.png"
            alt="Logo"
          />
          <a className="btn btn-ghost text-sm lg:text-xl font-bold font-mono text-white">
            Samiul<span className="text-blue-500">.tech</span>
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right text-sm">
          <h4 className="footer-title mb-1">Legal</h4>
          <p>Copyright © {new Date().getFullYear()} — All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
