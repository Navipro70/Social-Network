import React from "react";
import classes from "./Profile.module.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    thunkGetStatus,
    thunkPutUserInformation, thunkSavePhoto,
    thunkSetCurrentProfile,
    thunkSetStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {authRedirect} from "../../HihgOrderComponents/redirectComponent";
import {compose} from "redux";
import Preloader from "../Common/Preloader";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.userProfile.id;
        this.props.thunkSetCurrentProfile(userId);
        this.props.thunkGetStatus(userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) this.componentDidMount()
    }

    render() {
        return (
            <>
                {this.props.profilePage.isProfileFetching && <Preloader/>}
                {!this.props.profilePage.isProfileFetching && <div className={classes.profile}>
                    <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
                </div>}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    userProfile: state.auth.currentUserProfile,
    isAuth: state.auth.isAuth
});


export default compose(
    connect(mapStateToProps, {
        thunkSetCurrentProfile,
        thunkGetStatus,
        thunkSetStatus,
        thunkPutUserInformation,
        thunkSavePhoto
    }),
    withRouter,
    authRedirect
)(ProfileContainer);


