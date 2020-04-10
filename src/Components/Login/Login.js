import React from "react";
import "./login.css"
import {Field, reduxForm} from "redux-form";


const Login = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="ui-form">
            <h3>Login</h3>
            <div className="form-row">
                <Field type="text" name={"login"} id="email" required autoComplete="off" component={"input"} />
                <label htmlFor="email">Email</label>
            </div>
            <div className="form-row">
                <Field type="password" name={"password"} id="password" required autoComplete="off" component={"input"} />
                <label htmlFor="password">Password</label>
            </div>
            <div className="checkbox-row">
                <Field type="checkbox" name={"rememberMe"} id="checkbox" autoComplete="off" className="checkbox" component={"input"} />
                <label htmlFor="checkbox" className="checkbox__text">Remember me</label>
            </div>
            <input type="submit" value="Sign up" />
            <input type="button" value="Already have account" />
        </form>
    )
};

export default reduxForm({
    form: "login"
})(Login);


