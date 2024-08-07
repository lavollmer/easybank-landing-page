import React from "react";
import introDesktop from "../assets/bg-intro-desktop.svg";
import introMobile from "../assets/bg-intro-mobile.svg";
import imageMockups from "../assets/image-mockups.png";

const SplashPage = () => {
  return (
    <>
      <div className="hidden md:flex bg-very-light-gray font-public-sans p-10">
        <div className="flex flex-row relative p-20">
          <div className="flex flex-col justify-center w-1/2 p-10 space-y-6">
            <div className="flex items-center text-left">
              <h1 className="text-dark-blue text-7xl">
                Next generation of digital banking
              </h1>
            </div>
            <div>
              <p className="text-grayish-blue text-2xl">
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
            </div>
            <div>
              <button className="bg-gradient-to-r to-blue-300 from-green-200 rounded-full text-white text-xl cursor-pointer p-2 py-4 px-8">
                Request Invite
              </button>
            </div>
          </div>
          <div>
            <div>
              <img
                src={introDesktop}
                alt="intro desktop image"
                className="absolute z-0 h-100 w-100"
              />
              <img
                src={imageMockups}
                alt="intro desktop image"
                className="absolute z-10 h-100 w-100"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:hidden bg-very-light-gray font-public-sans">
        <div>
          <div className="relative p-40">
            <div>
              <img
                src={introMobile}
                alt="intro desktop image"
                className="absolute top-0 left-0 w-full h-1/2 object-cover z-0"
              />
              <img
                src={imageMockups}
                alt="intro desktop image"
                className="absolute top-0 left-0 w-full object-cover z-10"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-14 space-y-6 mt-20">
            <h1 className="flex flex-col items-center justify-center text-center text-dark-blue text-3xl">
              Next generation of digital banking
            </h1>
            <p className="text-grayish-blue text-md">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <div>
              <button className="bg-gradient-to-r to-blue-300 from-green-200 rounded-full text-white text-md cursor-pointer py-2 px-4">
                Request Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashPage;
