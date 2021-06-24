import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardColumns } from "react-bootstrap";

const Product = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    const product = { productName: props.productName, price: props.price, productId: props.productId };
    setCart((currentState) => [...currentState, product]);
  };
  return (
    <div className="float-cart">
      <CardColumns style={{ display: "inline" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.productName}</Card.Title>
          <Card.Subtitle>
            £{props.price} per {props.unit}
          </Card.Subtitle>
          <br />
          <small>
          <Card.Text>Some descriptions about the product</Card.Text>
          </small>
          <br />
          <Button variant="info" onClick={addToCart}>
            Add To Cart
          </Button>
        </Card.Body>
      </CardColumns>
      </div>
  );
};

export default Product;
