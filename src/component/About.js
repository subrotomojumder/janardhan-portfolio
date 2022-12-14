import React from 'react';
import { FaAward, FaProjectDiagram, FaStackOverflow, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import myPhoto from '../image/IMG_20220228_121555_117.jpg';

const About = () => {
    return (
        <div id='about' className='min-h-screen pb-10 pt-6 max-w-[1300px] mx-auto'>
            <h4 className='text-center text-white text-2xl'>Get to know</h4>
            <h2 className='text-5xl text-yellow-400 text-center font-thin mb-8'>About Me</h2>
           
            <section className='md:flex justify-evenly items-center mx-8'>
                <div className=' max-w-[395px] bg-blue-500 rounded-xl'>
                    <img src={myPhoto} className='rounded-xl max-h-[400px] m-1 transition-transform duration-700 skew-x-6 -skew-y-6 hover:skew-x-0 hover:skew-y-0' alt="" />
                </div>
                <div className='md:w-1/2 mt-16 md:mt-0 ml-8'>
                    <div className='text-white'>
                        <p><span className='text-green-400'>Name:</span><span className='font-semibold text-gray-100'> Janardhan Majumder</span></p>
                        <p><span className='text-green-400'>Birthday:</span><span className='font-semibold text-gray-100'> January 01-2002</span></p>
                        <p><span className='text-green-400'>Phone:</span><span className='font-semibold text-gray-100'> +880 1631901754</span></p>
                        <p><span className='text-green-400'>Email:</span><span className='font-semibold text-gray-100'> janardhanmajumder03@gmail.com</span></p>
                        <p><span className='text-green-400'>Address:</span><span className='font-semibold text-gray-100'> Noakhali, Bangladesh</span></p>
                        <nav className='text-2xl text-blue-300 flex md:justify-start  h-8 mt-2'>
                            <p className='text-lg text-green-400'>Social:</p>
                            <a href="https://github.com/subrotomojumder" target='blank'><FaGithub className='hover:text-orange-400 hover:text-3xl mx-2 hover:mx-[5px]  hover:mt-[-3px]' /></a>
                            <a href="https://www.linkedin.com/in/janardhan-majumder/" target='blank'><FaLinkedin className='hover:text-orange-400 hover:text-3xl mx-2 hover:mx-[5px] hover:mt-[-3px]' /></a>
                            <a href="https://web.facebook.com/subroto.mojumder.14" target='blank'> <FaFacebook className='hover:text-orange-400 hover:text-3xl mx-2 hover:mx-[5px] hover:mt-[-3px]' /></a>
                            <a href="https://www.instagram.com/subroto.mojumder.14/" target='blank'><FaInstagram className='hover:text-orange-400 hover:text-3xl mx-2 hover:mx-[5px] hover:mt-[-3px]' /></a>
                        </nav>
                    </div>
                    <p className='text-white mt-2 mr-2'>
                        I am a self-motivated Front-end Developer with knowledge in ReactJS, Rest API, Express.js,
                        Firebase, Google Authentication, MongoDB, JavaScript, HTML, CSS, Bootstrap, Tailwind and mobile responsive web development.
                        Always passionate about new information and technologies.  Look forward to Working with a creative team to improve my skill and add value.
                        Creating easy-to-use, user-friendly websites and applications is truly a passion of mine.
                    </p>
                </div>
            </section>
            <div className='flex flex-wrap justify-evenly gap-3 lg:gap-6 my-8'>
                <div className='text-center bg-blue-800 border-2 border-red-400 rounded-2xl p-6 hover:border-yellow-300'>
                    <FaAward className='text-3xl mx-auto text-yellow-300' />
                    <h5 className='text-white text-lg mt-3 font-semibold'>Experience</h5>
                    <p className='text-xl text-gray-300'>1+ years</p>
                    <p className='text-gray-300 text-lg'>Learning</p>
                </div>
                <div className='text-center bg-blue-800 border-2 border-red-400 rounded-2xl p-6 hover:border-yellow-300'>
                    <FaProjectDiagram className='text-3xl mx-auto text-yellow-300' />
                    <h5 className='text-white text-lg mt-3 font-semibold mx-3'>Projects</h5>
                    <p className='text-xl text-gray-300'>20+ </p>
                    <p className='text-gray-300 text-lg'>Creating</p>
                </div>
                <div className='text-center bg-blue-800 border-2 border-red-400 rounded-2xl p-6 hover:border-yellow-300'>
                    <FaStackOverflow className='text-3xl mx-auto text-yellow-300' />
                    <h5 className='text-white text-lg mt-3 font-semibold'>Technology</h5>
                    <p className='text-xl text-gray-300'>15+</p>
                    <p className='text-gray-300 text-lg'>Useable</p>
                </div>
            </div>
        </div>
    );
};

export default About;