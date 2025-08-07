import React from 'react';
import Swal from 'sweetalert2';
import ReviewOnScroll from '../ReviewOnScroll';

const projectData = [
  {
    id: '1',
    name: 'GardenHub',
    image: 'https://camo.githubusercontent.com/c8bd368c7a80235bf3d5c2030922a16615b71fdb90742ba2f81b10f48e1e3b60/68747470733a2f2f696d672e6672656570696b2e636f6d2f667265652d70686f746f2f6d616c652d68616e64732d63757474696e672d6275736865732d776974682d6269672d73636973736f72735f3635313339362d313534392e6a70673f67613d4741312e312e313734343531313632332e313734393338353938302673656d743d6169735f6974656d735f626f6f7374656426773d373430',
    techStack: ['React', 'Tailwind CSS', 'Firebase', 'MongoDB'],
    description: 'A social gardening app where users can share tips, explore gardeners, and manage garden content.',
    liveLink: 'https://garden-test2.netlify.app',
    githubLink: 'https://github.com/nafeesalways/gardening-client',
    serverGithubLink: 'https://github.com/nafeesalways/gardening-server',
  },
  {
    id: '2',
    name: 'Food Tracking System',
    image: 'https://camo.githubusercontent.com/b31d1b67cb7d30d474915e065e608d1754d0147094e24a52c08850d7e2a5f36a/68747470733a2f2f696d672e6672656570696b2e636f6d2f667265652d70686f746f2f776f6d616e2d627579696e672d6672756974732d6f6e6c696e652d7573696e672d6865722d736d61727470686f6e655f32332d323134393234303337342e6a70673f67613d4741312e312e313734343531313632332e313734393338353938302673656d743d6169735f6974656d735f626f6f7374656426773d373430',
    techStack: ['React', 'Node.js', 'MongoDB','Tailwind CSS', 'Firebase'],
    description: 'A smart inventory system to track food items, manage storage, and receive expiry alerts.',
    liveLink: 'https://fresh-keep.netlify.app',
    githubLink: 'https://github.com/nafeesalways/food-tracker-client',
  },
  {
    id: '3',
    name: 'Sports Management System',
    image: 'https://images.unsplash.com/photo-1551543801-fb7bdeb9fc4a?w=500&auto=format&fit=crop&q=60...',
    techStack: ['React', 'Express', 'MongoDB', 'Firebase Auth', 'React Hook Form'],
    description: 'A club operations app featuring court booking, membership, approvals, announcements, and payments.',
    liveLink: 'https://champion-club1.netlify.app',
    githubLink: 'https://github.com/nafeesalways/sports-club-client',
  },
];

const Projects = () => {
 const handleViewDetails = (project) => {
  Swal.fire({
    title: `<h2 style="font-size:1.6rem; font-weight:600; color:#1e293b; margin-bottom:1rem;">${project.name}</h2>`,
    html: `
      <style>
        @media (max-width: 600px) {
          .swal2-popup {
            width: 90% !important;
            padding: 1.5rem !important;
          }
          .swal2-html-container p,
          .swal2-html-container a {
            font-size: 0.95rem !important;
          }
        }
        .project-details p {
          margin: 0.5rem 0;
          font-size: 1rem;
          color: #374151;
        }
        .project-details strong {
          color: #1f2937;
        }
        .project-details a {
          display: inline-block;
          margin-top: 0.25rem;
          text-decoration: none;
        }
      </style>

      <div class="project-details">
        <img 
          src="${project.image}" 
          alt="${project.name}" 
          style="width:100%; max-height:260px; object-fit:cover; border-radius:8px; margin-bottom:1rem;" 
        />

        <p><strong>🔧 Tech Stack:</strong> ${project.techStack.join(', ')}</p>

        <p><strong>📝 Description:</strong> ${project.description}</p>

        <p>
          <a href="${project.liveLink}" target="_blank" style="color:#2563eb; font-weight:500;">🚀 Live Site</a><br/>
          <a href="${project.githubLink}" target="_blank" style="color:#059669; font-weight:500;">💻 Client Repo</a>
          ${
            project.serverGithubLink
              ? `<br/><a href="${project.serverGithubLink}" target="_blank" style="color:#d97706; font-weight:500;">🛠 Server Repo</a>`
              : ''
          }
        </p>
      </div>
    `,
    showCloseButton: true,
    background: '#ffffff',
    color: '#1e293b',
    confirmButtonText: 'Close',
    confirmButtonColor: '#3b82f6',
    width: '600px',
    customClass: {
      popup: 'text-left',
    },
  });
};


  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <ReviewOnScroll>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            🚀 Featured Projects
          </h2>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 p-5 border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-2xl font-semibold mb-3 text-center text-blue-700 dark:text-blue-300">
                  {project.name}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleViewDetails(project)}
                  className="block mx-auto mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:scale-105 transition-all"
                >
                  🔍 Explore Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Projects;
