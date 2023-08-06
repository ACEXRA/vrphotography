//imports from reacts
import React from "react";
//import from bootstrap
import { Col, Container, Row, Image } from "react-bootstrap";
//imports
import profile from "../assets/Images/about.jpg";
import arrow from "../assets/Images/chevron-yellow.svg";

const About = () => {
  return (
    <div id="about" className="content_begin">
      <Container>
        <Row>
          <h1 className="title">ABOUT US</h1>
        </Row>
        <Row style={{ gap: "3.6rem" }}>
          <Col xl md={12}>
            <Image src={profile} alt="profile img" fluid />
          </Col>
          <Col>
            <Row>
              <p className="about_content">
                I'm <span className="sub_title">RajKumar,</span> a professional
                photographer. My passion is taking photos of the most stunning
                architecture around the world.
              </p>
              <p className="about_content">
                I love to pause the wild, happy and real moments of life, just
                to hear their stories untold.
              </p>
            </Row>
            <Row>
              <span className="sub_title">My Equipment</span>
            </Row>
            <Row>
              <ul style={{ listStyleType: "none" }}>
                <li className="list">
                  <img className="icon" src={arrow} alt="ico" />
                  Canon Eos 5D Mark IV 24-105mm
                </li>
                <li className="list">
                  <img className="icon" src={arrow} alt="ico" />
                  Signal 85mm 1.4
                </li>
                <li className="list">
                  <img className="icon" src={arrow} alt="ico" />
                  DJI Ronin S Gimbal Stabilizer
                </li>
                <li className="list">
                  <img className="icon" src={arrow} alt="ico" />
                  Canon 70-200 lens
                </li>
                <li className="list">
                  <img className="icon" src={arrow} alt="ico" />
                  Wondlan Wer01 Wireless Slider Time Lapse
                </li>
                <li className="list">
                  <img className="icon" src={arrow} alt="ico" />
                  Nikon D5 24-70mm F2.8
                </li>
              </ul>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default About;
