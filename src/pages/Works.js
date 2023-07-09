//imports from react
import React from "react";
//imports form bootstrap
import { Card, Carousel, Container } from "react-bootstrap";
//imports
import Work1 from "../assets/Images/works/work1.jpg";
import Work2 from "../assets/Images/works/work1.jpg";
import Work3 from "../assets/Images/works/work1.jpg";
import Work4 from "../assets/Images/works/work1.jpg";
import Work5 from "../assets/Images/works/work1.jpg";
const Works = () => {
  const arr = [Work1, Work2, Work3, Work4, Work5];
  return (
    <Container fluid>
      <h4 className="title">Services</h4>
      <Carousel wrap={false} indicators={false}>
        {arr.map((item) => {
          return (
            <Carousel.Item>
              <Card style={{ width: "18em" }} className="card_style">
                <Card.Img variant="top" src={item} alt="wedding" />
                <Card.Body>
                  <Card.Title>Maternity</Card.Title>
                </Card.Body>
              </Card>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};
export default Works;
