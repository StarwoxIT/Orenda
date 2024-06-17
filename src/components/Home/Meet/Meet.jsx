import React from "react";
import "./Meet.css"
import lifesavers from "../../../assets/lifesavers.png"
import { NavLink } from 'react-router-dom';


const Meet = () => {
  return (
    <div className="meet-container">
      <div className="meet-wrapper">
        <div className="left">
          <h1>Not sure who to meet?</h1>
          <p>
            Take this assessment and we'll help pair you to the right provider.
          </p>
          <NavLink to="/Assessment1">
            <div>
              <button>Take Assessment</button>
            </div>
          </NavLink>
        </div>
        <div className="right">
          <img src={lifesavers} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Meet;
