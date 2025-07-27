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
    liveLink: 'https://garden-test2.netlify.app/',
    githubLink: 'https://github.com/nafeesalways/gardening-client',
    ServerGithubLink:'https://github.com/nafeesalways/gardening-server',
    challenges: 'Handling real-time data updates and ensuring full mobile responsiveness.',
    improvements: 'Add notifications, advanced search/filter, and user analytics.',
  },
   {
    id: '2',
    name: 'Food Tracking System',
    image: 'https://camo.githubusercontent.com/b31d1b67cb7d30d474915e065e608d1754d0147094e24a52c08850d7e2a5f36a/68747470733a2f2f696d672e6672656570696b2e636f6d2f667265652d70686f746f2f776f6d616e2d627579696e672d6672756974732d6f6e6c696e652d7573696e672d6865722d736d61727470686f6e655f32332d323134393234303337342e6a70673f67613d4741312e312e313734343531313632332e313734393338353938302673656d743d6169735f6974656d735f626f6f7374656426773d373430',
    techStack: ['React', 'Node.js', 'MongoDB', 'React Hook Form'],
    description: 'Parcel delivery management with dynamic pricing, form validation, and parcel tracking.',
    liveLink: 'https://fresh-keep.netlify.app/',
    githubLink: 'https://github.com/nafeesalways/food-tracker-client',
   
    improvements: 'Real-time delivery status, delivery notifications, and admin analytics.',
  },
  {
    id: '3',
    name: 'Subscription Box Platform',
    image: 'https://ideausher.com/wp-content/uploads/2023/05/image-36-1024x576.png',
    techStack: ['React', 'Express', 'MongoDB', 'Firebase Auth'],
    description: 'A job platform for developers and employers with role-based dashboards and authentication.',
    liveLink: 'https://brilliant-brigadeiros-2a64d7.netlify.app/category/1',
    githubLink: 'https://github.com/nafeesalways/react-auth-project',
    challenges: 'Managing protected routes and different user roles.',
    improvements: 'Add resume uploads, interview scheduling, and job analytics.',
  },
 
];

const Projects = () => {
  const handleViewDetails = (project) => {
    Swal.fire({
      title: `<strong>${project.name}</strong>`,
      html: `
        <img src="${project.image}" alt="${project.name}" style="width:100%; height:auto; border-radius:8px; margin-bottom:10px" />
        <p><strong>Tech Stack:</strong> ${project.techStack.join(', ')}</p>
        <p><strong>Description:</strong> ${project.description}</p>
        <p>
          <a href="${project.liveLink}" target="_blank" style="color:#3b82f6">🔗 Live Project</a><br/>
          <a href="${project.githubLink}" target="_blank" style="color:#10b981">📂 GitHub Repository</a>
        </p>
      `,
      showCloseButton: true,
      color: 'blue',
      focusConfirm: false,
      confirmButtonText: 'Close',
      width: '600px',
      customClass: {
        popup: 'text-left',
      },
    });
  };

  return (
    <section id='projects' className='min-h-screen mt-7 flex justify-center py-20 rounded-xl p-6 hover:-translate-y-1 transition-all border'>
    <ReviewOnScroll>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>Featured Projects</h2>
        <div className='grid md:grid-cols-3 gap-6 rounded-xl p-6 hover:-translate-y-1 transition-all border'>
          {projectData.map(project => (
            <div key={project.id} className='bg-white rounded-xl shadow-md p-4 '>
              <img src={project.image} alt={project.name} className='rounded-lg mb-4 h-48 w-full object-cover' />
              <h3 className='text-xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>{project.name}</h3>
              <button
                onClick={() => handleViewDetails(project)}
                className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
              >
                View Details➡️
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
