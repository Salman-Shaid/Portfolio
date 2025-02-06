import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="bg-[#2A2C39] dark:bg-gray-900 text-gray-900 dark:text-white ">
            <Navbar />
            <main className="">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
