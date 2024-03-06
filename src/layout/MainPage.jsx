import React, { useState } from "react";
import ProductPage from "./ProductPage";
import FeedbackComponent from "../components/FeedbackComponent";

const MainPage = () => {
  return (
    <>
      <ProductPage />
      <FeedbackComponent />
    </>
  );
};

export default MainPage;
