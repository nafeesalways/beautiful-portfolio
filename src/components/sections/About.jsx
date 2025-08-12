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
        Hey there! I’m a passionate and creative <strong>Front-End Developer</strong> from Bangladesh with a deep love for crafting modern, fast, and responsive web applications using <strong>React</strong>, <strong>Node.js</strong>, and <strong>Database Management</strong>. 
        <br /><br />
        My programming journey began in my undergraduate years, when a simple curiosity about how websites work led me down the rabbit hole of coding. From building my first static page to developing dynamic, production-ready applications, I’ve been on an exciting path of constant learning and experimentation. Over time, I’ve grown into someone who not only writes clean, maintainable code but also focuses on creating seamless and engaging user experiences.
        <br /><br />
        I truly enjoy <strong>transforming ideas into real-world digital solutions</strong>—from intuitive UI/UX design to building performance-optimized, scalable platforms. Working on projects that blend creativity with problem-solving excites me the most, especially when I can collaborate with other developers and designers to push boundaries.
        <br /><br />
        Outside of programming, I’m an avid learner and enjoy exploring <strong>design trends, photography, and technology communities</strong>. I’m also into <strong>sports</strong> like cricket and football, which help me stay active and balanced.
        <br /><br />
        For me, technology isn’t just a career—it’s a way of bringing ideas to life and making an impact. Let’s build something amazing together!
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