import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutHome from "../components/home/LayoutHome";
import Layout from "../components/login/Layout";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Payment from "../components/payment/Payment";

export const UserContext = createContext()
export const ShopContext = createContext()
export const PizzasContext = createContext()

const Router = () => {
    const [user, setUser] = useState({
        user: '',
        password: '',
        img: '',
        name: ''
    });

    const [shop, setShop] = useState({})
    const [pizzas, setPizzas] = useState([])

    return (

        <BrowserRouter>
            <UserContext.Provider value={{
                user,
                setUser,
            }}>

                <PizzasContext.Provider value={[]}>
                    <ShopContext.Provider value={{}}>

                        <Routes>
                            <Route element={<Layout />}>
                                <Route path="/" element={<Login />} />
                                <Route path="register" element={<Register />} />
                            </Route>
                            <Route element={<LayoutHome />}>
                                <Route path="home" element={<Home />} />
                            </Route>
                            <Route path="payment" element={<Payment />} />
                        </Routes>
                    </ShopContext.Provider>
                </PizzasContext.Provider>
            </UserContext.Provider>
        </BrowserRouter>

    )
}
export default Router;