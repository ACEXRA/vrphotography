import React from "react";
//imports from bootstrap
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
//imports
import Home1 from "../assets/Images/home/home_1.jpg";
import Home2 from "../assets/Images/home/home_2.jpg";
import Home3 from "../assets/Images/home/home_3.jpg";
import Home4 from "../assets/Images/home/home_4.jpg";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div id="home">
      <Carousel controls={false}>
        <Carousel.Item>
          <Container fluid className="banner1">
            <Container className="banner_item">
              <Row>
                <h4>Welcome to</h4>
                <h1>VR Photography</h1>
                <p style={{ width: "500px" }}>
                  I love to pause the wild, happy and real moments of life, just
                  to hear their stories untold.
                </p>
                <div>
                  <button className="banner_btn">
                    <a href="#works">My Works</a>
                  </button>
                  <button
                    className="banner_btn"
                    style={{ marginLeft: "2.4rem" }}
                  >
                    <a href="#footer">Contact</a>
                  </button>
                </div>
              </Row>
            </Container>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container fluid className="banner2">
            <Container className="banner_item">
              <Row>
                <h4>Welcome to</h4>
                <h1>VR Photography</h1>
                <p style={{ width: "500px" }}>
                  I love to pause the wild, happy and real moments of life, just
                  to hear their stories untold.
                </p>
                <div>
                  <button className="banner_btn">
                    <a href="#works">My Works</a>
                  </button>
                  <button
                    className="banner_btn"
                    style={{ marginLeft: "2.4rem" }}
                  >
                    Contact
                  </button>
                </div>
              </Row>
            </Container>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container fluid className="banner3">
            <Container className="banner_item">
              <Row>
                <h4>Welcome to</h4>
                <h1>VR Photography</h1>
                <p style={{ width: "500px" }}>
                  I love to pause the wild, happy and real moments of life, just
                  to hear their stories untold.
                </p>
                <div>
                  <button className="banner_btn">
                    <a href="#works">My Works</a>
                  </button>
                  <button
                    className="banner_btn"
                    style={{ marginLeft: "2.4rem" }}
                  >
                    Contact
                  </button>
                </div>
              </Row>
            </Container>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Home;
{
  /* <Carousel.Item>
          <Image className="home_image" src={Home1} fluid />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="home_image" src={Home2} fluid />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="home_image" src={Home3} fluid />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="home_image" src={Home4} fluid />
        </Carousel.Item> */
}
