import React, { useEffect, useState, useRef } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { auth, registerWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./CreateAccount.css";

function CreateAccount() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const signup = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
  // return (
  //   <div>
  //     <h2>Create Account</h2>
  //     <input
  //       type="text"
  //       placeholder="First Name "
  //       className="registerName"
  //       value={firstName}
  //       onChange={(e) => setFirstName(e.target.value)}
  //     />
  //     <input
  //       type="text"
  //       placeholder="Last Name "
  //       className="registerName"
  //       value={lastName}
  //       onChange={(e) => setLastName(e.target.value)}
  //     />
  //     <input
  //       type="text"
  //       placeholder="Email Address "
  //       className="registerEmail"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //     />
  //     <input
  //       type="password"
  //       placeholder="Password "
  //       className="registerPassword"
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //     />
  //     <input
  //       type="passwordConfirm"
  //       placeholder="Confirm Password "
  //       className="confirmPassword"
  //       value={confirmPassword}
  //       onChange={(e) => setConfirm(e.target.value)}
  //     />
  //     <button className="registerButton" onClick={registerWithEmailAndPassword}>
  //       Sign Up
  //     </button>
  //   </div>
  // );
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="firstName" ref={firstNameRef} required />
            </Form.Group>
            <Form.Group id="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="lastName" ref={lastNameRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
}
export default CreateAccount;
