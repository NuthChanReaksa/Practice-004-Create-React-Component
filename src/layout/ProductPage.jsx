import React from "react";
import CardComponent from "../components/CardComponent";
import { useState } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple Watch", image: "abc" },
    { id: 2, name: "Apple Watch", image: "abc" },
    { id: 3, name: "Apple Watch", image: "abc" },
    { id: 4, name: "Apple Watch", image: "abc" },
    { id: 5, name: "Apple Watch", image: "abc" },
    { id: 6, name: "Apple Watch", image: "abc" },
    { id: 7, name: "Apple Watch", image: "abc" },
    { id: 8, name: "Apple Watch", image: "abc" },
    { id: 9, name: "Apple Watch", image: "abc" },
    { id: 10, name: "Apple Watch", image: "abc" },
    { id: 11, name: "Apple Watch", image: "abc" },
    { id: 12, name: "Apple Watch", image: "abc" },
  ]);
  return (
    <>
      <CardComponent products={products} />
    </>
  );
};

export default ProductPage;
