import {headerApi} from "../API/headerAPI";

const USER_AUTHENTICATION = "USER-AUTHENTICATION";

let initialState = {
    currentUserProfile: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTHENTICATION:
            return {...state,
                currentUserProfile: action.data,
                isAuth: action.isAuth
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
    return dispatch => {
        headerApi.getCurrentUserProfile()
            .then(data => {
                if (Object.keys(data).length !== 0) {
                    dispatch(userAuthentication(data, true))
                }
            })
    }
};

export default authReducer;