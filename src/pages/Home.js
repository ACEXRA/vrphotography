import React from "react";
//imports from bootstrap
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
//imports
import Home1 from "../assets/Images/home/home_1.jpg";
import Home2 from "../assets/Images/home/home_2.jpg";
import Home3 from "../assets/Images/home/home_3.jpg";
import Home4 from "../assets/Images/home/home_4.jpg";

const Home = () => {
  return (
    <div id="home">
      <Carousel>
        <Carousel.Item>
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
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Home;
