import React, { useState } from "react";
import { css } from "@emotion/core";
import Layout from "../components/layouts/Layout";
import { Form, Field, InputSubmit, Error } from "../components/ui/Form";
import useValidation from "../hooks/useValidation";
import loginValidation from "../validation/loginValidation";
import firebase from "../firebase";
import Router from "next/router";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const Login = () => {
  const [error, setError] = useState(false);
  const {
    errors,
    handleChange,
    handleSubmit,
    values,
    handleBlur,
  } = useValidation(INITIAL_STATE, loginValidation, login);

  const { email, password } = values;

  async function login() {
    try {
      await firebase.login(email, password);
      Router.push("/");
    } catch (error) {
      console.log("Error login ", error.message);
      setError(error.message);
    }
  }

  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >
            Login
          </h1>
          <Form onSubmit={handleSubmit} noValidate>
            <Field>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Field>
            {errors.email && <Error>{errors.email}</Error>}
            <Field>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Your Password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Field>
            {errors.password && <Error>{errors.password}</Error>}
            {error && <Error>{error}</Error>}
            <InputSubmit type="submit" value="Login" />
          </Form>
        </>
      </Layout>
    </div>
  );
};

export default Login;
