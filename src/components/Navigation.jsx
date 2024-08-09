import React from "react";
import Hamburger from "../assets/icon-hamburger.svg";
import Logo from "../assets/logo.svg";

const Navigation = () => {
  return (
    <div className="font-public-sans">
      <div className="md:hidden flex flex-row fixed top-0 z-20 w-full justify-between items-center p-6 bg-white">
        <div>
          <img src={Logo} alt="Easybank logo" />
        </div>
        <div>
          <img src={Hamburger} alt="Hamburger menu" />
        </div>
      </div>
      <div className="hidden md:flex flex-row fixed top-0 z-20 w-full justify-between items-center bg-white font-public-sans p-8">
        <div>
          <img src={Logo} alt="Easybank logo" />
        </div>
        <div className="flex flex-row space-x-6 text-grayish-blue cursor-pointer">
          <h1 className="hover:border-b-2 hover:border-lime-green">Home</h1>
          <h1 className="hover:border-b-2 hover:border-lime-green">About</h1>
          <h1 className="hover:border-b-2 hover:border-lime-green">Contact</h1>
          <h1 className="hover:border-b-2 hover:border-lime-green">Blog</h1>
          <h1 className="hover:border-b-2 hover:border-lime-green">Careers</h1>
        </div>
        <div>
          <button className="bg-gradient-to-r to-blue-400 from-green-400 rounded-full text-white cursor-pointer p-2 px-6 hover:from-blue-400 hover:to-green-300">Request Invite</button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
