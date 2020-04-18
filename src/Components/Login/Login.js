import React from "react";
import "./login.css"
import {reduxForm} from "redux-form";
import {LoginEmail} from "./LoginComponents/LoginEmail";
import {LoginPassword} from "./LoginComponents/LoginPassword";
import {LoginCheckbox} from "./LoginComponents/LoginCheckbox";
import {LoginErrors} from "./LoginComponents/LoginErrors";


const Login = ({error, handleSubmit, maxLength20, minLength5, captchaSrc, ...props}) => {
    return (
        <form onSubmit={handleSubmit} className="ui-form">
            <h3>Login</h3>
            <LoginEmail />
            <LoginPassword maxLength20={maxLength20} minLength5={minLength5} />
            <LoginCheckbox />
            {(error || captchaSrc) && <LoginErrors error={error} captchaSrc={captchaSrc} />}
            <input type="submit" value="Sign up"/>
        </form>
    )
};

export default reduxForm({
    form: "login"
})(Login);


