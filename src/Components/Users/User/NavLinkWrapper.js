import React from "react";
import {NavLink} from "react-router-dom";

export const NavLinkWrapper = ({id, ...props}) => {
    return (
        <NavLink to={`/profile/${id}`}>
            {props.children}
        </NavLink>
    )
};