import React from 'react';
import bannerBg from '../../../assets/banner/banner bg.jpg';
import banner2 from '../../../assets/banner/Gradient Business Man LinkedIn Profile Picture (1).png';
import { FaDownload, FaFacebook } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { SiVite } from 'react-icons/si';
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import Marquee from "react-fast-marquee";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Banner = () => {
    return (
        <div>
            <div id="home"
                className="hero bg-base-200 md:h-[850px] bg-cover bg-center"
                style={{ backgroundImage: `url(${bannerBg})` }}  // Adding background image via inline style
            >
                <div className="hero-content grid md:grid-cols-2">
                    {/* Text Section with animation */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}  // Initial state for animation
                        animate={{ opacity: 1, y: 0 }}  // Final state
                        transition={{ duration: 1, ease: 'easeOut' }}  // Animation duration and easing
                    >
                        <div>
                            <h1 className="text-7xl font-bold text-white">Hello! I’m <br /> Salman Shaid</h1>
                            <p className="py-6 text-gray-300">
                                Hi, I'm a web developer passionate about building responsive and user-friendly websites. Let's create something amazing together!
                            </p>
                        </div>
                        <div className="flex gap-5 mb-8">
                            <a href="https://www.linkedin.com/in/salman-shaid-93001734b/" className="hover:text-blue-600 transition duration-300">
                                <FaLinkedin size={32} />
                            </a>
                            <a href="https://github.com/Salman-Shaid?tab=repositories" className="hover:text-gray-500 transition duration-300">
                                <FaGithub size={32} />
                            </a>
                            <a href="https://www.facebook.com/Salman.Shaid.Sani" className="hover:text-blue-500 transition duration-300">
                                <FaFacebook size={32} />
                            </a>
                            <a href="https://x.com/Salmanshaid6" className="hover:text-black transition duration-300">
                                <FaSquareXTwitter size={32} />
                            </a>
                        </div>
                        <a href="https://drive.google.com/file/d/1QrsYqQxTo2h_E7KzcAUEFXUNQ-s3tcMi/view?usp=sharing">
                            <button className="btn btn-outline border-gray-400 rounded-full py-6 px-8">
                                Get Resume <span> <FaDownload /> </span>
                            </button>
                        </a>
                    </motion.div>

                    {/* Image Section with animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}  // Initial state for image animation
                        animate={{ opacity: 1, x: 0 }}  // Final state for image animation
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}  // Animation with delay
                    >
                        <img
                            src={banner2}  // Banner image
                            alt="Banner"
                            className=" shadow-2xl rounded-full"
                        />
                    </motion.div>

                </div>

            </div>
        </div>
    );
};

export default Banner;
