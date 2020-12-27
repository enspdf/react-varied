import { Route, BrowserRouter as Router } from "react-router-dom";

import Login from "../views/Login";
import Home from "../views/Home";
import PrivateRoute from "../components/PrivateRoute";

export default function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <PrivateRoute path="/home" exact component={Home} />
    </Router>
  );
}
