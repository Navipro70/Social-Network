import {
    thunkGetUsers,
    thunkLoadUsers, thunkUserFollowing
} from "../../redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";
import React from "react";
import Preloader from "../Common/Preloader";
import {authRedirect} from "../../HihgOrderComponents/redirectComponent";
import {compose} from "redux";
import {userType} from "../../Types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    users: Array<userType>
    isFollowingBlocker: Array<number>
}
type MapDispatchToPropsType = {
    thunkGetUsers: (currentPage: number, pageSize: number, isFetching: boolean) => void
    thunkLoadUsers: (pageNumber: number, pageSize: number, isFetching: boolean) => void
    thunkUserFollowing: (isFollowed: boolean, id: number) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.thunkGetUsers(this.props.currentPage, this.props.pageSize, true);
    }

    setCurrentPage = (pageNumber: number): void => {
        this.props.thunkLoadUsers(pageNumber, this.props.pageSize, true);
    };

    render() {
        const {isFetching, users, isFollowingBlocker, thunkUserFollowing} = this.props;
        if (isFetching) return <Preloader/>;
        return (
            <Users
                setCurrentPage={this.setCurrentPage}
                users={users}
                isFollowingBlocker={isFollowingBlocker}
                thunkUserFollowing={thunkUserFollowing}/>
        );
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching,
        isFollowingBlocker: state.usersPage.isFollowingBlocker,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
};


export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {thunkGetUsers, thunkLoadUsers, thunkUserFollowing}),
    authRedirect
)(UsersContainer);


