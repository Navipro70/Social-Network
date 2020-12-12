import React, {FC} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {currentUserProfileType, thunkLogoutUser} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Nullable} from "../../Types/types";

type MapStateToPropsType = {
    currentUserProfile: Nullable<currentUserProfileType>
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

const mapStateToProps = (state: AppStateType) => ({
    currentUserProfile: state.auth.currentUserProfile
});

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    thunkLogoutUser
})(HeaderContainer);