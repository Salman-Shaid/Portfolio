import React, { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        // Initialize scrollSpy to detect section in view
        scrollSpy.update();

        // Listen for scroll events from react-scroll to update active section on scroll
        Events.scrollEvent.register("begin", (to) => {
            setActiveSection(to);
        });

        Events.scrollEvent.register("end", (to) => {
            setActiveSection(to);
        });

        // Cleanup listeners on unmount
        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    }, []);

    return (
        <div className="bg-[#252734] fixed top-0 left-0 right-0 z-10">
            <div className="navbar container mx-auto">
                {/* Logo */}
                <div className="navbar-start">
                    <a href="/" className="btn btn-ghost text-xl text-white">Salman</a>
                </div>

                {/* Navigation Links */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {["home", "skills", "about", "projects", "contact"].map((section, index) => (
                            <li key={index}>
                                <Link
                                    to={section}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    spy={true} // Detect active section during scroll
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

                {/* Hire Me Button */}
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

