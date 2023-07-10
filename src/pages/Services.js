import React from "react";
//import from bootstrap
import { Card, Col, Container, Row } from "react-bootstrap";
//imports
import WeddingImg from "../assets/Images/wedding.jpeg";
import BirthdayImg from "../assets/Images/birthdayparty.jpeg";
import BabyshootImg from "../assets/Images/babyshoot.jpeg";
import MaternityImg from "../assets/Images/maternity.jpeg";
import PubertyImg from "../assets/Images/puberty.jpeg";
import Label from "../assets/Images/zlabel.jpeg";
const Services = () => {
  return (
    <div id="services" className="content_begin">
      <Container fluid>
        <h4 className="title">Services</h4>
        <Row>
          <Col xl={4} md={6}>
            <Card className="card_style">
              <Card.Img variant="top" src={WeddingImg} alt="wedding" />
              <Card.Body>
                <Card.Title>Wedding</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} md={6}>
            <Card className="card_style">
              <Card.Img variant="top" src={BirthdayImg} alt="wedding" />
              <Card.Body>
                <Card.Title>Birthday</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} md={6}>
            <Card className="card_style">
              <Card.Img variant="top" src={BabyshootImg} alt="wedding" />
              <Card.Body>
                <Card.Title>Baby shooting</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} md={6}>
            <Card className="card_style">
              <Card.Img variant="top" src={MaternityImg} alt="wedding" />
              <Card.Body>
                <Card.Title>Maternity</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} md={6}>
            <Card className="card_style">
              <Card.Img variant="top" src={PubertyImg} alt="wedding" />
              <Card.Body>
                <Card.Title>Puberty</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} md={6}>
            <Card className="card_style">
              <Card.Img variant="top" src={Label} alt="wedding" />
              <Card.Body>
                <Card.Title>Label</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Services;
