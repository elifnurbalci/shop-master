import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const subtotalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const reset = () => {
    setCart([]);
  };
  
  var totalPrice = subtotalPrice;
  const [checked, setChecked] = useState(false)
  const handleClick = () => {
    setChecked(!checked);
    totalPrice -= 0.50;
  }


  if (cart.length === 0) {
    return (
      <div style={{ position: "sticky", float: "right", width: "250px" }}>
        <Card>
          <Card.Body>
            <Card.Title>CART</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">items in cart : {cart.length}</Card.Subtitle>
            <hr />
            <Card.Text>
              EMPTY CART
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  } else {

    return (
      <div style={{ position: "sticky", float: "right", width: "250px" }}>
        <Card>
          <Card.Body>
            <Card.Title>CART</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">items in cart : {cart.length}</Card.Subtitle>
            <hr />
            <Card.Text>
              Cart List:
              <br />
              {cart.map(product => <li> {product.productName} </li>)}
              <br />
              <hr />
              Subtotal price : £ {subtotalPrice.toFixed(2)}
              <hr />
                <input onChange={handleClick} type="checkbox" name="redeem"/>
                <label for="redeem">-£0.50 redeem code</label>
              <hr />
              ?Total price : £ {totalPrice.toFixed(2)}
            </Card.Text>
            <Button variant="warning" onClick={reset} >
              CLEAR
            </Button>
            <Button variant="danger" >
              CHECKOUT
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  };

};
export default Cart;
