import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='relative'>
            <div>
                <div className='fixed left-12 lg:left-24 top-10 flex justify-start ml-4 z-10' style={{backgroundColor:'rgba(255, 99, 71, 0.2)'}}>
                    <Link to='/'>
                        <button className='btn btn-sm btn-ghost hover:bg-accent text-white'>Home</button>
                    </Link>
                    <Link to='/blog'>
                        <button className='btn btn-sm btn-ghost hover:bg-accent text-white'>Blog</button>
                    </Link>
                </div>
                <Outlet></Outlet>

                <div className='bg-black py-16'>
                    <p className='text-gray-400 text-center text-sm'>© 2023. All copyright reserved by Janardhan.</p>
                    <p className='text-gray-400 text-center text-sm'>janardhanmajumder03@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Main;