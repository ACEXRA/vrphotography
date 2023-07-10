//import react
import React, { useState } from "react";
//imports bootstrap
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Modal, Button, Form, Col, InputGroup, Row } from "react-bootstrap";
//import assets
import Logo from "../../assets/Images/logo.jpg";
import User from "../../assets/Images/user-solid.svg";
//firbase
import { Auth, auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const Header = () => {
  //sign in
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Handle scroll
  const handleClickScroll = (props) => {
    const element = document.getElementById(props);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    signInWithEmailAndPassword(auth, username, password)
      .then((user) => {
        if (user.uid) {
          console.log("success");
          setShow(false);
        } else {
          console.log("wrong");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Navbar expand="md" className="header" fixed="top">
      <Container fluid>
        <Navbar.Brand>
          <img src={Logo} alt="temp" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav style={{ alignItems: "center" }}>
              <Nav.Link
                href="#Home"
                onClick={() => {
                  handleClickScroll("home");
                }}
              >
                <b>Home</b>
              </Nav.Link>
              <Nav.Link
                href="#About"
                onClick={() => {
                  handleClickScroll("about");
                }}
              >
                <b>About</b>
              </Nav.Link>
              <Nav.Link
                href="#Services"
                onClick={() => {
                  handleClickScroll("services");
                }}
              >
                <b>Services</b>
              </Nav.Link>
              <Nav.Link
                href="#Work"
                onClick={() => {
                  handleClickScroll("works");
                }}
              >
                <b>Work</b>
              </Nav.Link>
              <Nav.Link
                href="#Clients"
                onClick={() => {
                  handleClickScroll("clients");
                }}
              >
                <b>Happy Clients</b>
              </Nav.Link>
              <Nav.Link
                href="#Updates"
                onClick={() => {
                  handleClickScroll("updates");
                }}
              >
                <b>Updates</b>
              </Nav.Link>
              <Nav.Link>
                <img
                  src={User}
                  className="icon"
                  alt="user"
                  onClick={handleShow}
                />
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default Header;
