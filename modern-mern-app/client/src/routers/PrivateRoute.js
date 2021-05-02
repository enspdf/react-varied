import { Redirect, Route, useLocation } from "react-router-dom";

import { useAuth } from "../auth/useAuth";
import routes from "../helpers/routes";

const PrivateRoute = ({ hasRole: role, ...rest }) => {
  const location = useLocation();

  const { hasRole, isLoggedIn } = useAuth();

  if (role && !hasRole(role)) return <Redirect to={routes.home} />;
  if (!isLoggedIn())
    return (
      <Redirect to={{ pathname: routes.login, state: { from: location } }} />
    );

  return <Route {...rest} />;
};

export default PrivateRoute;
