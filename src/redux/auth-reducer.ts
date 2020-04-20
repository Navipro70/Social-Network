import {headerApi} from "../API/headerAPI";
import {loginApi} from "../API/loginAPI";
import {stopSubmit} from "redux-form";

const USER_AUTHENTICATION = "USER-AUTHENTICATION";
const PUT_CAPTCHA_TO_STATE = "PUT-CAPTCHA-TO-STATE";

type currentUserProfileType = {
    id: number,
    login: string,
    email: string
}

let initialState = {
    currentUserProfile: null as null | currentUserProfileType,
    isAuth: false,
    captchaSrc: null as null | string
};

type initialStateType = typeof initialState

const authReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case USER_AUTHENTICATION:
            return {
                ...state,
                currentUserProfile: action.data,
                isAuth: action.isAuth,
            };
        case PUT_CAPTCHA_TO_STATE:
            return {...state, captchaSrc: action.captchaSrc};
        default :
            return {...state}
    }
};

type userAuthenticationType = {
    type: typeof USER_AUTHENTICATION,
    data: currentUserProfileType | null,
    isAuth: boolean
}

const userAuthentication = (data: currentUserProfileType | null, isAuth: boolean): userAuthenticationType => ({
    type: USER_AUTHENTICATION,
    data,
    isAuth
});

type putCaptchaSrcToStateType = {
    type: typeof PUT_CAPTCHA_TO_STATE,
    captchaSrc: string | null
}

const putCaptchaSrcToState = (captchaSrc: string | null): putCaptchaSrcToStateType => ({
    type: PUT_CAPTCHA_TO_STATE,
    captchaSrc
});

export const thunkAuthentication = () => {
    return async (dispatch: any) => {
        const data = await headerApi.getCurrentUserProfile();
        if (Object.keys(data).length !== 0) dispatch(userAuthentication(data, true));
        return data;
    }
};

export const thunkShowCaptcha = () => {
    return async (dispatch: any) => {
        const data = await loginApi.getCaptcha();
        dispatch(putCaptchaSrcToState(data.data.url));
        return Promise.resolve(data);
    }
};

export const thunkLoginUser = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: any) => {
        const response = await loginApi.loginUser(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            dispatch(thunkAuthentication());
            dispatch(putCaptchaSrcToState(null))
        } else if (response.data.resultCode === 10) { // 10 - Приходит каптча, запрашиваем УРЛ на неё и потом показываем
            await dispatch(thunkShowCaptcha());     // этот УРЛ в img с сообщением ошибки в Login компоненте
            dispatch(stopSubmit("login", {_error: response.data.messages[0]}));
        } else dispatch(stopSubmit("login", {_error: response.data.messages[0]}))
    }
};

export const thunkLogoutUser = () => {
    return async (dispatch: any) => {
        const response = await loginApi.logoutUser();
        if (response.data.resultCode === 0) dispatch(userAuthentication(null, false));
    }
};

export default authReducer;