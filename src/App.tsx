import React, {ComponentType} from "react";
import "./App.css";
import {Redirect, Route, withRouter, Switch, RouteComponentProps} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileProvider from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {actions, thunkInitializing} from "./redux/app-reducer";
import Preloader from "./Components/Common/Preloader";
import {SnackbarError} from "./Components/Profile/Information/InformationForm/InformationFormItems/SnackbarError";
import {AppStateType} from "./redux/redux-store";

interface AppPropsType {
    showingError: (showError: boolean) => void
    thunkInitializing: () => void
    showError: boolean
    initialized: boolean
}

class App extends React.Component<AppPropsType & RouteComponentProps> {
    catchAllUnhandledErrors = () => {
        this.props.showingError(true);
        setTimeout(() => {
            this.props.showingError(false)
        }, 3000)
    };

    componentDidMount() {
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
        this.props.thunkInitializing();
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        const {showingError, showError, initialized} = this.props;
        if (!initialized) return <Preloader/>;
        return (
            <div className="app-wrapper container">
                <HeaderContainer/>
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route path="/profile/:userId?" render={() => <ProfileProvider/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/login" render={() => <LoginContainer/>}/>
                        <Route path="/" exact render={() => <Redirect to="/profile"/>}/>
                        <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                    <SnackbarError setOpen={showingError} open={showError} error={"Something went wrong"}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
    showError: state.app.showError
});

export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {
        thunkInitializing,
        showingError: actions.showingError
    })
)(App);