import React from "react";
import "./login.css"
import Login from "./Login";

const LoginContainer = (props) => {
    const onSubmit = formData => {
        console.log(formData)
    };

    return (
        <Login onSubmit={onSubmit} />
    )
};

export default LoginContainer;