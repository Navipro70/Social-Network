import {
    thunkGetUsers,
    thunkLoadUsers, thunkUserFollowing
} from "../../redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";
import React from "react";
import Preloader from "../Common/Preloader";
import {authRedirect} from "../../HihgOrderComponents/redirectComponent";

class UsersContainer extends React.Component {
    componentDidMount (){
        this.props.thunkGetUsers(this.props.currentPage, this.props.pageSize)
    }

    setCurrentPage = (pageNumber) => {
        this.props.thunkLoadUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader />}
                {!this.props.isFetching && <Users
                    setCurrentPage={this.setCurrentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    following={this.props.following}
                    isFollowingBlocker={this.props.isFollowingBlocker}
                    thunkUserFollowing={this.props.thunkUserFollowing}
                />}
            </>
        );
    }
}

let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingBlocker: state.usersPage.isFollowingBlocker
    }
};

const UsersProvider = connect(mapStateToProps, {
    thunkGetUsers,
    thunkLoadUsers,
    thunkUserFollowing
})(UsersContainer);

export default authRedirect(UsersProvider);


