import {thunkAuthentication} from "./auth-reducer";

const INITIALIZING_APP = "INITIALIZING-APP";
const SHOW_ERROR = "SHOW-ERROR";

type initialStateType = {
    initialized: boolean,
    showError: boolean
}

let initialState: initialStateType = {
    initialized: false,
    showError: false
};

const appReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case INITIALIZING_APP:
            return {...state,
                initialized: true,
            };
        case SHOW_ERROR:
            return {...state,
                showError: action.showError
            };
        default:
            return {...state}
    }
};

type appIsInitializedType = {type: typeof INITIALIZING_APP}

const appIsInitialized = (): appIsInitializedType => ({
    type: INITIALIZING_APP
});

type showErrorType = {
    type: typeof SHOW_ERROR
    showError: boolean
}

export const showingError = (showError: boolean): showErrorType => ({
    type: SHOW_ERROR,
    showError
});


export const thunkInitializing = () => async (dispatch: any) => {
    await dispatch(thunkAuthentication());
    dispatch(appIsInitialized())
};

export default appReducer;