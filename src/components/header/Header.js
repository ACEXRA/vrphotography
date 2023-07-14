//import react
import React, { useState } from "react";
//imports bootstrap
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Modal, Button, Form } from "react-bootstrap";
//import assets
import Logo from "../../assets/Images/logo.jpg";
import CustomToast from "../ui/CustomToast";
//firbase
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
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

  //authetication for login
  const submitHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
      .then((user) => {
        if (user.user.uid) {
          setShow(false);
          setToast(true);
          setMessage("User Logged");
          window.location.reload(false);
        } else {
          console.log("wrong");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  //logout
  const logoutHandler = async () => {
    try {
      setShow(false);
      await signOut(auth);
      setToast(true);
      setMessage("Logged Out");
      window.location.reload(false);
    } catch (err) {
      console.log(err.message);
    }
  };
  //Toast
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(false);
  return (
    <Navbar expand="md" className="header" fixed="top">
      <Container fluid>
        <Navbar.Brand>
          <img src={Logo} alt="temp" className="logo" onClick={handleShow} />
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
            <Nav>
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
              {/* <Nav.Link>
                <img
                  src={User}
                  className="icon"
                  alt="user"
                  onClick={handleShow}
                />
              </Nav.Link> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {auth.currentUser ? (
            <Button onClick={logoutHandler}>Sign out</Button>
          ) : (
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
          )}
        </Modal.Body>
      </Modal>
      <CustomToast show={toast} setShow={setToast} message={message} />
    </Navbar>
  );
};

export default Header;
