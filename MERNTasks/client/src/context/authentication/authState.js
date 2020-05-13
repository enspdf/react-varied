import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import {
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  GET_USER,
} from "../../types";
import axiosClient from "../../config/axios";
import authToken from "../../config/authToken";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    authenticated: null,
    user: null,
    message: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registerUser = async (data) => {
    try {
      const response = await axiosClient.post("/api/users", data);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });

      userAuthenticated();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };
      dispatch({ type: REGISTER_ERROR, payload: alert });
    }
  };

  const userAuthenticated = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      authToken(token);
    }

    try {
      const response = await axiosClient.get("/api/auth");

      dispatch({
        type: GET_USER,
        payload: response.data.user,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  const login = async (data) => {
    try {
      const response = await axiosClient.post("/api/auth", data);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });

      userAuthenticated();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };
      dispatch({ type: LOGIN_ERROR, payload: alert });
    }
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        loading: state.loading,
        registerUser,
        login,
        userAuthenticated,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
