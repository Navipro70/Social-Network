import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


const mapStateToPropsRedirect = state => ({isAuth: state.auth.isAuth});

export const authRedirect = Component => {

    class RedirectComponent extends React.Component {
        render () {
            if (!this.props.isAuth) return <Redirect to="/login" />;
            return <Component {...this.props}  />
        }
    }

    return connect(mapStateToPropsRedirect)(RedirectComponent);
};