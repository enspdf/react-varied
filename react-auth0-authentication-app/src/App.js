import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SiteHeader from "./components/SiteHeader";
import { useAuth0 } from "./contexts/auth0-context";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  const { getToken } = useAuth0();

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const token = await getToken();
    console.log(token);
  }

  return (
    <Router>
      <div className="app">
        <SiteHeader />
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
