import React from "react";
import Product from "./Product";

const ProductList = () => {
  const items = [
    {
      productId: 1,
      productName: "Apples",
      price: 1.0,
      unit: "bag",
      image:
        "https://assets.sainsburys-groceries.co.uk/gol/323628/1/640x640.jpg",
    },
    {
      productId: 2,
      productName: "Bread",
      price: 0.8,
      unit: "loaf",
      image:
        "https://assets.sainsburys-groceries.co.uk/gol/3067161/1/640x640.jpg",
    },
    {
      productId: 3,
      productName: "Milk",
      price: 1.3,
      unit: "500ml",
      image:
        "https://assets.sainsburys-groceries.co.uk/gol/1137637/1/640x640.jpg",
    },
    {
      productId: 4,
      productName: "Soup",
      price: 0.65,
      unit: "tin",
      image:
        "https://assets.sainsburys-groceries.co.uk/gol/2055633/1/640x640.jpg",
    },
  ];

  return (
    <div>
      {items.map((item) => (
        <Product
          image={item.image}
          productName={item.productName}
          price={item.price}
          unit={item.unit}
          productId={item.productId}
        />
      ))}
    </div>
  );
};

export default ProductList;
