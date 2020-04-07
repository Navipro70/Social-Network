import React from "react";
import classes from "./Profile.module.css";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfilePage} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`) //Запрос на сервер
            .then(response => {
                this.props.setProfilePage(response.data);
            });
    }

    render() {
        return (
            <div className={classes.profile}>
                <Profile {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profilePage: state.profilePage
});

const ProfileProvider = connect(mapStateToProps, {
    setProfilePage
})(ProfileContainer);

export default ProfileProvider;
