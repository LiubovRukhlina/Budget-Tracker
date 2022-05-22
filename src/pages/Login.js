import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasLoginError, setHasLoginError] = useState(false);

  let navigate = useNavigate();
  let auth = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    await auth.signin({ email, password }, (isSignedIn) => {
      if (isSignedIn) {
        navigate("/", { replace: true });
      } else {
        setHasLoginError(true);
      }
    });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={submitHandler}>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value.trim());
              }}
              value={email}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value.trim());
              }}
              value={password}
            />
          </div>
          {hasLoginError && (
            <div className="alert alert-danger" role="alert">
              Wrong username or password
            </div>
          )}

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
