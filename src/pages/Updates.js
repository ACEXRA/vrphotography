//imports from react
import React, { useEffect, useState } from "react";
//imports form bootstrap
import { Row, Card, Container, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
//imports
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Add from "../assets/Images/circle-plus-solid.svg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/config/firebase";

const Updates = () => {
  const [updatesList, setUpdatesList] = useState([]);
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
  // const arr = ["1", "1", "21", "23", "213", "213", "123", "213"];

  //getUpdates from db
  useEffect(() => {
    const getUpdates = async () => {
      try {
        const data = await getDocs(collection(db, "updates"));
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUpdatesList(filteredData);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUpdates();
  }, []);
  return (
    <div id="updates" className="content_begin">
      <Container fluid>
        <h4 className="title">Updates</h4>
        <Carousel responsive={responsive} draggable={false}>
          {updatesList.map((item) => {
            return (
              <div key={item.id} className="card_container">
                <Card
                  style={{
                    width: "20em",
                    height: "25em",
                    background: "#ffc916",
                  }}
                >
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
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
            <Modal.Title>Updates</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="title" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} maxLength={150} />
                <Form.Text className="text-muted">Max 200 characters</Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              submit
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};
export default Updates;
