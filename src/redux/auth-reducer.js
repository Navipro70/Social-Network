import {headerApi} from "../API/headerAPI";

const USER_AUTHENTICATION = "USER-AUTHENTICATION";

let initialState = {
    currentUserProfile: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTHENTICATION:
            return {...state, currentUserProfile: action.data};
        default :
            return {...state}
    }
};

const userAuthentication = (data) => ({
    type: USER_AUTHENTICATION,
    data
});

export const thunkAuthentication = () => {
    return dispatch => {
        headerApi.getCurrentUserProfile()
            .then(data => {
                dispatch(userAuthentication(data))
            })
    }
};

export default authReducer;