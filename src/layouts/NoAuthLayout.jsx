import React from 'react';
import { Outlet } from 'react-router-dom';

const NoAuthLayout = () => {
    return (
        <div>
            No Authenticated Navbar
            <Outlet />
        </div>
    );
}

export default NoAuthLayout;

