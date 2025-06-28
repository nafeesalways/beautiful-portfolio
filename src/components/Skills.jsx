import React from 'react';

const Skills = () => {
    const frontEndSkills = ['React', 'JavaScript', 'TailwindCSS', 'DaisyUi', 'Axios'];
    const backEndSkills = ['Node.js', 'Express.js', 'MongoDb', 'Firebase', 'JWT'];

    return (
        <div>
            
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
                 Skills & Technologies
            </h2>

            {/* 🟩 Combined Grid for Frontend + Backend */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Frontend Skills */}
                <div className='rounded-xl p-6 hover:-translate-y-1 transition-all border'>
                    <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                    <div className='flex flex-wrap gap-2'>
                        {frontEndSkills.map((tech, index) => (
                            <span
                                key={index}
                                className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Backend Skills */}
                <div className='rounded-xl p-6 hover:-translate-y-1 transition-all border'>
                    <h3 className='text-xl font-bold mb-4'>Backend</h3>
                    <div className='flex flex-wrap gap-2'>
                        {backEndSkills.map((tech, index) => (
                            <span
                                key={index}
                                className='bg-green-500/10 text-green-600 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
