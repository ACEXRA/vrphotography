//imports from reacts
import React from "react";
//import from bootstrap
import { Col, Container, Row, Image } from "react-bootstrap";
//imports
import profile from "../assets/Images/profile.jpg";
import arrow from "../assets/Images/chevron-yellow.svg";

const About = () => {
  return (
    <div id="about" className="content_begin">
      <Container className="about">
        <Row>
          <h4 className="title">ABOUT US</h4>
        </Row>
        <Row>
          <Col xl md={12}>
            <Image
              className="profile_img"
              src={profile}
              alt="profile img"
              fluid
            />
          </Col>
          <Col>
            <Row>
              <p className="font_theme1">
                I'm <span className="sub_title">RajKumar,</span> a freelance
                photographer. My passion is taking photos of the most stunning
                architecture around the world.
              </p>
              <p className="font_theme1">
                I love to pause the wild, happy and real moments of life, just
                to hear their stories untold. Viverra tristique usto duis vitae
                diam neque nivamus estan ateuene artines viverra nec setlie no
                curabit tristique.
              </p>
            </Row>
            <Row>
              <span className="sub_title">My Equipment</span>
            </Row>
            <Row>
              <ul style={{ "list-style-type": "none" }}>
                <li className="font_theme1">
                  <img className="icon" src={arrow} alt="ico" />
                  Canon Eos 5D Mark IV 24-105mm
                </li>
                <li className="font_theme1">
                  <img className="icon" src={arrow} alt="ico" />
                  Manfrotto Compact Tripod
                </li>
                <li className="font_theme1">
                  <img className="icon" src={arrow} alt="ico" />
                  DJI Ronin MX 3-Axis Gimbal Stabilizer
                </li>
                <li className="font_theme1">
                  <img className="icon" src={arrow} alt="ico" />
                  Canon EF100-400MM Lens
                </li>
                <li className="font_theme1">
                  <img className="icon" src={arrow} alt="ico" />
                  Wondlan Wer01 Wireless Slider Time Lapse
                </li>
                <li className="font_theme1">
                  <img className="icon" src={arrow} alt="ico" />
                  Nikon D5 24-70mm F2.8
                </li>
                <li className="font_theme1">
                  <img className="icon" src={arrow} alt="ico" />
                  Nikon Af-S 24Mm F/1.4G Ed Lens
                </li>
                <li className="font_theme1">
                  <img className="icon" src={arrow} alt="ico" />
                  Wondlan Sniper Sn 2.1 Wf Wireless Dslr Rig
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
