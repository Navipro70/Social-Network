import {
    followingCreator,
    setCurrentPageCreator,
    setTotalUsersCountCreator,
    setUsersCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import Preloader from "../Common/Preloader";

class UsersContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {isFetching: true}
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`) //Запрос на сервер
            .then(response => {
                this.props.setUsers(response.data.items);
                return response;
            })
            .then(response => this.props.setTotalUsersCount(response.data.totalCount/100))
            .then(() => this.setState({isFetching: false}))
    }

    setCurrentPage = (pageNumber) => {
        this.setState({isFetching: true});
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`) //Запрос на сервер
            .then(response => this.props.setUsers(response.data.items))
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

let mapDispatchToProps = dispatch => {
    return {
        following: id => dispatch(followingCreator(id)),
        setUsers: users => dispatch(setUsersCreator(users)),
        setCurrentPage: pageNumber => dispatch(setCurrentPageCreator(pageNumber)),
        setTotalUsersCount: totalUsersCount => dispatch(setTotalUsersCountCreator(totalUsersCount))
    }
};

const UsersProvider = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default UsersProvider;


