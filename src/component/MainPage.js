import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import ContactForm from './ContactForm';
import Home from './Home';
import Menubar from './Menubar';
import MySkills from './MySkills';
import AllProject from './Projects/AllProject';

const MainPage = () => {
    const [menuShow, setMenuShow] = useState(true);
    return (
        <div>
            <div className='fixed left-10 lg:left-20 top-10 flex justify-start z-10' >
                <Link to='/'>
                    <button onClick={() => setMenuShow(!menuShow)} style={{backgroundColor:'rgba(255, 99, 71, 0.2)'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 pl-1 ${menuShow ? 'text-green-200' : 'text-yellow-100'}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </Link>
            </div>
            {
                menuShow && <Menubar></Menubar>
            }

            <Home></Home>
            <About></About>
            <MySkills></MySkills>
            <AllProject></AllProject>
            <ContactForm></ContactForm>
        </div>
    );
};

export default MainPage;