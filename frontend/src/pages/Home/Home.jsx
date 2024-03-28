import React from "react";
import { Carousel } from "react-bootstrap";
import './Home.css'
function Home() {
  return (
    <Carousel className="main-home">
      <Carousel.Item>
        <img
          src="https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg"
          alt=""

        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://as2.ftcdn.net/v2/jpg/05/69/09/57/1000_F_569095708_1C6lYhkZVjoJEweJauAjMCRkvLZl4jP9.jpg"
          alt=""
        />{" "}
      </Carousel.Item>
     
    </Carousel>
  );
}

export default Home;
