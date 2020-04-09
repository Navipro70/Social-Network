import {headerApi} from "../API/headerAPI";

const USER_AUTHENTICATION = "USER-AUTHENTICATION";
const IS_LOADING = "IS-LOADING";

let initialState = {
    currentUserProfile: null,
    isAuth: false,
    loading: true
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTHENTICATION:
            return {...state,
                currentUserProfile: action.data,
                isAuth: action.isAuth,
                loading: false
            };
        case IS_LOADING: {
            return {...state,
                loading: action.loading
            }
        }
        default :
            return {...state}
    }
};

const userAuthentication = (data, isAuth) => ({
    type: USER_AUTHENTICATION,
    data,
    isAuth
});

const toggleLoading = loading => ({
    type: IS_LOADING,
    loading
});

export const thunkAuthentication = () => {
    return dispatch => {
        dispatch(toggleLoading(true));
        headerApi.getCurrentUserProfile()
            .then(data => {
                if (Object.keys(data).length !== 0) {
                    dispatch(userAuthentication(data, true))
                }
                dispatch(toggleLoading(false));
            })
    }
};

export default authReducer;