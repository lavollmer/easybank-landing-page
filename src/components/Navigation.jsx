import React from "react";
import Hamburger from "../assets/icon-hamburger.svg";
import Logo from "../assets/logo.svg";

const Navigation = () => {
  return (
    <div className="font-public-sans">
      <div className="md:hidden flex flex-row justify-between items-center p-6 bg-white">
        <div>
          <img src={Logo} alt="Easybank logo" />
        </div>
        <div>
          <img src={Hamburger} alt="Hamburger menu" />
        </div>
      </div>
      <div className="hidden md:flex flex-row justify-between items-center bg-white font-public-sans p-6">
        <div>
          <img src={Logo} alt="Easybank logo" />
        </div>
        <div className="flex flex-row space-x-2 text-grayish-blue">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Contact</h1>
          <h1>Blog</h1>
          <h1>Careers</h1>
        </div>
        <div>
          <button className="bg-gradient-to-r to-blue-300 from-green-200 rounded-full text-white cursor-pointer p-2 px-6">Request Invite</button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
