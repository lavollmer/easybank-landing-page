import React from "react";
import Money from "../assets/image-currency.jpg";
import Dinner from "../assets/image-restaurant.jpg";
import Plane from "../assets/image-plane.jpg";
import Confetti from "../assets/image-confetti.jpg";
import Card from "./Card.jsx";

const Articles = () => {
  return (
    <div className="bg-very-light-gray text-public-sans p-10">
      <div>
        <h1 className="text-dark-blue text-5xl p-20">Latest Articles</h1>
      </div>
      <div className="flex flex-row items-center space-x-6">
        <Card
          image={Money}
          imageDesc="money"
          author="By Claire Robinson"
          title="Receive money in any currency with no fees"
          content="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."
        />
        <Card
          image={Dinner}
          imageDesc="dinner"
          author="By Wilson Hutton"
          title="Treat yourself without worrying about money"
          content="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
        />
        <Card
          image={Plane}
          imageDesc="plane"
          author="By Wilson Hutton"
          title="Take your Easybank card wherever you go"
          content="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
        />
        <Card
          image={Confetti}
          imageDesc="confetti"
          author="By Claire Robinson"
          title="Our invite-only Beta accounts are now live!"
          content="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site..."
        />
      </div>
    </div>
  );
};

export default Articles;
