import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
  signInWithFacebook,
} from "../firebase";
import { useAuth, AuthProvider } from "./AuthContext.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [user, loading, error] = useAuthState(auth);
  // const history = useHistory();
  // useEffect(() => {
  //   if (loading) {
  //     //loading screen
  //     return;
  //   }
  //   if (user) history.replace("/home");
  // }, [user, loading]);
  const emailRef = useRef();
  const passwordRef = useRef();
  const login = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <button className="googleLogin" onClick={signInWithGoogle}>
            {" "}
            Login with Google{" "}
          </button>
          <button className="facebookLogin" onClick={signInWithFacebook}>
            {" "}
            Login with Facebook{" "}
          </button>
          <div className="w-100 text-center mt-3">
            <Link to="/reset">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/register">Sign Up</Link>
      </div>
    </>
  );
  // return (
  //   <div className="loginPage">
  //     <h2>Log in </h2>
  //     <div className="loginContainer">
  //       <input
  //         type="text"
  //         placeholder="Email Address "
  //         className="loginText"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //       />
  //       <input
  //         type="password"
  //         placeholder="Password "
  //         className="passwordText"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //       <button
  //         className="login"
  //         onClick={() => signInWithEmailAndPassword(email, password)}
  //       >
  //         Log in
  //       </button>
  //       <button className="googleLogin" onClick={signInWithGoogle}>
  //         {" "}
  //         Login with Google{" "}
  //       </button>
  //       <button className="facebookLogin" onClick={signInWithFacebook}>
  //         {" "}
  //         Login with Facebook{" "}
  //       </button>
  //       <a href="/reset">Forget your password?</a>
  //       <a href="/register">Create account</a>
  //       <input
  //         type="checkbox"
  //         name="save_login_state"
  //         label="Keep me signed in"
  //       />
  //     </div>
  //   </div>
  // );
}
export default Login;
