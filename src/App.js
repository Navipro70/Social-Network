import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import {newPost} from "./redux/state";
import {onKeyDownEventListener} from "./redux/state";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper container">
        <Header />
        <Navbar />
        <div className="content">
          <Route
            path="/profile"
            render={() => <Profile profilePage={props.state.profilePage} newPost={newPost} onKeyDown={onKeyDownEventListener} />}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogPage={props.state.dialogPage}
              />
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
