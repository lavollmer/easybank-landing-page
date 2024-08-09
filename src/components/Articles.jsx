import React from "react";
import Money from "../assets/image-currency.jpg";
import Dinner from "../assets/image-restaurant.jpg";
import Plane from "../assets/image-plane.jpg";
import Confetti from "../assets/image-confetti.jpg";
import Card from "./Card.jsx";

const Articles = () => {
  return (
    <div className="bg-very-light-gray text-public-sans">
      <div>
        <h1 className="text-dark-blue text-5xl p-20">Latest Articles</h1>
      </div>
      <div className="card-articles">
        <Card
          image={Money}
          imageDesc="money"
          author="By Claire Robinson"
          title="Receive money in any currency with no fees"
          content="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."
          className="bg-blue-500 text-white"
        />
      </div>
    </div>
  );
};

export default Articles;
