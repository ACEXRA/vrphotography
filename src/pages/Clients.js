//imports from react
import React, { useEffect, useState } from "react";
//imports form bootstrap
import { Row, Card, Container, Button, Modal } from "react-bootstrap";
//imports
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Add from "../assets/Images/circle-plus-solid.svg";
//import firebase
import { db } from "../components/config/firebase";
import { getDocs, collection } from "firebase/firestore";

const Clients = () => {
  const [show, setShow] = useState(false);
  const [clientsList, setClientsList] = useState([]);

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

  //getList from db
  useEffect(() => {
    const getClient = async () => {
      try {
        const data = await getDocs(collection(db, "clients"));
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setClientsList(filteredData);
      } catch (err) {
        console.log(err);
      }
    };
    getClient();
  }, []);
  return (
    <div id="clients" className="content_begin">
      <Container fluid>
        <h4 className="title">Happy Clients</h4>
        <Carousel responsive={responsive} draggable={false}>
          {clientsList.map((item) => {
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
                    <Card.Title>{item.event}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer> Rating {item.rating} out of 5</Card.Footer>
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
export default Clients;
