import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    const location = useLocation();
    
    // Check if the current route is a project details page
    const isProjectDetailsPage = location.pathname.startsWith('/projects/');

    return (
        <div className="bg-[#2A2C39] dark:bg-gray-900 text-gray-900 dark:text-white">
            {/* Render Navbar only if not on a project details page */}
            {!isProjectDetailsPage && <Navbar />}
            
            <main className="">
                <Outlet />
            </main>
            
            {/* Render Footer only if not on a project details page */}
            {!isProjectDetailsPage && <Footer />}
        </div>
    );
};

export default MainLayout;

