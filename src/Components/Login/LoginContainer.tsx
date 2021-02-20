import { FC } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { Nullable } from '../../Types/types'
import { thunkLoginUser } from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/redux-store'
import { maxLength, minLength } from '../../utils/validators'

import './login.css'

import Login from './Login'

type MapStatePropsType = {
  isAuth: boolean
  captchaSrc: Nullable<string>
}

type MadDispatchPropsType = {
  thunkLoginUser: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type PropsType = MapStatePropsType & MadDispatchPropsType

export type ReduxFormDataType = {
  login: string
  password: string
  rememberMe: boolean
  captcha: string
}

const LoginContainer: FC<PropsType> = ({ thunkLoginUser, isAuth, captchaSrc }) => {
  const onSubmit = ({ login, password, rememberMe, captcha }: ReduxFormDataType): void => {
    thunkLoginUser(login, password, rememberMe, captcha)
  }
  const minLength5 = minLength(5)
  const maxLength20 = maxLength(20)

  if (isAuth) return <Redirect to="/profile" />
  return (
    <Login
      captchaSrc={captchaSrc}
      maxLength20={maxLength20}
      minLength5={minLength5}
      onSubmit={onSubmit}
    />
  )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  captchaSrc: state.auth.captchaSrc,
})

export default connect<
  MapStatePropsType,
  MadDispatchPropsType,
  Record<string, unknown>,
  AppStateType
>(mapStateToProps, {
  thunkLoginUser,
})(LoginContainer)
