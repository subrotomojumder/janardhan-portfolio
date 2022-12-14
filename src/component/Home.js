import React from 'react';
import AnimatedText from 'react-animated-text-content';
import './Home.css'
import myImage from '../image/IMG_20220710_130806_698.jpg';
import background from '../image/light-background-neon-lines.jpg'
import { FaArrowRight, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
    return (
        <div  className='text-center md:text-left min-h-screen' style={{ background: `linear-gradient(90deg, rgba(255, 0, 150, 0.3), rgba(58, 20, 4)), url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}} id='home'>
            <div className='max-w-[1300px] mx-auto pb-20'>
                <div className='pt-16 md:flex flex-row-reverse justify-evenly items-center px-8'>
                    <div className="avatar z-0 p-2 bg-gradient-to-t from-red-500 to-blue-500 transition rounded-full">
                        <div className="w-64 lg:w-96 rounded-full">
                            <img className='' src={myImage} alt="" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-white text-2xl lg:text-4xl mb-2 '>Hello everyone<span className='inline-block animate-bounce'>👋</span></h1>
                        <h2 className='text-3xl lg:text-5xl text-white mb-1'><span className='font-serif'>I</span> am <span className='my-name block md:inline text-2xl md:text-5xl'>Janardhan Majumder</span></h2>
                        <AnimatedText
                            className='text-4xl text-orange-300'
                            type='chars'
                            interval={0.04}
                            duration={1.3}
                            animation={{
                                y: '100px',
                                ease: 'linear',
                                scale: 2.57,
                            }}
                        >
                            Front-end Developer
                        </AnimatedText>
                        <AnimatedText
                            className='font-semibold text-white'
                            type='chars'
                            interval={0.04}
                            duration={1.3}
                            animation={{
                                y: '100px',
                                ease: 'linear',
                                scale: 2.57,
                            }}
                        >
                            Noakhali, Bangladesh
                        </AnimatedText>
                        <nav className='text-2xl text-blue-300 flex justify-center md:justify-start  h-10 mt-4'>
                            <a href="https://github.com/subrotomojumder" target='blank'><FaGithub className='hover:text-orange-400 hover:text-3xl mx-2 hover:mx-[5px]  hover:mt-[-3px]' /></a>
                            <a href="https://www.linkedin.com/in/janardhan-majumder/" target='blank'><FaLinkedin className='hover:text-orange-400 hover:text-3xl mx-2 hover:mx-[5px] hover:mt-[-3px]' /></a>
                            <a href="https://web.facebook.com/subroto.mojumder.14" target='blank'> <FaFacebook className='hover:text-orange-400 hover:text-3xl mx-2 hover:mx-[5px] hover:mt-[-3px]' /></a>
                            <a href="https://www.instagram.com/subroto.mojumder.14/" target='blank'><FaInstagram className='hover:text-orange-400 hover:text-3xl mx-2 hover:mx-[5px] hover:mt-[-3px]' /></a>
                        </nav>
                        <div>
                            <a href='#about' className='btn btn-primary btn-sm mt-4 rounded-full'>A<span className='lowercase'>bout me <FaArrowRight className='inline' /></span></a>
                        </div>
                    </div>
                </div>
                <div className='mt-6 flex justify-center'>
                    <a href='https://drive.google.com/file/d/1dRh0t7MvYpLjRs7K_IyvDDv8ZFGaIH5D/view?usp=share_link' target='blank' className='btn btn-outline font-thin  text-white h-12 hover:border-green-600 hover:btn-primary'>Download Resume</a>
                    <a href='https://drive.google.com/file/d/1ehA0pC0CcgMkom8w9cV4lZK2AARPQCGf/view?usp=share_link' target='blank' className='btn btn-outline font-thin  text-white h-12 hover:border-green-600 hover:btn-primary ml-4'>Download CV</a>
                </div>
            </div>
        </div>
    );
};

export default Home;