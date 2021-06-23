import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [subtotalPrice, setSubtotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const reset = () => {
    setCart([]);
  };
  useEffect(() => {
    let subtotalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    setSubtotalPrice(subtotalPrice);
    if (checked) {
      subtotalPrice -= 0.5;
    }
    setTotalPrice(subtotalPrice);
  }, [cart]);
  const [checked, setChecked] = useState(false)
  const handleClick = () => {
    if (!checked) {
      setTotalPrice(totalPrice - 0.5);
    }
    else if (totalPrice > 0) {
      setTotalPrice(totalPrice + 0.5);
    }
    setChecked(!checked);
  }

  return (
    <div>
      {
        cart.length === 0 ?
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
          </div> :
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
                  <input onChange={handleClick} type="checkbox" checked={checked} name="redeem" />
                  <label for="redeem">-£0.50 redeem code</label>
                  <hr />
                  Total price : £ {totalPrice.toFixed(2)}
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
      }
    </div>
  );


};
export default Cart;
