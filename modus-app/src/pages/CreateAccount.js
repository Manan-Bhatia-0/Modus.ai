import React from "react";
import "./CreateAccount.css";

export function Login() {
  return (
    <div>
      <h2>Create Account</h2>
      <Input type="firstname" placeholder="First Name " />
      <Input type="lastname" placeholder="Last Name " />
      <Input type="email" placeholder="Email Address " />
      <Input type="password" placeholder="Password " />
      <Input type="confirm" placeholder="Confirm Password " />
      <button className="login">Sign Up</button>
    </div>
  );
}
