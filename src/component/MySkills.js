import React from 'react';
import skillsBg from '../image/skills.jpg'

const MySkills = () => {
    return (
        <div id='skills' style={{ background: `linear-gradient(90deg, rgba(255, 0, 150, 0.3), rgba(63, 0, 149, 0.8)), url(${skillsBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
            <div className='min-h-screen py-2 max-w-[1300px] mx-auto'>
                <h1 className='text-5xl text-white text-center font-thin mt-3 mb-1'>Professional Skill</h1>
                <h4 className='text-center text-gray-300 font-serif text-lg'>THE SKILLS I HAVE GAINED AS A DEVELOPER</h4>
                <hr className='h-1 mx-4 lg:mx-12  bg-orange-100' />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-8'>
                    <section className='w-full'>
                        <h2 className='text-green-300 font-semibold text-4xl'>Front-end Technology</h2>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-200 mt-2'>React.js - 85%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[85%]'></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-200 mt-2'>Firebase - 75%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[75%]'></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-200 mt-2'>TailwindCSS - 90%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[90%]'></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-200 mt-2'>Bootstrap - 85%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[85%]'></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-200 mt-2'>Javascript ES6 - 80%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[80%]'></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-200 mt-2'>CSS3 - 90%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[90%]'></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold text-gray-200'>HTML5 - 95%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[95%]'></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-200 mt-2'>Next.js - 30%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[30%]'></div>
                            </div>
                        </div>
                    </section>
                    <section className='w-full'>
                        <h2 className='text-green-300 font-semibold text-3xl'>Back-end Technology</h2>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-200 mt-2'>Express.js - 60%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[60%]'></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-200 mt-2'>MongoDB - 40%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[40%]'></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-200 mt-2'>Node.js - 40%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[40%]'></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-200 mt-2'>Json web token - 60%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[60%]'></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-200 mt-2'>Stripe.js- 40%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[40%]'></div>
                            </div>
                        </div>
                    </section>
                    <section className='w-full'>
                        <h2 className='text-green-300 font-semibold text-3xl'>Tools</h2>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-200 mt-2'>Chrome dev-tool - 60%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[60%]'></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-200 mt-2'>VS code - 85%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[85%]'></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-200 mt-2'>Github - 70%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[70%]'></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-200 mt-2'>Microsoft Office applications - 80%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[80%]'></div>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-200 mt-2'>Postman - 60%</h4>
                            <div className='border bg-green-200 rounded-3xl p-[1px]'>
                                <div className='h-3 bg-gray-400 rounded-l-3xl w-[60%]'></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MySkills;