import React from "react";
import "./Hero.css";
import washpark from "../../../assets/washpark.png";
import plus from "../../../assets/plus.png";
import faces from "../../../assets/faces.png";
import Icon from "../../../assets/Icon.png"
import user from "../../../assets/user.png"

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-content">
          <div className="texts">
            <h1>
              Online Psychiatry Practice Prescription Management and Talk
              Therapy
            </h1>
            <p>Providing Mental Health Care with Convenience.</p>
            <button>Book Now</button>
          </div>
          <div className="items">
            <div className="items-right">
              <div className="items-right-contents">
                <p>60 <img src={plus} alt="" style={{ width: 15 }} /></p>
                <img src={Icon} alt="" style={{width:13}}/>
              </div>
              <p>Providers</p>
              <img src={faces} alt="" style={{width: 200}}/>
            </div>
            <div className="items-left">
              <div className="items-left-contents">
                <div className="items-left-img">
                  <p>16k <img src={plus} alt="" style={{ width: 15 }}/></p>
                </div>
                <img src={user} alt="" style={{ width: 45 }} />
              </div>
              <p style={{fontSize: 20}}>Lives changed</p>
            </div>
          </div>
        </div>
        <img src={washpark} alt="" />
      </div>
    </div>
  );
};

export default Hero;
