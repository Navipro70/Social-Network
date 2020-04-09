import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {userAuthentication} from "../../redux/auth-reducer";
import {headerApi} from "../../API/headerAPI";

class HeaderContainer extends React.Component {
    componentDidMount() {
        headerApi.getCureentUserProfile()
            .then(data => this.props.userAuthentication(data));
    }

    render () {
        return <Header {...this.props.data} />
    }
}

const mapStateToProps = (state) => ({
    data: state.auth
});

export default connect(mapStateToProps, {
    userAuthentication
})(HeaderContainer);
