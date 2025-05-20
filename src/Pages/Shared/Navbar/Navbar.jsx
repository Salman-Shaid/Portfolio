import React, { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; // icons for mobile menu

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        scrollSpy.update();
        Events.scrollEvent.register("begin", (to) => {
            setActiveSection(to);
            setMenuOpen(false); // close menu on link click
        });
        Events.scrollEvent.register("end", (to) => setActiveSection(to));

        return () => {
            window.removeEventListener("scroll", handleScroll);
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    }, []);

    const sections = ["home", "skills", "about", "projects", "contact"];

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${isScrolled
                ? "bg-[#252734]/60 backdrop-blur-md shadow-md"
                : "bg-[#252734]"
                }`}
        >
            <div className="navbar container mx-auto flex justify-between items-center px-4 py-2">
                {/* Logo */}
                <div className="relative inline-block font-extrabold text-white md:text-4xl sm:text-2xl lg:text-4xl">
                    <span className="absolute top-1 left-1 text-blue-800 opacity-70 -z-10">SALMAN</span>
                    <a href="/" className="relative z-10">SALMAN</a>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex space-x-6 text-white">
                    {sections.map((section) => (
                        <li key={section}>
                            <Link
                                to={section}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                spy={true}
                                className={`hover:text-gray-400 cursor-pointer pb-1 transition-all ${activeSection === section
                                    ? "border-b-2 border-dotted border-[#3B5692] text-[#3D5778]"
                                    : ""
                                    }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Hire Me Button */}
                <div className="hidden lg:block">
                    <Link to="contact" smooth={true} duration={500} offset={-70} spy={true}>
                        <button
                            className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-blue-400 bg-transparent px-8 py-3 text-blue-400 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-700
    ${activeSection === "contact" ? "border-blue-400 text-blue-400" : ""}`}
                        >
                            {/* Gradient Overlay on Hover */}
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

                            {/* Shimmer Effect */}
                            <span className="absolute -left-full top-0 h-full w-full transform skew-x-[-20deg] bg-white opacity-10 group-hover:left-full group-hover:transition-all group-hover:duration-1000"></span>

                            {/* Text */}
                            <span className="relative z-10 text-sm font-semibold tracking-wide group-hover:text-white">
                                Hire Me
                            </span>
                        </button>

                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-[#252734] px-6 pb-4 space-y-3 text-white">
                    {sections.map((section) => (
                        <Link
                            key={section}
                            to={section}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            spy={true}
                            className={`block cursor-pointer hover:text-gray-400 ${activeSection === section
                                ? "border-b-2 border-dotted border-[#3B5692] text-[#3D5778]"
                                : ""
                                }`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </Link>
                    ))}
                    <Link to="contact" smooth={true} duration={500} offset={-70} spy={true}>
                        <button
                            className={`w-full btn btn-outline  rounded-full ${activeSection === "contact"
                                ? "border-blue-400 "
                                : "text-blue-400 border-blue-400"
                                }`}
                        >
                            Hire me
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
