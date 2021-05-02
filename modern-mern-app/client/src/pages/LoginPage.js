import { useLocation } from "react-router";

import { AuthContext } from "../auth/AuthProvider";
import { useAuth } from "../auth/useAuth";

const userCredentials = {};

const LoginPage = () => {
  const location = useLocation();
  const { login } = useAuth(AuthContext);

  return (
    <div>
      <h1>LoginPage</h1>
      <button onClick={() => login(userCredentials, location.state?.from)}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
