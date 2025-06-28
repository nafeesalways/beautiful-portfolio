import React from 'react';

const manageData = [
  {
    title: 'Frontend Development',
    icon: 'https://cdn-icons-png.flaticon.com/128/1055/1055687.png',
    description:
      'Building responsive and interactive user interfaces using React, Tailwind CSS, and modern JavaScript.',
  },
  {
    title: 'Backend Development',
    icon: 'https://cdn-icons-png.flaticon.com/128/906/906343.png',
    description:
      'Creating robust backend systems using Node.js, Express, and MongoDB to support scalable web applications.',
  },
  {
    title: 'Mobile First Design',
    icon: 'https://cdn-icons-png.flaticon.com/128/1008/1008004.png',
    description:
      'Designing and developing mobile-friendly layouts that ensure optimal user experience on all devices.',
  },
  {
    title: 'UI/UX Optimization',
    icon: 'https://cdn-icons-png.flaticon.com/128/1828/1828961.png',
    description:
      'Improving interface usability and design consistency to enhance user satisfaction and engagement.',
  },
];

const Manage = () => {
  return (
    <section id="manage" className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          What I Manage
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {manageData.map((item, index) => (
            <div
              key={index}
              className="card bg-white shadow-md hover:shadow-xl  p-6 rounded-xl text-center ver:-translate-y-1 transition-all border border-blue-500"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manage;
