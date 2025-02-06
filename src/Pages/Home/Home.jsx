import React, { useRef } from 'react';
import Banner from './Banner/Banner';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import MySkills from './MySkils/MySkills';
import Contact from './Contact/Contact';
import Stats from './Stats/Stats';

const Home = () => {
    // Create a ref for the Contact section
    const contactRef = useRef(null);

    return (
        <div>
            <Banner></Banner>
            <MySkills></MySkills>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Stats></Stats>
            <Contact></Contact>
        </div>
    );
};

export default Home;
