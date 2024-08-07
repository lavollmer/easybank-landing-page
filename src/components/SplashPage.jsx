import React from "react";
import introDesktop from "../assets/bg-intro-desktop.svg";
import introMobile from "../assets/bg-intro-mobile.svg";
import imageMockups from "../assets/image-mockups.png";

const SplashPage = () => {
  return (
    <div className="flex flex-row z-0 bg-very-light-gray font-public-sans">
      <div className="flex flex-col justify-center">
        <div className="flex items-center text-left">
          <h1 className="text-dark-blue text-5xl">
            Next generation of digital banking
          </h1>
        </div>
        <div>
          <p className="text-grayish-blue text-2xl">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
        </div>
        <div>
          <button className="bg-gradient-to-r to-blue-300 from-green-200 rounded-full text-white text-xl cursor-pointer p-2 py-4 px-8">
            Request Invite
          </button>
        </div>
      </div>
      <div className="flex flex-col relative">
        <img src={introDesktop} alt="intro desktop image" className="absolute z-0 h-10 w-10" />
        <img src={imageMockups} alt="intro desktop image" className="absolute z-10 h-10 w-10" />
      </div>
    </div>
  );
};

export default SplashPage;
