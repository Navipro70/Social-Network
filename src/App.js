import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";

const App = props => {
  return (
      <div className="app-wrapper container">
        <Header />
        <Navbar />
        <div className="content">
          <Route
            path="/profile"
            render={() => <Profile />}
          />
          <Route
            path="/dialogs"
            render={() => <DialogsContainer />}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
  );
};

export default App;
