import {headerApi} from "../API/headerAPI";
import {loginApi} from "../API/loginAPI";
import {stopSubmit} from "redux-form";
import {Redirect} from "react-router-dom";
import React from "react";

const USER_AUTHENTICATION = "USER-AUTHENTICATION";

let initialState = {
    currentUserProfile: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTHENTICATION:
            return {...state,
                currentUserProfile: action.data,
                isAuth: action.isAuth,
                loading: false
            };
        default :
            return {...state}
    }
};

const userAuthentication = (data, isAuth) => ({
    type: USER_AUTHENTICATION,
    data,
    isAuth
});

export const thunkAuthentication = () => {
    return async dispatch => {
        const data = await headerApi.getCurrentUserProfile();
                if (Object.keys(data).length !== 0) {
                    dispatch(userAuthentication(data, true))
                }
        return data;
    }
};

export const thunkLoginUser = (email, password, rememberMe) => {
    return async dispatch => {
        const response = await loginApi.loginUser(email, password, rememberMe);
                if (response.data.resultCode === 0) dispatch(thunkAuthentication());
                else dispatch(stopSubmit("login", {_error: response.data.messages[0]}))
    }
};

export const thunkLogoutUser = () => {
    return async dispatch => {
        const response = await loginApi.logoutUser();
                if (response.data.resultCode === 0) dispatch(userAuthentication(null, false));
                return <Redirect to="/login" /> // После выхода из профиля, редирект на регу
    }
};

export default authReducer;