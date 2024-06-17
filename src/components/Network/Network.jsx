import React from "react";
import Style from "../Network/Network.module.css";
import Marquee from "react-fast-marquee";
import metro from "../../assets/metro.png";
import emblem from "../../assets/emblem.png";
import cms from "../../assets/cms.png";
import ghi from "../../assets/ghi.png";
import united from "../../assets/united.png";
import oscar from "../../assets/oscar.png";
import aetna from "../../assets/aetna.png";

const Network = () => {
  return (
    <div className={Style.network_container}>
      <div className={Style.network_wrapper}>
        <div className={Style.header}>
          <h3>In network with</h3>
        </div>
        <div className={Style.slider}>
          <Marquee className={Style.marquee_main} play={true} speed={150}>
            <img src={united} alt="" />
            <img src={aetna} alt="" />
            <img src={oscar} alt="" />
            <img src={united} alt="" />
            <img src={aetna} alt="" />
            <img src={oscar} alt="" />
            <img src={united} alt="" />
            <img src={aetna} alt="" />
            <img src={oscar} alt="" />
          </Marquee>
        </div>
        <div className={Style.texts}>
          <h4>Out of network</h4>
        </div>
        <div className={Style.nets}>
          <img src={metro} alt="" />
          <img src={emblem} alt="" />
          <img src={cms} alt="" />
          <img src={ghi} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Network;
