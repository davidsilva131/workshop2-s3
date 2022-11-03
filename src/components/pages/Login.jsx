import React from "react";
import Form from "../login/Form";
import Logo from "../login/Logo";
import './Login.scss'

function Login() {
    return (
        <>
            <div className="wrapper">
                <div className="login">
                    <Logo />
                    <Form />
                </div>
            </div>
        </>
    )
}

export default Login;
