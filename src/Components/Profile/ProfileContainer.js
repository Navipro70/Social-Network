import React from "react";
import classes from "./Profile.module.css";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfilePage} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`) //Запрос на сервер
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

let ProfileProvider = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setProfilePage
})(ProfileProvider);

