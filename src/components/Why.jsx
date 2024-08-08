import React from "react";
import iconBudgeting from "../assets/icon-budgeting.svg";
import iconOnboarding from "../assets/icon-onboarding.svg";
import iconApi from "../assets/icon-api.svg";
import iconOnline from "../assets/icon-online.svg";

const Why = () => {
  return (
    <div className="flex flex-col items-center text-center font-public-sans bg-light-grayish-blue p-10">
      <div>
        <h1 className="text-dark-blue text-3xl mb-4">Why choose Easybank?</h1>
        <p className="text-grayish-blue">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="flex md:flex-row items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 mt-10">
          <div>
            <img src={iconOnline} alt="icon online" />
          </div>
          <div className="space-y-6">
            <h2 className="text-dark-blue text-2xl">Online Banking</h2>
            <p className="text-grayish-blue">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <img src={iconOnline} alt="icon online" />
          </div>
          <div>
            <h2 className="text-dark-blue text-lg font-bold">Online Banking</h2>
            <p className="text-grayish-blue">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <img src={iconOnline} alt="icon online" />
          </div>
          <div>
            <h2 className="text-dark-blue text-lg font-bold">Online Banking</h2>
            <p className="text-grayish-blue">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <img src={iconOnline} alt="icon online" />
          </div>
          <div>
            <h2 className="text-dark-blue text-lg font-bold">Online Banking</h2>
            <p className="text-grayish-blue">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
