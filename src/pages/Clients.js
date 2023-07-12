//imports from react
import React, { useEffect, useState } from "react";
//imports form bootstrap
import {
  Row,
  Card,
  Container,
  Button,
  Modal,
  Form,
  Col,
} from "react-bootstrap";
//imports
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Add from "../assets/Images/circle-plus-solid.svg";
import Edit from "../assets/Images/pen-to-square-solid.svg";
import Delete from "../assets/Images/trash-solid.svg";
//import firebase
import { db } from "../components/config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import ClientsEditModal from "../components/ui/ClientsEditModal";

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
      items: 2,
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
  useEffect(() => {
    getClient();
  }, []);

  //putClients

  const [event, setEvent] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const submitHandler = async () => {
    try {
      await addDoc(collection(db, "clients"), {
        event: event,
        description: description,
        rating: Number(rating),
      });
      getClient();
    } catch (err) {
      console.log(err.message);
    }
    setShow(false);
  };

  //delete clients
  const deleteHandler = async (id) => {
    try {
      await deleteDoc(doc(db, "clients", id));
      getClient();
    } catch (err) {
      console.log(err.message);
    }
  };

  //update clients and edit modal handler
  const [editShow, setEditShow] = useState(false);
  const editHandleShow = () => setEditShow(true);
  const editHandleClose = () => setEditShow(false);
  const editHandler = () => {
    setEditShow(true);
  };
  // const editHandler = async() => {
  //   try {
  //    await updateDoc(doc(db, "clients", item.id, {}));
  //   getClient();
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

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
                  <Card.Footer>
                    <Container>
                      <Row>
                        <Col xs={8}>Rating {item.rating} out of 5</Col>

                        <Col>
                          <img
                            src={Edit}
                            className="icon_click"
                            alt="editico"
                            onClick={editHandler}
                          />
                          <img
                            src={Delete}
                            className="icon_click"
                            alt="deleteico"
                            onClick={() => deleteHandler(item.id)}
                          />
                        </Col>
                      </Row>
                    </Container>
                  </Card.Footer>
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
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Event</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="event"
                  onChange={(e) => setEvent(e?.target?.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  maxLength={150}
                  placeholder="description"
                  onChange={(e) => setDescription(e?.target?.value)}
                />
                <Form.Text className="text-muted">Max 200 characters</Form.Text>
              </Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setRating(Number(e?.target?.value))}
              >
                <option>Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={submitHandler}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
        <ClientsEditModal
          show={editShow}
          setShow={setEditShow}
          handleShow={editHandleShow}
          handleClose={editHandleClose}
        />
      </Container>
    </div>
  );
};
export default Clients;
