import {headerApi} from "../API/headerAPI";
import {loginApi} from "../API/loginAPI";
import {stopSubmit} from "redux-form";
import {Redirect} from "react-router-dom";
import React from "react";

const USER_AUTHENTICATION = "USER-AUTHENTICATION";
const PUT_CAPTCHA_TO_STATE = "PUT-CAPTCHA-TO-STATE";

let initialState = {
    currentUserProfile: null,
    isAuth: false,
    captchaSrc: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTHENTICATION:
            return {...state,
                currentUserProfile: action.data,
                isAuth: action.isAuth,
                loading: false
            };
        case PUT_CAPTCHA_TO_STATE:
            return {...state, captchaSrc: action.captchaSrc};
        default :
            return {...state}
    }
};

const userAuthentication = (data, isAuth) => ({
    type: USER_AUTHENTICATION,
    data,
    isAuth
});

const putCaptchaSrcToState = captchaSrc => ({
    type: PUT_CAPTCHA_TO_STATE,
    captchaSrc
});

export const thunkAuthentication = () => {
    return async dispatch => {
        const data = await headerApi.getCurrentUserProfile();
                if (Object.keys(data).length !== 0) dispatch(userAuthentication(data, true));
        return data;
    }
};

export const thunkShowCaptcha = () => {
    return async dispatch => {
        const data = await loginApi.getCaptcha();
        dispatch(putCaptchaSrcToState(data.data.url));
        return Promise.resolve(data);
    }
};

export const thunkLoginUser = (email, password, rememberMe, captcha) => {
    return async dispatch => {
        const response = await loginApi.loginUser(email, password, rememberMe, captcha);
            if (response.data.resultCode === 0) {
                dispatch(thunkAuthentication());
                dispatch(putCaptchaSrcToState(null))
            }
            else if (response.data.resultCode === 10) { // 10 - Приходит каптча, запрашиваем УРЛ на неё и потом показываем
                await dispatch(thunkShowCaptcha());     // этот УРЛ в img с сообщением ошибки в Login компоненте
                dispatch(stopSubmit("login", {_error: response.data.messages[0]}));
            }
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