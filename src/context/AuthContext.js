import React, { useContext, useState } from "react";
import Login from "../pages/Login";
import { api } from "../services/api";
let AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);
  let signin = async ({ email, password }, callback) => {
    const response = await api.post("/users/login", {
      email: email,
      password: password,
    });

    const token = response.data?.token;
    const _id = response.data?._id;
    const budget = response.data?.budget;
    if (token) {
      api.defaults.headers.common["Token"] = token;
      setUser({ email, password, token, _id, budget });
    } else {
      api.defaults.headers.common["Token"] = null;
      setUser(null);
    }

    callback(!!token);
  };
  let signup = async ({ username, email, password }, callback) => {
    const response = await api.post("/users/new", {
      username: username,
      email: email,
      password: password,
      budget: 1000,
    });

    if (response.status === 201) {
      signin({ email, password }, callback);
    } else {
      callback(false);
    }
  };

  let signout = (callback) => {
    api.defaults.headers.common["Token"] = null;
    setUser(null);

    callback();
  };

  let value = { user, signin, signout, signup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
