import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logged } from "../../../store/authSlice";
import { register } from "../../backend/userFirebase";
import styles from "../users.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(!(e.target.value === rpassword));
    setValidPassword(e.target.value.length >= 0 && e.target.value === password);
  };

  const onRpasswordChange = (e) => {
    setRpassword(e.target.value);
    setPasswordError(!(e.target.value === password));
    setValidPassword(e.target.value.length >= 0 && e.target.value === password);
  };

  const validateEmail = (address) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    emailPattern.test(address) ? setEmailError(false) : setEmailError(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError)
      register(email, password, () => {
        dispatch(logged(true));
        navigate("/items");
      });
  };

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <form className={`row g-3 ${styles.customForm}`} onSubmit={handleSubmit}>
        <div className={`mb-3 ${emailError ? "has-error" : ""}`}>
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            className={`form-control ${emailError ? "is-invalid" : ""}`}
            value={email}
            onChange={onEmailChange}
            placeholder="Email Address"
            id="email"
            required
          />
          {emailError && (
            <div className="invalid-feedback">Invalid email address</div>
          )}
        </div>
        <div className={`mb-3 ${passwordError ? "has-error" : ""}`}>
          <label for="password" className="form-label">
            Password
          </label>
          <input
            className={`form-control ${passwordError ? "is-invalid" : ""} ${
              validPassword ? "is-valid" : ""
            }`}
            value={password}
            onChange={onPasswordChange}
            type="password"
            id="password"
            required
          />
        </div>
        <div className={`mb-3 ${passwordError ? "has-error" : ""}`}>
          <label for="repeat-password" className="form-label">
            Repeat Password
          </label>
          <input
            className={`form-control ${passwordError ? "is-invalid" : ""} ${
              validPassword ? "is-valid" : ""
            }`}
            value={rpassword}
            onChange={onRpasswordChange}
            type="password"
            id="repeat-password"
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
