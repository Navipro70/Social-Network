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

class UsersContainer extends React.Component {
    componentDidMount (){
        this.props.thunkGetUsers(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (pageNumber) => {
        this.props.thunkLoadUsers(pageNumber, this.props.pageSize);
    };

    render() {
        const {isFetching, users, following, isFollowingBlocker, thunkUserFollowing} = this.props;
        if (isFetching) return <Preloader/>;
        return (
                <Users
                    setCurrentPage={this.setCurrentPage}
                    users={users}
                    following={following}
                    isFollowingBlocker={isFollowingBlocker}
                    thunkUserFollowing={thunkUserFollowing}/>
        );
    }
}

let mapStateToProps = state => {
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
    connect(mapStateToProps, {thunkGetUsers, thunkLoadUsers, thunkUserFollowing}),
    authRedirect
)(UsersContainer);


