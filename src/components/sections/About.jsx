import React from 'react';
import ReviewOnScroll from '../ReviewOnScroll';

const About = () => {
    return (
        <section id='about' className='min-h-screen  py-20'>
          <ReviewOnScroll>
            <div className='max-w-3xl mx-auto px-4'>
                <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>About Me</h2>
            </div>
            <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
                <p className='text-gray-300 mb-6'>
                  Hey there! I'm a passionate and creative React Js Developer from Bangladesh.I specialize in crafting modern,fast and responsive web applications using react,Node Js and Tailwind CSS. <br />
                  I love building elegant user interfaces and turning ideas into real world digital solutions.With a strong focus on performance,clean code and seamless user experiences,I'm exploring the latest in web technologies and deliver impactful results. <br />

                  In that way,I am continuously learning and exploring new tech and collaborating in developer communities.Let's build something amazig together.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                <div className='p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all'>
                 <h3 className='text-xl font-bold mb-4'>📘 Education</h3>
                 <ul className='list-disc list-inside text-gray-300 space-y-2'>
                    <li><strong>UnderGraduate Textile Engineer at Textile Engineering College,Chittagong,Bangladesh Affiliated to Bangladesh University Of Textiles(BUTEX)
                        (2022-2026)
                        </strong></li>
                    <li><strong>Relevant Course Work: C,Web Development...
                        </strong></li>
                 </ul>
                </div>
                <div className='p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all'>
                 <h3 className='text-xl font-bold mb-4'>📑 Certification</h3>
                 <div>
                    <h4>Recently learning With Creative IT Academy(2024)</h4>
                    <p>Contributing and Collaborating many projects,ideas and innovations.</p>
                    <p>Developed and maintained platforms for E-commerce based Applications</p>
                 </div>
                </div>
            </div>
      </ReviewOnScroll>
        </section>
    );
};

export default About;