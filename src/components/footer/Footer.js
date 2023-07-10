//imports from react
import React from "react";
//import from bootstrap
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
//imports
import location from "../../assets/Images/location-dot-solid.svg";
import phone from "../../assets/Images/phone-solid.svg";
import email from "../../assets/Images/envelope-solid.svg";
import chevron from "../../assets/Images/chevron-right-solid (1).svg";

const Footer = () => {
  const handleClickScroll = (props) => {
    const element = document.getElementById(props);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Container className="footer" fluid>
        <Row>
          <Col md>
            <h5>About us</h5>
            <p>
              Lorem ipsum dolor sit amet, di dunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam. Excepteur sint qui officia
              deserunt Excepteur.
            </p>
          </Col>
          <Col>
            <h5>Main Menu</h5>
            <div>
              <ul
                onClick={() => {
                  handleClickScroll("home");
                }}
              >
                <img className="icon" src={chevron} alt="ico" />
                Home
              </ul>
              <ul
                onClick={() => {
                  handleClickScroll("about");
                }}
              >
                <img className="icon" src={chevron} alt="ico" />
                About
              </ul>
              <ul
                onClick={() => {
                  handleClickScroll("services");
                }}
              >
                <img className="icon" src={chevron} alt="ico" />
                Services
              </ul>
              <ul
                onClick={() => {
                  handleClickScroll("works");
                }}
              >
                <img className="icon" src={chevron} alt="ico" />
                Work
              </ul>

              <ul
                onClick={() => {
                  handleClickScroll("clients");
                }}
              >
                <img className="icon" src={chevron} alt="ico" />
                Happy Clients
              </ul>
              <ul
                onClick={() => {
                  handleClickScroll("updates");
                }}
              >
                <img className="icon" src={chevron} alt="ico" />
                Updates
              </ul>
            </div>
          </Col>
          <Col>
            <h5>Contact us</h5>
            <div>
              <ul>
                <img className="icon" src={location} alt="ico" />
                Location
              </ul>
              <ul>
                <img className="icon" src={phone} alt="ico" />
                Phone
              </ul>
              <ul>
                <img className="icon" src={email} alt="ico" />
                Mail
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Footer;
