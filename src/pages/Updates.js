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
import { storage, auth } from "../components/config/firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import CustomToast from "../components/ui/CustomToast";

const Updates = () => {
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

  //getUpdates
  const [updatesImage, setUpdatesImage] = useState([]);
  const imageFetchHandler = () => {
    const imageListRef = ref(storage, "/Updates");
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setUpdatesImage((prev) => [...prev, url]);
        });
      });
    });
  };
  useEffect(() => {
    setUpdatesImage([]);
    imageFetchHandler();
  }, []);

  //upload update
  const [uploadImage, setUploadImage] = useState(null);
  const submitHandler = async () => {
    handleClose();
    if (!uploadImage) return;
    if (uploadImage.size > 1000000) {
      console.log("file big to upload");
    } else {
      try {
        const imageRef = ref(storage, `Updates/${uploadImage.name}`);
        await uploadBytes(imageRef, uploadImage);
        setUpdatesImage([]);
        imageFetchHandler();
        setMessage("image uploaded");
        setToast(true);
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  //Toast
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(false);

  return (
    <div id="updates" className="content_begin">
      <Container fluid>
        <h4 className="title">Updates</h4>
        <Carousel responsive={responsive} draggable={false}>
          {updatesImage.map((item) => {
            return (
              <div key={item} className="card_container">
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
          {auth.currentUser ? (
            <img className="add_icon" src={Add} alt="" onClick={handleShow} />
          ) : (
            <div style={{ height: "2em" }}></div>
          )}
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Updates</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload an image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setUploadImage(e.target.files[0])}
              />
              <Form.Text className="text-muted">
                File should be less than 1mb
              </Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={submitHandler}>
              submit
            </Button>
          </Modal.Footer>
        </Modal>
        <CustomToast show={toast} setShow={setToast} message={message} />
      </Container>
    </div>
  );
};
export default Updates;
