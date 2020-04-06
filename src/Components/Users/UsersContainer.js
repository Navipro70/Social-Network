import {
    followingCreator,
    setCurrentPageCreator,
    setTotalUsersCountCreator,
    setUsersCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;


