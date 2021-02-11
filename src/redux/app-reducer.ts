import { thunkAuthentication } from './auth-reducer'
import { ThunkAction } from 'redux-thunk'
import { AppStateType, InferActionsType } from './redux-store'

let initialState = {
  initialized: false,
  showError: false,
}

type InitialStateType = typeof initialState

type ActionType = InferActionsType<typeof actions>

const appReducer = (
  state: InitialStateType = initialState,
  action: ActionType,
): InitialStateType => {
  switch (action.type) {
    case 'app/INITIALIZING_APP':
      return {
        ...state,
        initialized: true,
      }
    case 'app/SHOW_ERROR':
      return {
        ...state,
        showError: action.showError,
      }
    default:
      return { ...state }
  }
}

export const actions = {
  appIsInitialized: () => ({ type: 'app/INITIALIZING_APP' } as const),
  showingError: (showError: boolean) => ({ type: 'app/SHOW_ERROR', showError } as const),
}

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const thunkInitializing = (): ThunkActionType => async (dispatch) => {
  //also can get state
  await dispatch(thunkAuthentication())
  dispatch(actions.appIsInitialized())
}

export default appReducer
