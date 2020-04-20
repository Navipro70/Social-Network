import {thunkAuthentication} from "./auth-reducer";
import { ThunkAction } from "redux-thunk";
import {AppStateType} from "./redux-store";
import {act} from "react-dom/test-utils";

const INITIALIZING_APP = "INITIALIZING-APP";
const SHOW_ERROR = "SHOW-ERROR";

type InitialStateType = {
    initialized: boolean,
    showError: boolean
}

let initialState: InitialStateType = {
    initialized: false,
    showError: false
};

type ActionTypes  = AppIsInitializedType | ShowErrorType

const appReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZING_APP:
            return {
                ...state,
                initialized: true,
            };
        case SHOW_ERROR:
            return {
                ...state,
                showError: action.showError
            };
        default:
            return {...state}
    }
};

type AppIsInitializedType = { type: typeof INITIALIZING_APP }

const appIsInitialized = (): AppIsInitializedType => ({
    type: INITIALIZING_APP
});

type ShowErrorType = {
    type: typeof SHOW_ERROR
    showError: boolean
}

export const showingError = (showError: boolean): ShowErrorType => ({
    type: SHOW_ERROR,
    showError
});

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const thunkInitializing = (): ThunkActionType => async (dispatch: any) => {
    await dispatch(thunkAuthentication());
    dispatch(appIsInitialized())
};

export default appReducer;