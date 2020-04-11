import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import { thunkLogoutUser} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    render () {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    data: state.auth
});

export default connect(mapStateToProps, {
    thunkLogoutUser
})(HeaderContainer);
