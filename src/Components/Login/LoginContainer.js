import React from "react";
import "./login.css"
import Login from "./Login";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Preloader from "../Common/Preloader";

const LoginContainer = (props) => {
    const onSubmit = formData => {
        console.log(formData)
    };

        if (props.loading) return <Preloader />;
        if (props.isAuth) return <Redirect to="/profile" />;
        return (
        <Login onSubmit={onSubmit} />
    )
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        loading: state.auth.loading
    }
};

export default connect(mapStateToProps, {

})(LoginContainer);

