import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import UsersProvider from "./Components/Users/UsersContainer";
import ProfileProvider from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";

const App = props => {

    return (
        <div className="app-wrapper container">
            <HeaderContainer />
            <Navbar />
            <div className="content">
                <Route
                    path="/profile/:userId?"
                    render={() => <ProfileProvider />}
                />
                <Route
                    path="/dialogs"
                    render={() => <DialogsContainer />}
                />
                <Route
                    path="/users"
                    render={() => <UsersProvider />}
                />
                <Route
                    path="/news"
                    render={() => <News/>}
                />
                <Route
                    path="/settings"
                    render={() => <Settings/>}
                />
                <Route
                    path="/login"
                    render={() => <Login />}
                />
            </div>
        </div>
    );
};

export default App;
