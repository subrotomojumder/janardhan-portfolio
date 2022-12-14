import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
    const location = useLocation();
    const projectId = location.pathname.split('/')[2];
    const [project, setProject] = useState({});
    const [index, setIndex] = useState(0)
    const { name, image, live, server, client, projectType, screenShort, technology } = project;
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                const project = data.find(pro => pro._id === projectId);
                setProject(project)
            })
    }, [projectId])
    return (
        <div className='min-h-screen my-4'>
            <h1 className='text-3xl md:text-4xl text-center text-white'>Details of <span className='text-orange-100'>{project.name}</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center mx-4'>
                <div className="relative w-full lg:w-96 md:mr-8  mx-auto md:mx-0 md:ml-auto  shadow-2xl">
                    <figure className='mx-3 mt-3'>
                        <img src={image} className='w-full h-56 rounded-xl' alt={name} />
                    </figure>
                    <div className="px-4 py-3">
                        <h2 className="text-2xl text-sky-200 font-semibold">
                            {name}
                        </h2>
                        <p className='text-white'>{projectType}</p>
                        <p className='font-semibold text-green-400https://docs.google.com/presentation/d/11ytJ24A0XNOUqhTcOHrbisJLUFW6UMuDpvW3WmBV_Yk/edit?usp=sharing'>Technologies: <span className='text-gray-200 font-normal'>{technology} etc.</span></p>
                    </div>
                </div>
                <div className=' mx-auto col-span-2 my-2'>
                <h5 className='text-xl text-green-400 font-bold my-3 text-center underline'>See more project</h5>
                        <div className='flex justify-center items-center gap-1 pb-4'>
                            <a href={live} target='_blank' rel="noreferrer"><div className=" btn rounded-full btn-accent">Live-site</div></a>
                            <a href={server} target='_blank' rel="noreferrer"><div className=" btn rounded-full btn-accent">Server-code</div></a>
                            <a href={client} target='_blank' rel="noreferrer"><div className="btn rounded-full btn-accent">Client-code</div></a>
                        </div>
                    {screenShort && <img src={screenShort[index]} className='mx-auto w-full max-w-[600px] rounded-xl' alt="" />}
                    <div className='flex justify-center gap-4'>
                        {screenShort?.map((screen, i) => <img onClick={() => setIndex(i)} className={`mt-6 w-[20%] h-20 rounded-xl p-1 ${i === index && 'border-2'}`} src={screen} alt={name} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;