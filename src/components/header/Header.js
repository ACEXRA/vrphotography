//import react
import React from "react";
//imports bootstrap
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
//import assets
import Logo from "../../assets/Images/logo.jpg";
const Header = () => {
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
            <Nav>
              <Nav.Link href="#Home">
                <b>Home</b>
              </Nav.Link>
              <Nav.Link href="#About">
                <b>About</b>
              </Nav.Link>
              <Nav.Link href="#Services">
                <b>Services</b>
              </Nav.Link>
              <Nav.Link href="#Work">
                <b>Work</b>
              </Nav.Link>
              <Nav.Link href="#Clients">
                <b>Happy Clients</b>
              </Nav.Link>
              <Nav.Link href="#Updates">
                <b>Updates</b>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
