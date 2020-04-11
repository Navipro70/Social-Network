import React from "react";
import "./login.css"
import {Field, reduxForm} from "redux-form";
import {LoginInput} from "../Common/FieldControls";
import { emailValidator, emptyField} from "../../utils/validators";


const Login = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="ui-form">
            <h3>Login</h3>
            <div className="form-row">
                <Field type="text" name={"login"} id="email"
                       component={LoginInput} placeholder="Email"
                       validate={[emptyField, emailValidator]}
                />
            </div>
            <div className="form-row">
                <Field type="password" name={"password"} id="password"
                       component={LoginInput} placeholder="Password"
                       validate={[emptyField, props.maxLength20, props.minLength5]}
                />
            </div>
            <div className="checkbox-row">
                <Field type="checkbox" name={"rememberMe"} id="checkbox" className="checkbox" component={"input"} />
                <label htmlFor="checkbox" className="checkbox__text">Remember me</label>
            </div>
            {props.error && <div className="form-row common-login-error">
                {props.error}
            </div>}
            <input type="submit" value="Sign up" />
        </form>
    )
};

export default reduxForm({
    form: "login"
})(Login);


