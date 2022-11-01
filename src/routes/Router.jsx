import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../components/login/Layout";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";

export const UserContext = createContext()

const Router = () => {
    const [user, setUser] = useState({
        user: '',
        password: '',
        img: '',
        name: ''
    });

    return (
        <BrowserRouter>
            <UserContext.Provider value={{
                user,
                setUser,
            }}>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                    <Route path="home" element={<Home />} />
                </Routes>
            </UserContext.Provider>


        </BrowserRouter>
    )
}
export default Router;