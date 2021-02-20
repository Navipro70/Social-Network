import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withAuthRedirect } from '../../HihgOrderComponents/RedirectComponent'
import { userType } from '../../Types/types'
import { AppStateType } from '../../redux/redux-store'
import { thunkGetUsers, thunkLoadUsers, thunkUserFollowing } from '../../redux/users-reducer'
import Preloader from '../Common/Preloader'

import Users from './Users'

type MapStateToPropsType = {
  currentPage: number
  pageSize: number
  totalUsersCount: number
  isFetching: boolean
  users: userType[]
  isFollowingBlocker: number[]
}

type MapDispatchToPropsType = {
  thunkGetUsers: (currentPage: number, pageSize: number, isFetching: boolean) => void
  thunkLoadUsers: (pageNumber: number, pageSize: number, isFetching: boolean) => void
  thunkUserFollowing: (isFollowed: boolean, id: number) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props
    this.props.thunkGetUsers(currentPage, pageSize, true)
  }

  setCurrentPage = (pageNumber: number): void => {
    const { pageSize } = this.props
    this.props.thunkLoadUsers(pageNumber, pageSize, true)
  }

  render() {
    const {
      isFetching,
      users,
      isFollowingBlocker,
      thunkUserFollowing,
      pageSize,
      currentPage,
      totalUsersCount,
    } = this.props
    if (isFetching) return <Preloader />
    return (
      <Users
        currentPage={currentPage}
        isFollowingBlocker={isFollowingBlocker}
        pageSize={pageSize}
        setCurrentPage={this.setCurrentPage}
        thunkUserFollowing={thunkUserFollowing}
        totalUsersCount={totalUsersCount}
        users={users}
      />
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching,
    isFollowingBlocker: state.usersPage.isFollowingBlocker,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

export default compose<ComponentType>(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    thunkGetUsers,
    thunkLoadUsers,
    thunkUserFollowing,
  }),
  withAuthRedirect,
)(UsersContainer)
