import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-black text-white shadow-sm mb-6">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-900 text-white rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Logo and Site Name */}
          <img
            className="lg:h-10 lg:w-10 w-5 h-5 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/128/4997/4997543.png"
            alt="Logo"
          />
          <a className="btn btn-ghost text-sm lg:text-xl font-bold font-mono text-white">
            Samiul<span className="text-blue-500">.tech</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                href="#home"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-blue-400 transition-colors"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resume Button */}
        <div className="navbar-end">
          <a   href="/resume.pdf"
              download className="btn border border-blue-500/50 text-blue-400 lg:py-3 lg:px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
