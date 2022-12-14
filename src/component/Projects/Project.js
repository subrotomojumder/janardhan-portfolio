import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { name, projectType, live, client, server, image, _id} = project;
    return (
        <div className="card relative w-full md:w-full mx-auto bg-slate-400 shadow-2xl">
            <figure className='mx-3 mt-3'>
                <img src={image} className='w-full h-72 rounded-xl overflow-hidden duration-300 transform hover:-translate-8 hover:scale-110' alt={name} />
            </figure>
            <div className="px-4 py-3">
                <h2 className="text-2xl text-sky-200 font-semibold">
                    {name}
                </h2>
                <div className='flex justify-start items-center'>
                    <h5 className='text-lg text-green-400 font-semibold mb-1'>Lets :</h5>
                    <a href={live} target='_blank' rel="noreferrer"><div className=" btn btn-xs btn-link rounded-full hover:btn-accent">Live-site</div></a>
                    <a href={server} target='_blank' rel="noreferrer"><div className=" btn btn-xs btn-link rounded-full hover:btn-accent">Server-code</div></a>
                    <a href={client} target='_blank' rel="noreferrer"><div className="btn btn-xs btn-link rounded-full hover:btn-accent">Client-code</div></a>
                </div>
                <p className='text-white'>{projectType.length > 80 ? projectType.slice(0, 80)+"....": projectType}</p>
                <div className="flex justify-end items-end">
                    <Link to={`/project/${_id}`}><button className='btn btn-md border-none shadow-lg mt-2'>Details see <FaArrowRight /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Project;