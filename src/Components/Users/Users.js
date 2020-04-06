import React from "react";
import User from "./User/User";
import classes from "./Users.module.css";
import * as axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`) //Запрос на сервер
            .then(response => {
                this.props.setUsers(response.data.items);
                return response;
            })
            .then(response => this.props.setTotalUsersCount(response.data.totalCount/100))
    }

    setCurrentPage = (pageNumber) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`) //Запрос на сервер
            .then(response => this.props.setUsers(response.data.items))
            .then(() => this.props.setCurrentPage(pageNumber))
    };

    render() {
        let pages = [];
        for (let i = 1; i <= Math.ceil(this.props.totalUsersCount/this.props.pageSize); i++) pages.push(i);

        return (
            <div className={classes.user}>
                    {pages.map(i =>  <span
                        className={i === this.props.currentPage && classes.selected}
                        onClick={() => this.setCurrentPage(i)}>
                        {i}
                    </span>)}

                {this.props.users.map(user => <User
                    key={user.id}
                    photoSrc={user.photos.small}
                    id={user.id}
                    status={user.name}
                    followed={user.followed}
                    following={this.props.following}
                />)}
            </div>
        );
    }
}


export default Users;
