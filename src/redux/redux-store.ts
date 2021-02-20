import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'

import appReducer from './app-reducer'
import authReducer from './auth-reducer'
import dialogReducer from './dialog-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
})

type ReducersType = typeof reducers

export type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsType<T extends { [key: string]: (...args: any) => any }> = ReturnType<
  PropertiesType<T>
>

export type AppStateType = ReturnType<ReducersType>

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
