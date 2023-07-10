//import react
import React, { useState } from "react";
//imports bootstrap
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Modal, Button } from "react-bootstrap";
//import assets
import Logo from "../../assets/Images/logo.jpg";
import User from "../../assets/Images/user-solid.svg";
const Header = () => {
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default Header;
