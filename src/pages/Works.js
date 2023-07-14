//imports from react
import React, { useEffect, useState } from "react";
//imports form bootstrap
import { Row, Card, Container, Button, Modal, Form } from "react-bootstrap";
//imports
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Add from "../assets/Images/circle-plus-solid.svg";
import { storage } from "../components/config/firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import CustomToast from "../components/ui/CustomToast";
// import Work1 from "../assets/Images/works/work1.jpg";
// import Work2 from "../assets/Images/works/work2.jpg";
// import Work3 from "../assets/Images/works/work3.jpg";
// import Work4 from "../assets/Images/works/work4.jpg";
// import Work5 from "../assets/Images/works/work5.jpg";
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

  //uploadImage
  const [uploadImage, setUploadImage] = useState(null);
  const submitHandler = async () => {
    handleClose();
    if (!uploadImage) return;
    if (uploadImage.size > 1000000) {
      console.log("file big to upload");
    } else {
      try {
        const imageRef = ref(storage, `Works/${uploadImage.name}`);
        await uploadBytes(imageRef, uploadImage);
        imageFetchHandler();
        setMessage("image uploaded");
        setToast(true);
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  //get image
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "/Works");
  const imageFetchHandler = () => {
    setImageList([]);
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  };
  useEffect(() => {
    imageFetchHandler();
  }, []);
  //Toast
  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <div id="works" className="content_begin">
      <Container fluid>
        <h4 className="title">My Works</h4>
        <Carousel responsive={responsive} draggable={false}>
          {imageList.map((item) => {
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
          <img className="add_icon" src={Add} alt="" onClick={handleShow} />
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Works</Modal.Title>
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
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <CustomToast message={message} setShow={setToast} show={toast} />
    </div>
  );
};
export default Works;
