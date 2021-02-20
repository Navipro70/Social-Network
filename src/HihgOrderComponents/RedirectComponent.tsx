import { ComponentType, FC } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { AppStateType } from '../redux/redux-store'

export interface WithMapStatePropsType {
  isAuth: boolean
}

const mapStateToPropsRedirect = (state: AppStateType) => ({ isAuth: state.auth.isAuth })

export function withAuthRedirect<T extends WithMapStatePropsType>(Component: ComponentType<T>) {
  const RedirectComponent: FC<WithMapStatePropsType> = (props) => {
    if (!props.isAuth) return <Redirect to="/login" />
    return <Component {...(props as T)} />
  }

  return connect<WithMapStatePropsType, undefined, null, AppStateType>(mapStateToPropsRedirect)(
    RedirectComponent,
  )
}
