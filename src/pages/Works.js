//imports from react
import React, { useState } from "react";
//imports form bootstrap
import { Row, Card, Container, Button, Modal } from "react-bootstrap";
//imports
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Add from "../assets/Images/circle-plus-solid.svg";
import Work1 from "../assets/Images/works/work1.jpg";
import Work2 from "../assets/Images/works/work2.jpg";
import Work3 from "../assets/Images/works/work3.jpg";
import Work4 from "../assets/Images/works/work4.jpg";
import Work5 from "../assets/Images/works/work5.jpg";
const Works = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 5,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 3,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
  };
  const arr = [Work1, Work2, Work3, Work4, Work5, Work1, Work1, Work1];
  return (
    <div id="works" className="content_begin">
      <Container fluid>
        <h4 className="title">My Works</h4>
        <Carousel responsive={responsive} draggable={false}>
          {arr.map((item) => {
            return (
              <div className="card_container">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    style={{ width: "286px", height: "429px" }}
                    src={item}
                    alt=""
                  />
                </Card>
              </div>
            );
          })}
        </Carousel>
        <Row style={{ justifyContent: "end" }}>
          <img className="add_icon" src={Add} alt="" onClick={handleShow} />
        </Row>
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
      </Container>
    </div>
  );
};
export default Works;
