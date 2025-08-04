import React from 'react';
import ReviewOnScroll from '../ReviewOnScroll';
import profile from '../../assets/profile.jpg'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 py-20 gap-12"
    >
      {/* Left: Text */}
      <ReviewOnScroll>
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hello, I'm Samiul Kabir
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto md:mx-0">
            I'm a Front-End Developer who loves crafting plain, scalable web applications. My goal is to build solutions that offer both exceptional performance and a delightful user experience.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-gray-800 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:bg-gray-700 hover:shadow-lg"
            >
             ⬇️ Download Resume
            </a>
          </div>
        </div>

  


<div className="flex justify-center md:justify-start gap-4 mt-5">
  <a
    href="https://www.linkedin.com/in/samiul-kabir-11177333a/" 
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-outline btn-sm flex items-center gap-2 "
  >
    <FaLinkedin className="text-blue-600 text-lg" />
    LinkedIn
  </a>

  <a
    href="https://github.com/nafeesalways" 
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-outline btn-sm flex items-center gap-2"
  >
    <FaGithub className="text-gray-50 text-lg " />
    GitHub
  </a>
</div>

      </ReviewOnScroll>

      {/* Right: Image */}
      <ReviewOnScroll>
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Samiul Kabir"
            className="w-72 h-72 object-cover rounded-full border-4 border-blue-400 shadow-lg"
          />
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Home;
