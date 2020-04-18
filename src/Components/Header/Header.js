import React from "react";
import classes from "./Header.module.css";
import {HeaderPerfomance} from "../Common/HeaderPerfomance";
import {CurrentProfileNavLink} from "./CurrentProfileNavLink/CurrentProfileNavLink";

const Header = ({data, logoutHandler}) => {
    return (
        <header className={classes.header}>
            <HeaderPerfomance/>
            {data && <CurrentProfileNavLink login={data.login} logoutHandler={logoutHandler}/>}
        </header>
    );
};

export default React.memo(Header);
