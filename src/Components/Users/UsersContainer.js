import {
    followingCreator,
    setCurrentPageCreator,
    setTotalUsersCountCreator,
    setUsersCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";
import React from "react";
import Preloader from "../Common/Preloader";
import {userApi} from "../../API/usersAPI";

class UsersContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {isFetching: true}
    }

    componentDidMount() {
        userApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                return data;
            })
            .then(newData => this.props.setTotalUsersCount(newData.totalCount / 100))
            .then(() => this.setState({isFetching: false}))
    }

    setCurrentPage = async (pageNumber) => {
        await this.setState({isFetching: true});
        await userApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => this.props.setUsers(data.items))
            .then(() => this.props.setCurrentPage(pageNumber))
            .then(() => this.setState({isFetching: false}))
    };

    render() {
        return (
            <>
                {this.state.isFetching && <Preloader />}
                {!this.state.isFetching && <Users
                    setCurrentPage={this.setCurrentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    following={this.props.following}
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
    }
};

const UsersProvider = connect(mapStateToProps, {
    following: followingCreator,
    setUsers: setUsersCreator,
    setCurrentPage: setCurrentPageCreator,
    setTotalUsersCount: setTotalUsersCountCreator
})(UsersContainer);

export default UsersProvider;


