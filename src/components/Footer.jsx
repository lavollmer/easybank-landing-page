import React from "react";

//importing assets for footer
import Logo from "../assets/logo.svg";
import Facebook from "../assets/icon-facebook.svg";
import Twitter from "../assets/icon-twitter.svg";
import Youtube from "../assets/icon-youtube.svg";
import Pinterest from "../assets/icon-pinterest.svg";
import Instagram from "../assets/icon-instagram.svg";
import LogoWhite from "../assets/easybanklogo.png";

const Footer = () => {
  return (
    <>
      <div className="hidden md:flex flex-row bg-dark-blue font-public-sans text-white justify-between p-20">
        <div className="flex flex-col space-y-10">
          <div>
            <img src={LogoWhite} alt="logo" />
          </div>
          <div className="flex flex-row space-x-4">
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="twitter" />
            <img src={Youtube} alt="youtube" />
            <img src={Pinterest} alt="pinterest" />
            <img src={Instagram} alt="instagram" />
          </div>
        </div>
        <div className="flex flex-row space-x-16 text-lg text-grayish-blue">
          <div className="flex flex-col space-y-2">
            <p>About Us</p>
            <p>Contact</p>
            <p>Blog</p>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Careers</p>
            <p>Support</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="p-2 text-right space-y-4">
          <button className="bg-gradient-to-r to-blue-400 from-green-400 hover:from-blue-400 hover:to-green-300 rounded-full font-semibold text-white cursor-pointer p-2 px-6">
            Request Invite
          </button>
          <p className="text-grayish-blue">
            &copy; Easybank. All Rights Reserved
          </p>
        </div>
      </div>
      {/* mobile version */}
      <div className="md:hidden flex flex-col bg-dark-blue font-public-sans text-white justify-between p-20">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div>
            <img src={LogoWhite} alt="logo" />
          </div>
          <div className="flex flex-row space-x-4">
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="twitter" />
            <img src={Youtube} alt="youtube" />
            <img src={Pinterest} alt="pinterest" />
            <img src={Instagram} alt="instagram" />
          </div>
        </div>
        <div className="flex flex-col text-sm items-center justify-center space-y-4 mt-4">
          <p>About Us</p>
          <p>Contact</p>
          <p>Blog</p>

          <p>Careers</p>
          <p>Support</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 mt-4">
          <button className="bg-gradient-to-r to-blue-400 from-green-400 rounded-full font-semibold text-white cursor-pointer p-2 px-6 hover:from-blue-400 hover:to-green-300">
            Request Invite
          </button>
          <p className="text-grayish-blue text-sm">
            &copy; Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
