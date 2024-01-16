import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logInWithEmailAndPassword } from "../../backend/userFirebase";
import { logged } from "../../../store/authSlice";
import { useDispatch } from "react-redux";

function LoginForm() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    logInWithEmailAndPassword(email, password, () => {
      dispatch(logged(true));
      navigate("/items");
    });
  };

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <form className="row g-3 custom-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            className="form-control"
            type="email"
            placeholder="Email Address"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
        <div className="mb-3 d-flex justify-content-center align-items-center">
          <div>Don't you have an account?</div>
          <Link to="/register">
            <h1 className="login-register-label">Register</h1>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
