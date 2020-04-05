import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";

const App = props => {
    return (
        <div className="app-wrapper container">
            <Header/>
            <Navbar/>
            <div className="content">
                <Route
                    path="/profile"
                    render={() => <Profile/>}
                />
                <Route
                    path="/dialogs"
                    render={() => <DialogsContainer/>}
                />
                <Route
                    path="/users"
                    render={() => <UsersContainer/>}
                />
                <Route
                    path="/news"
                    render={() => <News/>}
                />
                <Route
                    path="/settings"
                    render={() => <Settings/>}
                />
            </div>
        </div>
    );
};

export default App;
