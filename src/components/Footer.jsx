import React from "react";

//importing assets for footer
import Logo from "../assets/logo.svg";
import Facebook from "../assets/icon-facebook.svg";
import Twitter from "../assets/icon-twitter.svg";
import Youtube from "../assets/icon-youtube.svg";
import Pinterest from "../assets/icon-pinterest.svg";
import Instagram from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="bg-dark-blue">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex flex-row space-x-1">
        <img src={Facebook} alt="facebook" />
        <img src={Twitter} alt="twitter" />
        <img src={Youtube} alt="youtube" />
        <img src={Pinterest} alt="pinterest" />
        <img src={Instagram} alt="instagram" />
      </div>
      <div>
        <p>About Us</p>
        <p>Contact</p>
        <p>Blog</p>
        <p>Careers</p>
        <p>Support</p>
        <p>Privacy Policy</p>
      </div>
      <div>
        <button className="bg-gradient-to-r to-blue-300 from-green-200 rounded-full text-white cursor-pointer p-2 px-6">
          Request Invite
        </button>
        <p>&copy; Easybank. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
