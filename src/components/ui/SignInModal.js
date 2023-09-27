import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import CustomToast from "./CustomToast";

const SignInModal = ({ show, setShow, handleClose }) => {
  //form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [generalError, setGeneralError] = useState("");

  //Toast
  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    setGeneralError("");
    setConfirmPasswordError("");
  }, [handleClose]);

  //submit
  const submitHandler = (e) => {
    setGeneralError("");
    e.preventDefault();
    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      return;
    }
    setConfirmPasswordError(false);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setShow(false);
        setToast(true);
        setMessage("User Created Successfully");
      })
      .catch((err) => {
        if (err.code === "auth/weak-password") {
          setGeneralError("Password should have atleast 6 characters");
        }
        if (err.code === "auth/email-already-in-use") {
          setGeneralError("Email already exist");
        }
      });
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>Sign Up</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Form onSubmit={submitHandler} style={{ width: "100%" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="ConfirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPasswordError && (
                <span style={{ fontSize: "1rem", color: "#000000" }}>
                  Password doesnt match
                </span>
              )}
              <span style={{ fontSize: "1rem", color: "#000000" }}>
                {generalError ? generalError : ""}
              </span>
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
          <p>Or</p>
          <Button
            variant="primary"
            style={{ marginBottom: "1rem", width: "15rem" }}
          >
            Sign in with Google
          </Button>
          <p>
            ALready have an account, click here to{" "}
            <u className="login_link">Login</u>
          </p>
        </Modal.Body>
      </Modal>
      <CustomToast show={toast} setShow={setToast} message={message} />
    </>
  );
};

export default SignInModal;
