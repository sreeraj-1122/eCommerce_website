import React from "react";
import { Button, Card } from "react-bootstrap";
import './single.css'
const SingleCard = ({ id, title, images, price }) => {

  return (
    <div className="card-section">
     <Card style={{ width: "20rem",height:"28rem" }} key={id}>
      <Card.Img variant="top" src={images?images:''} style={{ width: "20rem",height:'15rem' }}/>
      <Card.Body>
        <Card.Title>{title?title:''}</Card.Title>
        <Card.Text className="fs-6 fw-medium">Price: <span className="fw-bold ">{price?price:''}Rs</span></Card.Text>
        <Button variant="success fw-bold m-auto ">Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
   
  );
};

export default SingleCard;
