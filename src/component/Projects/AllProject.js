import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Project from './Project';

const AllProject = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=> {
        fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])
    return (
        <div id='projects' className='min-h-screen pt-6 max-w-[1300px] mx-auto pb-10'>
            <h4 className='text-center text-gray-300 font-serif text-lg uppercase'>See the my projects and give feedback</h4>
            <h1 className='text-4xl text-white text-center font-thin'>My projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-8 mt-4'>
                {
                    projects?.map(project => <Project key={project._id} project={project}/>)
                }
            </div>
        </div>
    );
};

export default AllProject;