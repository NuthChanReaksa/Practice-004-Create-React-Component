import { Card } from "flowbite-react";
import RatingProduct from "./RatingProduct";

const CardComponent = (props) => {
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {props.products.map((product) => (
          <Card
            className="max-w-sm"
            imgSrc="https://www.apple.com/newsroom/images/product/watch/standard/Apple-Watch-SE-8up-hero-220907_big.jpg.large.jpg"
            horizontal
            key={product.id} //for loop data from array
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <RatingProduct />
          </Card>
        ))}
      </div>
    </div>
  );
};
export default CardComponent;
