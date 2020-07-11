import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import CreateFeed from "./components/newfeed/CreateFeed";
import SingleFeed from "./components/newfeed/SingleFeed";
import Profile from "./components/profile/Profile";
import Home from "./layout/Home";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/create" component={CreateFeed} />
          <Route path="/newsfeed/:id" component={SingleFeed} />
          <Route path="/profile/:id" component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
