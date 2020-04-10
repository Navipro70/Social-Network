import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Preloader from "../Components/Common/Preloader";


const mapStateToPropsRedirect = state => ({isAuth: state.auth.isAuth, loading: state.auth.loading});

export const authRedirect = Component => {

    class RedirectComponent extends React.Component {
        render () {
            if (this.props.loading) return <Preloader />;
            if (!this.props.isAuth) return <Redirect to="/login" />;
            return <Component {...this.props}  />
        }
    }
    return connect(mapStateToPropsRedirect)(RedirectComponent);
};