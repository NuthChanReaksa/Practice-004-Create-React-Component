import { Rating } from "flowbite-react";

const FeedbackComponent = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center items-center h-screen mt-10 text-gray-500">
        <h1 className="text-4xl font-bold">
          Here is the rating of product about page
        </h1>
      </div>
      <div className="mb-2 mt-10 ml-10">
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
          <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            4.95 out of 5
          </p>
        </Rating>
        <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
          1,745 global ratings
        </p>
        <Rating.Advanced percentFilled={70} className="mb-2">
          5 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={17} className="mb-2">
          4 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={8} className="mb-2">
          3 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={4} className="mb-2">
          2 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
      </div>
    </>
  );
};
export default FeedbackComponent;
