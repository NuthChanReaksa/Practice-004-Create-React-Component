import React, { useEffect } from "react";
import CardComponent from "../components/CardComponent";
import { useState } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const slicedProducts = data.slice(0, 6);
    setProducts(slicedProducts);
    console.log(slicedProducts);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="container mx-auto h-screen flex flex-col justify-center items-center text-gray-500">
        <h1 className="my-5 text-4xl font-bold mb-10">Product Section</h1>
        <CardComponent products={products} />
      </div>
    </>
  );
};

export default ProductPage;
