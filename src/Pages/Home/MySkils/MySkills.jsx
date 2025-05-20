import React from 'react';
import { BsTools } from 'react-icons/bs';
import { DiCss3, DiMongodb } from 'react-icons/di';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub } from 'react-icons/fa';
import { FaCode, FaJs, FaLaptopCode, FaNode } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiDaisyui, SiExpress, SiMongodb, SiPostman, SiVite } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import cardBg from '../../../assets/banner/cardBG.png';
import Marquee from 'react-fast-marquee';
import { TbBrandJavascript } from 'react-icons/tb';
import { TiHtml5 } from 'react-icons/ti';

const MySkills = () => {
    return (
        <div id="skills" className=" container mx-auto">
            <h1 className="text-5xl mt-20 font-bold text-center mb-8">My Skills</h1>
            <div className='my-8'>
                <Marquee className='' gradient={false} speed={50}>
                    <div className='flex justify-between gap-20 '>
                        <p><FaReact size={70} className="text-blue-600" /></p>
                        <p><FaNode size={70} className="text-green-600" /></p>
                        <p><TbBrandJavascript size={70} className="text-yellow-600" /></p>
                        <p><TiHtml5 size={70} className="text-orange-600" /></p>
                        <p><DiCss3 size={70} className="text-blue-500" /></p>
                        <p><SiExpress size={70} className="text-gray-600" /></p>
                        <p><RiNextjsFill size={70} className="text-black" /></p>
                        <p><RiTailwindCssFill size={70} className="text-teal-500" /></p>
                        <p className=' text-blue-900 rounded-full p-2'><SiVite size={70} /></p>
                        <p><SiDaisyui size={70} className="text-yellow-400" /></p>
                        <p className='pr-8'><SiMongodb size={70} className="text-green-700" /></p>
                    </div>
                </Marquee>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="group card bg-[#252734] text-white shadow-xl p-12 relative overflow-hidden transition-transform transform hover:scale-105">
                    <div className="card-body z-10"> 
                        <h2 className="my-8"><FaLaptopCode size={90} className="group-hover:text-teal-500 transition-colors duration-300" /></h2>
                        <h2 className="text-3xl font-semibold mb-4">Frontend Development</h2>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-2">
                                <FaHtml5 size={28} className="group-hover:text-orange-500 transition-colors duration-300" />
                                <span>HTML</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCss3Alt size={28} className="group-hover:text-blue-500 transition-colors duration-300" />
                                <span>CSS</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <RiTailwindCssFill size={28} className="group-hover:text-teal-400 transition-colors duration-300" />
                                <span>Tailwind</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaJs size={28} className="group-hover:text-yellow-400 transition-colors duration-300" />
                                <span>JavaScript</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaReact size={28} className="group-hover:text-cyan-400 transition-colors duration-300" />
                                <span>React</span>
                            </div>
                        </div>
                    </div>
                   
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                        style={{ backgroundImage: `url(${cardBg})` }}
                    ></div>
                </div>

        
                <div className="group card bg-[#252734] text-white shadow-xl p-12 relative overflow-hidden transition-transform transform hover:scale-105">
                    <div className="card-body z-10">
                        <h2 className="my-8"><FaCode size={80} className="group-hover:text-purple-500 transition-colors duration-300" /></h2>
                        <h2 className="text-3xl mt-2 font-semibold mb-4">Backend Development</h2>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-2">
                                <FaNodeJs size={28} className="group-hover:text-green-500 transition-colors duration-300" />
                                <span>Node.js</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <SiExpress size={28} className="group-hover:text-gray-600 transition-colors duration-300" />
                                <span>Express</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <DiMongodb size={28} className="group-hover:text-green-800 transition-colors duration-300" />
                                <span>MongoDB</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <RiNextjsFill size={28} className="group-hover:text-black transition-colors duration-300" />
                                <span>Next.js</span>
                            </div>
                        </div>
                    </div>
                    {/* Background Image */}
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                        style={{ backgroundImage: `url(${cardBg})` }}
                    ></div>
                </div>

               
                <div className="group card bg-[#252734] text-white shadow-xl p-12 relative overflow-hidden transition-transform transform hover:scale-105">
                    <div className="card-body z-10">
                        <h2 className="my-8"><BsTools size={70} className="group-hover:text-indigo-500 transition-colors duration-300" /></h2>
                        <h2 className="text-3xl font-semibold mb-4">Version Control & Tools</h2>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-2">
                                <FaGithub size={28} className="group-hover:text-black transition-colors duration-300" />
                                <span>GitHub</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <VscVscode size={28} className="group-hover:text-blue-500 transition-colors duration-300" />
                                <span>VS Code</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <SiPostman size={28} className="group-hover:text-orange-600 transition-colors duration-300" />
                                <span>PostMan</span>
                            </div>
                        </div>
                    </div>
                
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                        style={{ backgroundImage: `url(${cardBg})` }}
                    ></div>
                </div>
                <div>

                </div>
            </div>
            
        </div>
    );
};

export default MySkills;
