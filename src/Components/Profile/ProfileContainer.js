import React from "react";
import classes from "./Profile.module.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {thunkSetCurrentProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {authRedirect} from "../../HihgOrderComponents/redirectComponent";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;
        this.props.thunkSetCurrentProfile(userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId){
        this.componentDidMount()
        }
    }

    render() {
        return (
            <div className={classes.profile}>
                <Profile {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
});


const ProfileRedirect = authRedirect(ProfileContainer);

const ProfileProvider= withRouter(ProfileRedirect);

export default connect(mapStateToProps, {
    thunkSetCurrentProfile
})(ProfileProvider);


