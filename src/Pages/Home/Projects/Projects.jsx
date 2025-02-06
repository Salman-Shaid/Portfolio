import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { FaGithub, FaGlobe } from 'react-icons/fa';

import imgC1 from '../../../assets/courier-z-screenshot/Screenshot 2025-02-05 174436.png';
import imgC2 from '../../../assets/2-screenshot/Screenshot 2025-02-05 180541.png';
import imgC3 from '../../../assets/3-screenshot/Screenshot 2025-02-05 175528.png';

const projects = [
    {
        id: 1,
        image: imgC1,
        title: "Courier-Z",
        subtitle: "Parcel Management System",
        description: "A full-stack logistics platform for booking and tracking parcels, featuring role-based access control for admins and delivery personnel.",
        github: "https://github.com/Salman-Shaid/Courier-Z?tab=readme-ov-file",
        liveSite: "https://assignment12-fe277.web.app/"
    },
    {
        id: 2,
        image: imgC2,
        title: "Rustic Roots",
        subtitle: "Restaurant Management System",
        description: "A full-stack restaurant management system that allows users to order food, manage reservations, and track deliveries.",
        github: "https://github.com/Salman-Shaid/Rustic-Roots-resturent",
        liveSite: "https://assignment11-6503f.web.app/"
    },
    {
        id: 3,
        image: imgC3,
        title: "Sports-Zone",
        subtitle: "Sports Equipment Store",
        description: "An online store for sports equipment built with the MERN stack. Users can browse, add to cart, and purchase items.",
        github: "https://github.com/Salman-Shaid/Sports-Zone",
        liveSite: "https://sports-zone-a10-client.web.app/"
    },
    
];

const Projects = () => {
    return (
        <div id="projects" className='container mx-auto p-6'>
            <h1 className='text-5xl font-bold text-center mt-20'>My Recent 3 Projects</h1>


            <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation={true}
                spaceBetween={30}
                breakpoints={{
                    0: { slidesPerView: 1 },   
                    768: { slidesPerView: 2 },
                }}
                className='w-full'
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <div className='card my-12 w-full bg-[#252734] text-white shadow-2xl rounded-xl'>
                            <div className='w-full overflow-hidden rounded-xl rounded-b-none'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-80 object-cover rounded-xl transform transition duration-500 hover:scale-105'
                                />
                            </div>
                            <div className='p-6'>
                                <h2 className='text-4xl font-semibold mb-2'>{project.title}</h2>
                                <h3 className='text-3xl font-semibold mb-4'>{project.subtitle}</h3>
                                <p className='mb-6'>{project.description}</p>
                                
                                {/* Buttons Section */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {/* GitHub Button */}
                                    <a
                                        href={project.github}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='btn btn-outline py-4 border-gray-400 rounded-full flex items-center justify-center w-full sm:w-1/2'
                                    >
                                        <FaGithub size={25} />
                                        <span className='px-2'>GitHub</span>
                                    </a>

                                 
                                    <a
                                        href={project.liveSite}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='btn btn-outline py-4 border-gray-400 rounded-full flex items-center justify-center w-full sm:w-1/2'
                                    >
                                        <FaGlobe size={25} />
                                        <span className='px-2'>Live Site</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Projects;
