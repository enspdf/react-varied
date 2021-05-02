import { useState, createContext } from "react";
import { useHistory } from "react-router";

import roles from "../helpers/roles";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const login = (userCredentials, fromLocation) => {
    setUser({
      id: 1,
      name: "Username",
      email: "username@mail.com",
      role: roles.regular,
    });

    if (fromLocation) {
      history.push(fromLocation);
    }
  };
  const logout = () => setUser(null);
  const updateUser = (data) => {
    setUser({ ...user, ...data });
  };
  const isLoggedIn = () => !!user;
  const hasRole = (role) => user?.role === role;

  const contextValue = {
    user,
    isLoggedIn,
    hasRole,
    login,
    logout,
    updateUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
