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

export const userAuthentication = (data) => ({
    type: USER_AUTHENTICATION,
    data
});

export default authReducer;