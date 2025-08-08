import React from 'react';

const manageData = [
  {
    title: 'Frontend Development',
    icon: 'https://cdn-icons-png.flaticon.com/128/1055/1055687.png',
    description:
      'Crafting modern, responsive interfaces using React, Tailwind CSS, and JavaScript to ensure seamless user interaction.',
  },
  {
    title: 'Backend Development',
    icon: 'https://cdn-icons-png.flaticon.com/128/906/906343.png',
    description:
      'Building scalable and secure backend systems with Node.js, Express, and MongoDB to power robust web applications.',
  },
  {
    title: 'Mobile-First Design',
    icon: 'https://cdn-icons-png.flaticon.com/128/1008/1008004.png',
    description:
      'Designing intuitive layouts that prioritize mobile responsiveness, ensuring a consistent experience across all devices.',
  },
  {
    title: 'UI/UX Optimization',
    icon: 'https://cdn-icons-png.flaticon.com/128/1828/1828961.png',
    description:
      'Enhancing usability and aesthetics through thoughtful design choices and user-focused improvements.',
  },
];

const Manage = () => {
  return (
    <section id="manage" className="py-20 bg-gray-50 mb-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          What I Offer
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          I specialize in developing high-quality, user-friendly, and scalable web applications. Here are the core areas I focus on:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {manageData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6 rounded-xl border border-blue-100"
            >
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manage;
