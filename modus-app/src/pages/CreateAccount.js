import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./CreateAccount.css";

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/home");
  }, [user, loading]);
  return (
    <div>
      <h2>Create Account</h2>
      <input
        type="text"
        placeholder="First Name "
        className="registerName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name "
        className="registerName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email Address "
        className="registerEmail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password "
        className="registerPassword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="confirm" placeholder="Confirm Password " />
      <button className="registerButton" onClick={register}>
        Sign Up
      </button>
    </div>
  );
}
export default CreateAccount;
