import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {userAuthentication} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}) //Запрос на сервер
            .then(response => this.props.userAuthentication(response.data.data));
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
