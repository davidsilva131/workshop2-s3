import React from "react";
import { Outlet } from 'react-router-dom'
import './Layout.scss'

function Layout() {
    return (
        <>
            <div className="back">
                <Outlet />
            </div>
        </>
    )
}

export default Layout;
