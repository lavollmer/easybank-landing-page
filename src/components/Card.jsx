import React from "react";

const Card = ({ title, content, author, image, imageDesc }) => {
  return (
    <div className="flex flex-col p-10 rounded-lg shadow-lg bg-white">
      <img
        src={image}
        alt={imageDesc}
        className="h-full w-full object-cover rounded-t-lg"
      />
      <div className="p-4">
        <p className="text-grayish-blue">{author}</p>
        <h2 className="text-dark-blue text-xl font-semibold">{title}</h2>
        <p className="text-grayish-blue mt-2">{content}</p>
      </div>
    </div>
  );
};

export default Card;
