import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const UserContext = createContext()

const Router = () => {
    const [user, setUser] = useState({
        user: '',
        password: '',
        img: ''
    });

    return (
        <BrowserRouter>
            <UserContext.Provider value={{
                user,
                setUser,
            }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="home" element={<Home />} />
                </Routes>
            </UserContext.Provider>

            <Routes>
                <Route path="register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;