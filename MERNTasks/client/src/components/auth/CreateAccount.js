import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/authentication/authContext";

const CreateAcount = (props) => {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { message, authenticated, registerUser } = authContext;

  useEffect(() => {
    if (authenticated) {
      props.history.push("/projects");
    }

    if (message) {
      showAlert(message.msg, message.category);
    }
    // eslint-disable-next-line
  }, [message, authenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const { email, password, name, confirmPassword } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      showAlert("All the fields are required", "alerta-error");
      return;
    }

    if (password.length < 6) {
      showAlert("Password must have at least 6 characters", "alerta-error");
      return;
    }

    if (password !== confirmPassword) {
      showAlert("Passwords must be equals", "alerta-error");
      return;
    }

    registerUser({
      name,
      email,
      password,
    });
  };

  return (
    <div className="form-usuario">
      {alert ? <p className={`alerta ${alert.category}`}>{alert.msg}</p> : null}
      <div className="contenedor-form sombra-dark">
        <h1>Create an account</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Name"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Signup"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Login
        </Link>
      </div>
    </div>
  );
};

export default CreateAcount;
