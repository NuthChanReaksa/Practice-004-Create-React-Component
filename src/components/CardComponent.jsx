import { Card } from "flowbite-react";
import RatingProduct from "./RatingProduct";

const CardComponent = (props) => {
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {props.products.map((product) => (
          <Card
            className="max-w-sm"
            imgSrc={product.image}
            horizontal
            key={product.id} //for loop data from array
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {product.title}
            </p>
            <RatingProduct />
          </Card>
        ))}
      </div>
    </div>
  );
};
export default CardComponent;
