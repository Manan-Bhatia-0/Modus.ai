import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../firebase";
import { useAuth } from "./AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";
import "./ResetPassword.css";

function ResetPassword() {
  const emailRef = useRef();
  const resetPassword = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/">Login</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
  // const [email, setEmail] = useState("");
  // const [user, loading, error] = useAuthState(auth);
  // const history = useHistory();
  // useEffect(() => {
  //   if (loading) return;
  //   if (user) history.replace("/home");
  // }, [user, loading]);
  // return (
  //   <div className="Reset">
  //     <input
  //       type="text"
  //       placeholder="Email Address "
  //       className="resetEmail"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //     />
  //     <button
  //       className="resetButton"
  //       onClick={() => sendPasswordResetEmail(email)}
  //     >
  //       Reset Password
  //     </button>
  //   </div>
  // );
}
export default ResetPassword;
