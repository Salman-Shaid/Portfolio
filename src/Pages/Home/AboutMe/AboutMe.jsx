import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img from "../../../assets/banner/aboutme.jpg";
import { FaFaceAngry, FaFacebook, FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const AboutMe = () => {
    const [text, setText] = useState("");
    const fullText =
        "Hello! I'm Salman Shaid, a MERN Stack Developer from Bangladesh. I build web applications using React, Node.js, Express, and MongoDB. I am a MERN Stack Developer specializing in building modern, scalable, and efficient web applications. I have a Diploma in Computer Engineering and a passion for frontend & backend development.With experience in developing both client - side and server - side applications, I focus on delivering high - quality and responsive user interfaces while ensuring robust and scalable backend architectures.Whether it's designing intuitive UIs with React or managing data and API services using Node.js and Express, I enjoy solving complex challenges with clean and efficient code.In addition to my technical skills, I have a keen interest in staying up - to - date with the latest industry trends and constantly improving my knowledge of web technologies.I believe in building applications that not only solve real - world problems but also provide seamless and engaging user experiences.When I’m not coding, I enjoy learning new frameworks, contributing to open - source projects, and exploring various aspects of technology.I’m also passionate about collaborating with like - minded developers to create innovative solutions and push the boundaries of what’s possible in the world of web development.I'm always looking for opportunities to grow as a developer, work on exciting projects, and collaborate with talented teams. Feel free to reach out if you want to discuss web development, tech innovations, or potential collaborations!";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText((prev) => prev + fullText[index]);
            index += 1;
            if (index === fullText.length) clearInterval(interval);
        }, 30); // Adjust the speed of typing here
        return () => clearInterval(interval);
    }, []); // Runs only once when the component mounts

    return (
        <div id="about" className="flex container mx-auto items-center justify-center mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full bg-[#252734] shadow-xl rounded-xl p-8 relative">
                <div className="col-span-1 mb-6 md:mb-0">
                    <img
                        src={img} // Banner image
                        alt="Banner"
                        className=" w-full py-12 px-2 h-full object-cover rounded-full" // Image with shadow and responsive
                    />

                </div>

                <motion.div
                    className="col-span-1 md:col-span-2 p-6 md:p-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold text-white">
                        About Me
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mt-2 mb-6">
                        Salman Shaid - Web Developer
                    </h2>

                    {/* Animated "Handwriting" Text */}
                    <motion.h2
                        className="text-white mb-10 font-serif text-sm sm:text-base md:text-lg"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {text}
                    </motion.h2>
                    <div className=" flex gap-5 mb-8">

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


                </motion.div>
            </div>
        </div>
    );
};

export default AboutMe;
