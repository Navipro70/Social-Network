import React, {useEffect} from "react";
import classes from "./Profile.module.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    actions,
    thunkGetStatus,
    thunkPutUserInformation, thunkSavePhoto,
    thunkSetCurrentProfile,
    thunkSetStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {authRedirect} from "../../HihgOrderComponents/redirectComponent";
import {compose} from "redux";
import Preloader from "../Common/Preloader";

const ProfileContainer = ({match, ...props}) => {
    const userIdIdentificator = () => {
        let userId = match.params.userId;
        if (!userId) userId = props.userProfile.id;
        props.thunkSetCurrentProfile(userId);
        props.thunkGetStatus(userId)
    };

    useEffect(() => {
        userIdIdentificator()
    }, []);

    useEffect(() => {
        userIdIdentificator()
    }, [match.params.userId]);

    if (props.profilePage.isProfileFetching) return <Preloader/>;
    return (
        <div className={classes.profile}>
            <Profile {...props} isOwner={!match.params.userId}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    userProfile: state.auth.currentUserProfile,
    isAuth: state.auth.isAuth,
    posts: state.profilePage.posts
});


export default compose(
    connect(mapStateToProps, {
        thunkSetCurrentProfile,
        thunkGetStatus,
        thunkSetStatus,
        thunkPutUserInformation,
        thunkSavePhoto,
        addPost: actions.addPost
    }),
    withRouter,
    authRedirect
)(ProfileContainer);


