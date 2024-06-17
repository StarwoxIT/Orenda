import React from "react";
import "./Location.css";
import newview from "../../../assets/newview.png";
import call from "../../../assets/call.png";
import swirly from "../../../assets/swirly.png";
import ellipcycle from "../../../assets/ellipcycle.png";

const Location = () => {
  return (
    <div className="location-container">
      <div className="location-wrapper">
        <h1>Our Physical location</h1>
        <p>80 5th Avenue, New York, New York, 10011.</p>
        <div className="loc-prop">
          <img src={swirly} alt="" className="swirly" />
          <img src={ellipcycle} alt="" className="ellipcycle" />
          <img src={newview} alt="" className="newview" />
          <div className="loc-prop-txt">
            <h2>
              Physical appointments can be scheduled upon discussion with your
              provider.
            </h2>
            <p>Please call us to confirm!</p>
            <button>
              <img src={call} alt="" className="purple"/>
              Call now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
