import React from "react";
import introDesktop from "../assets/bg-intro-desktop.svg";
import introMobile from "../assets/bg-intro-mobile.svg";

const SplashPage = () => {
  return (
    <div className="bg-very-light-gray font-public-sans">
      <div>
        <div>
          <h1 className="text-dark-blue text-xl">
            Next generation of digital banking
          </h1>
        </div>
        <div>
          <p className="text-grayish-blue">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
        </div>
        <div>
          <button className="bg-gradient-to-r to-blue-300 from-green-200 rounded-full text-white cursor-pointer p-2 px-6">
            Request Invite
          </button>
        </div>
      </div>
      <div>
        <img src={introDesktop} alt="intro desktop image" />
      </div>
    </div>
  );
};

export default SplashPage;
