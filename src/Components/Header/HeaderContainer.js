import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import { thunkLogoutUser} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    logoutHandler = () => this.props.thunkLogoutUser();
    render () {
        return <Header {...this.props} logoutHandler={this.logoutHandler} />
    }
}

const mapStateToProps = (state) => ({
    data: state.auth.currentUserProfile
});

export default connect(mapStateToProps, {
    thunkLogoutUser
})(HeaderContainer);