import bannerBg from '../../../assets/banner/banner bg.jpg';
import banner2 from '../../../assets/banner/Gradient Business Man LinkedIn Profile Picture (1).png';
import { FaDownload, FaFacebook } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const typingContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const typingLetter = {
    hidden: { opacity: 0, y: '0.25em' },
    visible: {
        opacity: 1,
        y: '0em',
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

const Banner = () => {
    const name = "Salman Shaid";

    return (
        <div>
            <div
                id="home"
                className="hero bg-base-200 min-h-[80vh] md:min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${bannerBg})` }}
            >
                <div className="hero-content flex flex-col-reverse md:grid md:grid-cols-2 items-center mx-5 max-w-7xl mx-auto w-full py-10 md:py-20">

                    {/* Text Section with animation */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="text-center md:text-left"
                    >
                        <div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                                Hello! I’m <br />
                                <motion.span
                                    style={{ display: "inline-block", overflow: "hidden", whiteSpace: "nowrap" }}
                                    variants={typingContainer}
                                    initial="hidden"
                                    animate="visible"
                                    aria-label={name}
                                    role="heading"
                                >
                                    {name.split("").map((char, index) => (
                                        <motion.span
                                            key={index}
                                            variants={typingLetter}
                                            style={{ display: "inline-block" }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </motion.span>
                            </h1>
                            <p className="text-gray-300 mb-6 max-w-md mx-auto md:mx-0">
                                Hi, I'm a web developer passionate about building responsive and user-friendly websites. Let's create something amazing together!
                            </p>
                        </div>

                        <div className="flex justify-center md:justify-start gap-6 mb-8 text-2xl">
                            <a href="https://www.linkedin.com/in/salman-shaid-93001734b/" className="text-blue-600 hover:text-blue-800 transition-colors">
                                <FaLinkedin size={32} />
                            </a>
                            <a href="https://github.com/Salman-Shaid?tab=repositories" className="text-gray-500 hover:text-gray-700 transition-colors">
                                <FaGithub size={32} />
                            </a>
                            <a href="https://www.facebook.com/Salman.Shaid.Sani" className="text-blue-500 hover:text-blue-700 transition-colors">
                                <FaFacebook size={32} />
                            </a>
                            <a href="https://x.com/Salmanshaid6" className="text-black hover:text-gray-800 transition-colors">
                                <FaSquareXTwitter size={32} />
                            </a>
                        </div>

                        <a href="https://drive.google.com/file/d/1KwVbkj0PzkegLHH9jmVW6w7fuBMB8k19/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-blue-500 bg-transparent px-6 py-3 text-blue-400 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-700">
                                {/* Hover Gradient Overlay */}
                                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

                                {/* Shimmer Line */}
                                <span className="absolute -left-full top-0 h-full w-full transform skew-x-[-20deg] bg-white opacity-10 group-hover:left-full group-hover:transition-all group-hover:duration-1000"></span>

                                {/* Text & Icon */}
                                <span className="relative flex items-center gap-2 text-sm font-semibold tracking-wide group-hover:text-white">
                                    Get Resume
                                    <FaDownload className="transition-transform duration-200 group-hover:-translate-y-0.5" />
                                </span>
                            </button>
                        </a>
                    </motion.div>

                    {/* Image Section with animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        className="flex justify-center mb-10 md:mb-0"
                    >
                        <img
                            src={banner2}
                            alt="Banner"
                            className="shadow-2xl rounded-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                        />
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
