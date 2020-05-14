import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/authentication/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { user, userAuthenticated, logout } = authContext;

  useEffect(() => {
    userAuthenticated();
    // eslint-disable-next-line
  }, []);

  return (
    <header className="app-header">
      {user ? <p className="nombre-usuario">{user.name}</p> : null}
      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={() => logout()}
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
