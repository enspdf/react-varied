import jwtDecode from "jwt-decode";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../logo.svg";
import { signout } from "../Store/actions/user-actions";

const Navbar = ({ signout }) => {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!open);
  };

  const token = localStorage.getItem("token");
  let user;

  if (token) {
    user = jwtDecode(token);
  }

  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <Link to="/" className="flex items-center">
            <span className="text-white">Media</span>{" "}
            <img className="h-8" src={logo} alt="react logo" />
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            onClick={openMenu}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {open ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={
          open
            ? "block px-2 pt-2 pb-4 sm:flex sm:p-0"
            : "hidden px-2 pt-2 pb-4 sm:flex sm:p-0"
        }
      >
        {token ? (
          <>
            <Link
              to="/create"
              className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
            >
              <i className="fas fa-plus"></i>
            </Link>
            <Link
              to="/profile/2"
              className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
            >
              Welcome, {user.user.displayName}
            </Link>
            <button
              onClick={signout}
              className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
            >
              Signout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray800"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
            >
              Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
