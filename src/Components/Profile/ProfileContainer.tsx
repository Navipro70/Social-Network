import React, {FC, useEffect} from "react"
import classes from "./Profile.module.css"
import Profile, {PropsType} from "./Profile"
import {connect} from "react-redux"
import {
    actions,
    thunkGetStatus,
    thunkPutUserInformation, thunkSavePhoto,
    thunkSetCurrentProfile,
    thunkSetStatus
} from "../../redux/profile-reducer"
import {withRouter, RouteComponentProps} from "react-router-dom"
import {authRedirect} from "../../HihgOrderComponents/redirectComponent"
import {compose} from "redux"
import Preloader from "../Common/Preloader"
import {AppStateType} from "../../redux/redux-store"
import {DispatchReduxFormType} from "../../Types/ReduxFormTypes"
import {currentUserProfileType} from "../../redux/auth-reducer"

type AdditionTypes = {
    dispatch: DispatchReduxFormType
    isAuth: boolean
    thunkSetCurrentProfile: (userId: number) => void
    thunkGetStatus: (userId: number) => void
    userProfile: currentUserProfileType
}

type TParams = {
    userId: string | undefined
}

type PropsProfile = PropsType & AdditionTypes & RouteComponentProps<TParams>

const ProfileContainer: FC<PropsProfile> = ({...props}) => {
    const userIdIdentificator = () => {
        let userId: number = Number(props.match.params.userId);
        if (!userId) userId = props.userProfile.id;
        props.thunkSetCurrentProfile(userId);
        props.thunkGetStatus(userId)
    };

    useEffect(() => {
        userIdIdentificator()
    }, []);

    useEffect(() => {
        userIdIdentificator()
    }, [props.match.params.userId]);

    if (props.profilePage.isProfileFetching) return <Preloader/>;
    return (
        <div className={classes.profile}>
            <Profile {...props} isOwner={!props.match.params.userId}/>
        </div>
    )
};

const mapStateToProps = (state: AppStateType) => ({
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
)(ProfileContainer)