import React from "react";
import iconClose from "../assets/icon-close.svg";
import { useState } from "react";

const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <button>
          <img src={iconClose} onClick={handleOnClick} />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center bg-white text-black text-public-sans mt-20 font-semibold space-y-2 m-6">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
        <h1>Blog</h1>
        <h1>Careers</h1>
      </div>
    </>
  );
};

export default SideNavBar;
