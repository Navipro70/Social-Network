import React from "react";
import "./login.css"
import Login from "./Login";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {maxLength, minLength} from "../../utils/validators";
import {thunkLoginUser} from "../../redux/auth-reducer";

const LoginContainer = ({thunkLoginUser, ...props}) => {
    const onSubmit = ({login, password, rememberMe, captcha}) => {
        thunkLoginUser(login, password, rememberMe, captcha);
    };
    const minLength5 = minLength(5);
    const maxLength20 = maxLength(20);

    if (props.isAuth) return <Redirect to="/profile"/>;
    return (
        <Login onSubmit={onSubmit}
               minLength5={minLength5}
               maxLength20={maxLength20}
               captchaSrc={props.captchaSrc}/>
    )
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        captchaSrc: state.auth.captchaSrc
    }
};

export default connect(mapStateToProps, {
    thunkLoginUser
})(LoginContainer);

