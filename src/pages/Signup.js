import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [hasLoginError, setHasLoginError] = useState(false);

  let navigate = useNavigate();
  let auth = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    await auth.signup({ username, email, password }, (isSignedIn) => {
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
        <form onSubmit={onSubmit}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>Name</label>
            <input
              required
              className="form-control"
              placeholder="Name"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              required
              type="email"
              className="form-control"
              placeholder="Enter email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              required
              type="password"
              className="form-control"
              placeholder="Enter password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {hasLoginError && (
            <div className="alert alert-danger" role="alert">
              Wrong username or password
            </div>
          )}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
