import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar />
            <Outlet />
        </div>

    );
};

export default RootLayout;