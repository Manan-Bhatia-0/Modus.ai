import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
  signInWithFacebook,
} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./modus.css";
import bg_img from '../imgs/LoginBG.svg'

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
    <div className="background">
        {/* <img src={bg_img} alt="background-img" width="100%"/> */}
      <div className="loginPageHeader">
        <h1>Welcome to Modus.ai</h1>
      </div>
    <div className="loginPage">
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
          Log In
        </button>
        <button className="googleLogin" onClick={signInWithGoogle}>
          {" "}
          Log In with Google{" "}
        </button>
        <button className="facebookLogin" onClick={signInWithFacebook}>
          {" "}
          Log In with Facebook{" "}
        </button>
        <div style={{textAlign: "center", fontSize: 14}}>
          <a href="/reset">Forgot your password?</a>
          <br />
          <a href="/register">Create account</a>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Login;
