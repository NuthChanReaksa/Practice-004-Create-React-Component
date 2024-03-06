import React from "react";
import { Rating } from "flowbite-react";

const RatingProduct = () => {
  return (
    <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
    </Rating>
  );
};

export default RatingProduct;
