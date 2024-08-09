import React from "react";

const Card = ({ title, content, author, image, imageDesc }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg bg-white overflow-hidden">
      <div className="h-48 w-full">
        <img
          src={image}
          alt={imageDesc}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-8">
        <p className="text-grayish-blue text-sm mb-2">{author}</p>
        <h2 className="text-dark-blue text-lg font-semibold">{title}</h2>
        <p className="text-grayish-blue mt-2 text-md">{content}</p>
      </div>
    </div>
  );
};

export default Card;
