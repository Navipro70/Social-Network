import {thunkAuthentication} from "./auth-reducer";

const INITIALIZING_APP = "INITIALIZING-APP";
let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZING_APP:
            return {...state,
                initialized: true
            };
        default :
            return {...state}
    }
};

const appIsInitialized = () => ({
    type: INITIALIZING_APP
});

export const thunkInitializing = () => (dispatch) => {
    dispatch(thunkAuthentication())
        .then(() => dispatch(appIsInitialized()))
};

export default appReducer;