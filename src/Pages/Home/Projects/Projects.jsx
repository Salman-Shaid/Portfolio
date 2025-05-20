import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

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
        link: "/projects/1" // Use the dynamic project route
    },
    {
        id: 2,
        image: imgC2,
        title: "Rustic Roots",
        subtitle: "Restaurant Management System",
        description: "A full-stack restaurant management system that allows users to order food, manage reservations, and track deliveries.",
        link: "/projects/2" // Use the dynamic project route
    },
    {
        id: 3,
        image: imgC3,
        title: "Sports-Zone",
        subtitle: "Sports Equipment Store",
        description: "An online store for sports equipment built with the MERN stack. Users can browse, add to cart, and purchase items.",
        link: "/projects/3" // Use the dynamic project route
    },
];

const Projects = () => {
    return (
        <div id="projects" className='container mx-auto'>
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

                                {/* View More Button */}
                                <Link
                                    to={project.link} 
                                >
                                    <button className="group relative w-full inline-flex items-center justify-center overflow-hidden rounded-full border border-blue-500 bg-transparent px-6 py-3 text-blue-400 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-700">
                                        {/* Hover Gradient Overlay */}
                                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

                                        {/* Shimmer Line */}
                                        <span className="absolute -left-full top-0 h-full w-full transform skew-x-[-20deg] bg-white opacity-10 group-hover:left-full group-hover:transition-all group-hover:duration-1000"></span>

                                        {/* Text & Icon */}
                                        <span className="relative flex items-center gap-2 text-sm font-semibold tracking-wide group-hover:text-white">
                                            Get Resume
                                            <FaExternalLinkAlt size={25} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
                                        </span>
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Projects;
