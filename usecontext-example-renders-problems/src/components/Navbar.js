import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Navbar = () => {
  console.log("Navbar");
  const { user, login, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <span className="navbar-brand">
          <h1>{user ? `Hello ${user.name}` : "Welcome"}</h1>
        </span>
        {user ? (
          <button className="btn btn-primary" onClick={logout}>
            Logout
          </button>
        ) : (
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
