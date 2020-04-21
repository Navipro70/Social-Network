import React, { FC } from "react";
import classes from "./Header.module.css";
import {HeaderPerfomance} from "../Common/HeaderPerfomance";
import {CurrentProfileNavLink} from "./CurrentProfileNavLink/CurrentProfileNavLink";
import {currentUserProfileType} from "../../redux/auth-reducer";

type PropsType = {
    currentUserProfile: currentUserProfileType | null
    logoutHandler: () => void
}

const Header: FC<PropsType> = ({currentUserProfile, logoutHandler}) => {
    return (
        <header className={classes.header}>
            <HeaderPerfomance/>
            {currentUserProfile && <CurrentProfileNavLink login={currentUserProfile.login} logoutHandler={logoutHandler}/>}
        </header>
    );
};

export default React.memo(Header);
