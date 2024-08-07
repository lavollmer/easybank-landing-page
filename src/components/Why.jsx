import React from "react";
import iconBudgeting from "../assets/icon-budgeting.svg";
import iconOnboarding from "../assets/icon-onboarding.svg";
import iconApi from "../assets/icon-api.svg";
import iconOnline from "../assets/icon-online.svg";

const Why = () => {
  return (
    <div className="font-public-sans bg-light-grayish-blue p-20">
      <div>
        <h1 className="text-dark-blue text-2xl">Why choose Easybank?</h1>
        <p className="text-grayish-blue">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col items-center justify-center">
          <div>
            <img src={iconOnline} alt="icon online" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-dark-blue text-lg font-bold">Online Banking</h2>
            <p className="text-grayish-blue">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <img src={iconOnline} alt="icon online" />
            </div>
            <div>
              <h2 className="text-dark-blue text-lg font-bold">
                Online Banking
              </h2>
              <p className="text-grayish-blue">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <img src={iconOnline} alt="icon online" />
            </div>
            <div>
              <h2 className="text-dark-blue text-lg font-bold">
                Online Banking
              </h2>
              <p className="text-grayish-blue">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <img src={iconOnline} alt="icon online" />
            </div>
            <div>
              <h2 className="text-dark-blue text-lg font-bold">
                Online Banking
              </h2>
              <p className="text-grayish-blue">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
