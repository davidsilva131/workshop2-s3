import React from "react";
import Logo from "../login/Logo";
import RegisterForm from "../login/RegisterForm";
import './Login.scss'


function Register() {
    return (
        <>
            <div className="wrapper">
                <div className="login">
                    <Logo />
                    <RegisterForm />
                </div>
            </div>
        </>
    )
}

export default Register;
