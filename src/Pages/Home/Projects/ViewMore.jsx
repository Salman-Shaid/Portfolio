import React from 'react';
import { Link, useParams } from 'react-router-dom';
import imgC1 from '../../../assets/courier-z-screenshot/Screenshot 2025-02-05 174436.png';
import imgC2 from '../../../assets/2-screenshot/Screenshot 2025-02-05 180541.png';
import imgC3 from '../../../assets/3-screenshot/Screenshot 2025-02-05 175528.png';

const ViewMore = () => {
    const { id } = useParams(); // Get the project id from the URL

    const projects = [
        {
            id: 1,
            image: imgC1,
            title: "Courier-Z",
            subtitle: "Parcel Management System",
            description: "Courier-Z is a comprehensive, full-stack logistics platform designed to streamline the process of booking, managing, and tracking parcels. Built using the MERN stack (MongoDB, Express, React, Node.js), this platform provides a seamless solution for logistics companies, admins, and delivery personnel to handle parcel management efficiently.The system features role-based access control, allowing different user types (admins and delivery personnel) to access specific functionalities tailored to their roles. Admins can manage users, assign parcels to delivery personnel, and track the status of each parcel, while delivery personnel can view and update the status of their assigned parcels in real-time..",
            liveLink: "https://assignment12-fe277.web.app/",
            githubLink: "https://github.com/Salman-Shaid/Courier-Z",
            techStack: "React, Node.js, Express, MongoDB, Firebase Authentication",
            challenges: [
                "Managing role-based access control for different user types.",
                "Implementing real-time tracking updates for parcels.",
                "Ensuring secure authentication and authorization for admins and delivery personnel."
            ],
            improvements: [
                "Adding a mobile app version for real-time parcel tracking.",
                "Implementing advanced analytics for tracking parcel delivery times."
            ]
        },
        {
            id: 2,
            image: imgC2,
            title: "Rustic Roots",
            subtitle: "Restaurant Management System",
            description: "Rustic Roots is a robust, full-stack restaurant management system designed to streamline restaurant operations, from food ordering and reservation management to delivery tracking. Built using the MERN stack (MongoDB, Express, React, Node.js), this platform provides restaurant owners and customers with an intuitive interface to enhance the dining experience and manage day-to-day operations effectively.The system enables users to order food online, make reservations, and track their food deliveries in real-time. Restaurant owners and staff can efficiently manage their menu, track orders, and provide customers with excellent service.",
            liveLink: "https://assignment11-6503f.web.app/",
            githubLink: "https://github.com/Salman-Shaid/Rustic-Roots-resturent",
            techStack: "React, Node.js, Express, MongoDB",
            challenges: [
                "Integrating the restaurant menu and order management system seamlessly.",
                "Implementing reservation management and tracking for users.",
                "Handling user authentication and food ordering system efficiently."
            ],
            improvements: [
                "Adding a mobile app for food ordering and reservations.",
                "Implementing AI-powered recommendations for food items."
            ]
        },
        {
            id: 3,
            image: imgC3,
            title: "Sports-Zone",
            subtitle: "Sports Equipment Store",
            description: "Sports-Zone is a full-fledged e-commerce platform built using the MERN stack (MongoDB, Express, React, Node.js) designed to offer users a seamless and secure shopping experience for sports equipment. The platform caters to sports enthusiasts by providing a vast selection of high-quality gear for various sports including football, cricket, basketball, tennis, and more. It aims to provide an intuitive shopping experience while ensuring secure transactions and smooth product management.",
            liveLink: "https://sports-zone-a10-client.web.app/",
            githubLink: "https://github.com/Salman-Shaid/Sports-Zone",
            techStack: "React, Node.js, Express, MongoDB, Stripe API",
            challenges: [
                "Handling the dynamic inventory of products and stock updates.",
                "Integrating a payment gateway for secure transactions.",
                "Managing the cart and checkout process efficiently."
            ],
            improvements: [
                "Expanding the product catalog to include more sports-related items.",
                "Adding a user review and rating system for products."
            ]
        },
    ];

    // Find the project that matches the id from the URL
    const project = projects.find((project) => project.id.toString() === id);

    if (!project) {
        return <h2 className='text-white'>Project not found</h2>; // Display message if project is not found
    }

    return (
        <div className='container mx-auto  p-6 min-h-screen'>
            <img src={project.image} alt={project.title} className='w-full h-full object-cover rounded-xl mb-6' />
            <h1 className='text-5xl text-white'>Name : {project.title}</h1>
            <h3 className='text-3xl text-white mb-4'>Category : {project.subtitle}</h3>
            
            
            <p className='text-white text-lg mb-6'>{project.description}</p>

            <div className='space-y-4'>
                <div>
                    <h4 className='text-xl text-white font-semibold'>Main Technology Stack</h4>
                    <p className='text-white'>{project.techStack}</p>
                </div>

                <div>
                    <h4 className='text-xl text-white font-semibold'>Challenges Faced</h4>
                    <ul className='list-disc pl-5 text-white'>
                        {project.challenges.map((challenge, index) => (
                            <li key={index}>{challenge}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className='text-xl text-white font-semibold'>Potential Improvements & Future Plans</h4>
                    <ul className='list-disc pl-5 text-white'>
                        {project.improvements.map((improvement, index) => (
                            <li key={index}>{improvement}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='mt-8'>
                <a
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-outline py-4 border-gray-400 rounded-full w-full mb-4'
                >
                    View Project Live
                </a>
                <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-outline  py-4 border-gray-400 rounded-full w-full'
                >
                    View GitHub Repository
                </a>
                <Link to="/">
                <button className='btn my-4 bg-green-600 btn-outline py-4 border-gray-400 rounded-full w-full'> Back To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ViewMore;
