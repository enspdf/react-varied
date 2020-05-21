import React, { useState } from "react";
import { css } from "@emotion/core";
import Layout from "../components/layouts/Layout";
import { Form, Field, InputSubmit, Error } from "../components/ui/Form";
import useValidation from "../hooks/useValidation";
import createAccountValidation from "../validation/createAccountValidation";
import firebase from "../firebase";
import Router from "next/router";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

const CreteAccount = () => {
  const [error, setError] = useState(false);
  const {
    errors,
    handleChange,
    handleSubmit,
    values,
    handleBlur,
  } = useValidation(INITIAL_STATE, createAccountValidation, createAccount);

  const { name, email, password } = values;

  async function createAccount() {
    try {
      await firebase.register(name, email, password);
      Router.push("/");
    } catch (error) {
      console.log("Error creating user ", error.message);
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
            Create Account
          </h1>
          <Form onSubmit={handleSubmit} noValidate>
            <Field>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Field>
            {errors.name && <Error>{errors.name}</Error>}
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
            <InputSubmit type="submit" value="Create Account" />
          </Form>
        </>
      </Layout>
    </div>
  );
};

export default CreteAccount;
