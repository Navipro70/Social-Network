import React, {FC} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {currentUserProfileType, thunkLogoutUser, ThunkActionType} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    currentUserProfile: currentUserProfileType | null
}

type MapDispatchToPropsType = {
    thunkLogoutUser: () => void
}

type PropsType = MapDispatchToPropsType & MapStateToPropsType

const HeaderContainer: FC<PropsType> = ({thunkLogoutUser, currentUserProfile}) => {
    const logoutHandler = () => thunkLogoutUser();
    return (
        <Header
            currentUserProfile={currentUserProfile}
            logoutHandler={logoutHandler}/>
    )
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    currentUserProfile: state.auth.currentUserProfile
});

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    thunkLogoutUser
})(HeaderContainer);