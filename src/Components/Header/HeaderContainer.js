import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {thunkAuthentication, thunkLogoutUser} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.thunkAuthentication()
    }
    render () {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    data: state.auth
});

export default connect(mapStateToProps, {
    thunkAuthentication,
    thunkLogoutUser
})(HeaderContainer);
