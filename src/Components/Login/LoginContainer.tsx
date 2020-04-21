import React, {FC} from "react";
import "./login.css"
import Login from "./Login";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {maxLength, minLength} from "../../utils/validators";
import {thunkLoginUser} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
    captchaSrc: string | null
}

type MadDispatchPropsType = {
    thunkLoginUser: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type PropsType = MapStatePropsType & MadDispatchPropsType

export type ReduxFormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string
}

const LoginContainer: FC<PropsType> = ({thunkLoginUser, isAuth, captchaSrc}) => {
    const onSubmit = ({login, password, rememberMe, captcha}: ReduxFormDataType): void => {
        thunkLoginUser(login, password, rememberMe, captcha);
    };
    const minLength5 = minLength(5);
    const maxLength20 = maxLength(20);

    if (isAuth) return <Redirect to="/profile"/>;
    return (
        <Login onSubmit={onSubmit}
               minLength5={minLength5}
               maxLength20={maxLength20}
               captchaSrc={captchaSrc}/>
    )
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaSrc: state.auth.captchaSrc
    }
};

export default connect<MapStatePropsType, MadDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    thunkLoginUser
})(LoginContainer);