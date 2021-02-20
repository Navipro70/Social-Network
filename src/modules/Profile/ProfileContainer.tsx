import { ComponentType, FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { compose } from 'redux'

import { withAuthRedirect } from '../../HihgOrderComponents/RedirectComponent'
import { DispatchReduxFormType } from '../../Types/ReduxFormTypes'
import { LoadingView } from '../../components'
import { currentUserProfileType } from '../../redux/auth-reducer'
import {
  actions,
  thunkGetStatus,
  thunkPutUserInformation,
  thunkSavePhoto,
  thunkSetCurrentProfile,
  thunkSetStatus,
} from '../../redux/profile-reducer'
import { AppStateType } from '../../redux/redux-store'

import Profile, { PropsType } from './Profile'
import classes from './Profile.module.css'

type MapStatePropsType = {
  dispatch: DispatchReduxFormType
  isAuth: boolean
  userProfile: currentUserProfileType
}

type MapDispatchPropsType = {
  thunkSetCurrentProfile: (userId: number) => void
  thunkGetStatus: (userId: number) => void
}

type TParams = {
  userId: string | undefined
}

type PropsProfile = PropsType &
  MapStatePropsType &
  MapDispatchPropsType &
  RouteComponentProps<TParams>

const ProfileContainer: FC<PropsProfile> = ({ ...props }) => {
  const userIdIdentificator = () => {
    let userId: number = Number(props.match.params.userId)
    if (!userId) userId = props.userProfile.id
    props.thunkSetCurrentProfile(userId)
    props.thunkGetStatus(userId)
  }

  useEffect(() => {
    userIdIdentificator()
  }, [])

  useEffect(() => {
    userIdIdentificator()
  }, [props.match.params.userId])

  if (props.profilePage.isProfileFetching) return <LoadingView />
  return (
    <div className={classes.profile}>
      <Profile {...props} isOwner={!props.match.params.userId} />
    </div>
  )
}

const mapStateToProps = (state: AppStateType) => ({
  profilePage: state.profilePage,
  userProfile: state.auth.currentUserProfile,
  isAuth: state.auth.isAuth,
  posts: state.profilePage.posts,
})

export default compose<ComponentType>( ////////// ДОБАВИТЬ ТИПИЗАЦИЮ
  connect(mapStateToProps, {
    thunkSetCurrentProfile,
    thunkGetStatus,
    thunkSetStatus,
    thunkPutUserInformation,
    thunkSavePhoto,
    addPost: actions.addPost,
  }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)
