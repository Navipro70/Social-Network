import {headerApi} from "../API/headerAPI";
import {loginApi} from "../API/loginAPI";
import {stopSubmit} from "redux-form";
import {ResultCodesEnum} from "../API/axiosInstance";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const USER_AUTHENTICATION = "USER-AUTHENTICATION";
const PUT_CAPTCHA_TO_STATE = "PUT-CAPTCHA-TO-STATE";

export type currentUserProfileType = {
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

type ActionType = userAuthenticationType | putCaptchaSrcToStateType

const authReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
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

export type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

// ===================GENERICS=TYPES=EXAMPLE============================
// type ThunkResult<R> = ThunkAction<R, IinitialState, undefined, any>;
//
// export function anotherThunkAction(): ThunkResult<Promise<boolean>> {
//     return (dispatch, getState) => {
//         return Promise.resolve(true);
//     }
// }

export const thunkAuthentication = (): ThunkActionType => {
    return async (dispatch) => {
        const data = await headerApi.getCurrentUserProfile();
        if (Object.keys(data).length !== 0) dispatch(userAuthentication(data, true));
        // return Promise.resolve(data)
    }
};

export const thunkShowCaptcha = (): ThunkActionType => {
    return async (dispatch) => {
        const data = await loginApi.getCaptcha();
        dispatch(putCaptchaSrcToState(data.data.url));
        // return Promise.resolve(data)
    }
};

export const thunkLoginUser = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkActionType => {
    return async (dispatch: any) => { //any убрать УБРАТЬ УБРАТЬ УБРАТЬ УБРАТЬ
        const response = await loginApi.loginUser(email, password, rememberMe, captcha);
        if (response.data.resultCode === ResultCodesEnum.Success) {
            dispatch(thunkAuthentication());
            dispatch(putCaptchaSrcToState(null))
        } else if (response.data.resultCode === ResultCodesEnum.Captcha) { // 10 - Приходит каптча, запрашиваем УРЛ на неё и потом показываем
            await dispatch(thunkShowCaptcha());     // этот УРЛ в img с сообщением ошибки в Login компоненте
            dispatch(stopSubmit("login", {_error: response.data.messages[0]}));
        } else dispatch(stopSubmit("login", {_error: response.data.messages[0]}))
    }
};

export const thunkLogoutUser = (): ThunkActionType => {
    return async (dispatch) => {
        const response = await loginApi.logoutUser();
        if (response.data.resultCode === ResultCodesEnum.Success) dispatch(userAuthentication(null, false));
    }
};

export default authReducer;