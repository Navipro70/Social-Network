import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
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
          <Route path="/profile" render={() => <Profile posts={props.posts}/>} />
          <Route path="/dialogs" render={() => <Dialogs messages={props.messages} users={props.users} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
