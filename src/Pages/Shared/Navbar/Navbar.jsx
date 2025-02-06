import React, { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        
        scrollSpy.update();

     
        Events.scrollEvent.register("begin", (to) => {
            setActiveSection(to);
        });

        Events.scrollEvent.register("end", (to) => {
            setActiveSection(to);
        });

       
        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    }, []);

    return (
        <div className="bg-[#252734] fixed top-0 left-0 right-0 z-10">
            <div className="navbar container mx-auto">
                
                <div className="navbar-start">
                    <a href="/" className="btn btn-ghost text-xl text-white">Salman</a>
                </div>

              \
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {["home", "skills", "about", "projects", "contact"].map((section, index) => (
                            <li key={index}>
                                <Link
                                    to={section}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    spy={true} 
                                    className={`text-white hover:text-gray-400 cursor-pointer pb-1 ${
                                        activeSection === section ? "border-b-2 border-blue-400" : ""
                                    }`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

              
                <div className="navbar-end">
                    <Link to="contact" smooth={true} duration={500} offset={-70} spy={true}>
                        <button
                            className={`btn btn-outline border-gray-400 px-8 rounded-3xl ${
                                activeSection === "contact" ? "border-blue-400 text-blue-400" : "text-white"
                            }`}
                        >
                            Hire me
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

