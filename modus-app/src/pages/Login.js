import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) {
      //loading screen
      return;
    }
    if (user) history.replace("/home");
  }, [user, loading]);
  return (
    <div className="loginPage">
      <h2>Log in </h2>
      <div className="loginContainer">
        <input
          type="text"
          placeholder="Email Address "
          className="loginText"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password "
          className="passwordText"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="login"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Log in
        </button>
        <a href="#">Forget your password?</a>
        <a href="#">Create account</a>
        <input
          type="checkbox"
          name="save_login_state"
          label="Keep me signed in"
        />
      </div>
    </div>
  );
}
export default Login;
