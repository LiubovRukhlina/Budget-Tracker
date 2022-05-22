import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import MainApp from "./pages/MainApp";
import RequireAuth from "./components/RequireAuth";
import { AuthProvider } from "./context/AuthContext";
import Nav from "./components/Nav";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Nav />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <RequireAuth>
                  <MainApp />
                </RequireAuth>
              }
            />

            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;
