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



  //For this week only Apples are at 10% off per bag purchased,
  const dProduct = cart.map(product => product.productId);
  console.log({dProduct});
  const filteredApple = dProduct.filter(id => id === 1);
  const numberApple = filteredApple.length;
  const discountedApple = numberApple * 0.1;

  console.log({filteredApple});


  //For every two tins of soup that are purchased a bread can also be purchased at 50% off

  const filteredSoup = dProduct.filter(id => id === 4);
  const filteredBread = dProduct.filter(id => id === 2);
  const numberSoup = filteredSoup.length;
  const numberBread = filteredBread.length;
  let dSoup, discountedBread, info;
  dSoup = Math.floor(numberSoup / 2); 



  if ((dSoup === 1 && numberBread >= 1) || (dSoup > 1 && numberBread >= dSoup) ) {
    discountedBread = dSoup * 0.4;
  } else if (dSoup < 1 && numberBread >= 0) {
    discountedBread = 0;
  } else if (dSoup > 1 && numberBread < dSoup) {
    discountedBread = numberBread * 0.4;
  } 
  else {
    discountedBread = 0;
  }

  const discount = (discountedApple + discountedBread).toFixed(2);
  if (discount != 0) {
    info = `Discount: £ ${discount}`;
  } else {
    info = "No offers available---";
  };

  return (
    <div>
      {
        cart.length === 0 ?
          <div style={{ position: "fixed", top: "10", right: "0", float: "right", width: "250px" }}>
            <Card style={{ boxShadow: "1px 1px 1px teal" }}>
              <Card.Body>
                <Card.Title>CART</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">items in cart : {cart.length}</Card.Subtitle>
              </Card.Body>
            </Card>
          </div> :
          <div style={{ position: "fixed", top: "10", right: "0", float: "right", width: "250px" }}>
            <Card style={{ backgroundColor: "#f5f8ff", boxShadow: "1px 1px 1px teal" }} >
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
                  {info}
                  <hr />
                  <input onChange={handleClick} type="checkbox" checked={checked} name="redeem" />
                  <label for="redeem">-£0.50 redeem code</label>
                  <hr />
                  Total price : £ {(totalPrice - discount).toFixed(2)}
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
