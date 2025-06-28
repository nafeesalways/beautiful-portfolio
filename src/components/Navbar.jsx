import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><a href='#home' className='text-gray-300 hover:text-white transition-colors'>Home</a></li>
      <li><a href='#about' className='text-gray-300 hover:text-white transition-colors'>About Me</a></li>
      <li><a href='#projects' className='text-gray-300 hover:text-white transition-colors'>Projects</a></li>
      <li><a href='#contact' className='text-gray-300 hover:text-white transition-colors'>Contact</a></li>
      </ul>
    </div>
    <img className='h-10 w-10 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/4997/4997543.png" alt="" />
    <a className="btn btn-ghost text-xl font-bold font-mono text-white">Samiul<span className='text-blue-500'>.tech</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href='#home' className='text-gray-300  hover:text-white transition-colors'>Home</a></li>
      <li><a href='#about' className='text-gray-300 hover:text-white transition-colors'>About Me</a></li>
      <li><a href='#projects' className='text-gray-300 hover:text-white transition-colors'>Projects</a></li>
      <li><a href='#contact' className='text-gray-300 hover:text-white transition-colors'>Contact</a></li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn border border-blue-500/50 text-blue  py-3 px-6 rounded font-medium transition relative hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10">Resume</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;