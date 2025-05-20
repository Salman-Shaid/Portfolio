
import bannerBg from '../../../assets/banner/banner bg.jpg';
import banner2 from '../../../assets/banner/Gradient Business Man LinkedIn Profile Picture (1).png';
import { FaDownload, FaFacebook } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Banner = () => {
    return (
        <div>
            <div id="home"
                className="hero bg-base-200 h-screen bg-cover bg-center "
                style={{ backgroundImage: `url(${bannerBg})` }}  // Adding background image via inline style
            >
                <div className="hero-content flex flex-col-reverse md:grid md:grid-cols-2  items-center mx-5">

                    {/* Text Section with animation */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}  // Initial state for animation
                        animate={{ opacity: 1, y: 0 }}  // Final state
                        transition={{ duration: 1, ease: 'easeOut' }}  // Animation duration and easing
                    >
                        <div className=''>
                            <h1 className="text:6xl mb-4 lg:text-7xl font-bold text-white">Hello! I’m <br /> Salman Shaid</h1>
                            <p className=" text-gray-300 mb-4">
                                Hi, I'm a web developer passionate about building responsive and user-friendly websites. Let's create something amazing together!
                            </p>
                        </div>
                        <div className="flex gap-5 mb-6">
                            <a href="https://www.linkedin.com/in/salman-shaid-93001734b/" className="text-blue-600 ">
                                <FaLinkedin size={32} />
                            </a>
                            <a href="https://github.com/Salman-Shaid?tab=repositories" className="text-gray-500 ">
                                <FaGithub size={32} />
                            </a>
                            <a href="https://www.facebook.com/Salman.Shaid.Sani" className="text-blue-500 ">
                                <FaFacebook size={32} />
                            </a>
                            <a href="https://x.com/Salmanshaid6" className="text-black ">
                                <FaSquareXTwitter size={32} />
                            </a>
                        </div>
                        <a href="https://drive.google.com/file/d/1KwVbkj0PzkegLHH9jmVW6w7fuBMB8k19/view?usp=sharing">
                            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-blue-500 bg-transparent px-6 py-3 text-blue-400 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-700">
                                {/* Hover Gradient Overlay */}
                                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

                                {/* Shimmer Line */}
                                <span className="absolute -left-full top-0 h-full w-full transform skew-x-[-20deg] bg-white opacity-10 group-hover:left-full group-hover:transition-all group-hover:duration-1000"></span>

                                {/* Text & Icon */}
                                <span className="relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wide group-hover:text-white">
                                    Get Resume
                                    <FaDownload className="transition-transform duration-200 group-hover:-translate-y-0.5" />
                                </span>
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