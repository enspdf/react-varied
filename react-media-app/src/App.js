import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./layout/Home";
import Navbar from "./layout/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import SingleFeed from "./components/newfeed/SingleFeed";
import CreateFeed from "./components/newfeed/CreateFeed";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/create" component={CreateFeed} />
          <Route path="/newfeed/:id" component={SingleFeed} />
          <Route path="/profile/:id" component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
