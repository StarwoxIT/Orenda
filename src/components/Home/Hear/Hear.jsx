import React from "react";
import "./Hear.css";
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';

SwiperCore.use([Pagination, Navigation, Autoplay, EffectFade]);

const Hear = () => {
  return (
    <div className="hear-container">
      <div className="hear-wrapper">
        <h1>Hear from our Clients!</h1>

        <div>
          <div className="App">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              loop={true}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
                type: "bullets",
              }}
              navigation={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
              <SwiperSlide>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <p>
                    “The staff at this location is amazing! The providers are
                    great, easy to schedule with and extremely accommodating!
                    They are so helpful in trying to make sure all of your needs
                    are met and everything goes smoothly in addition to being so
                    responsive and supportive. I also have to mention how great
                    the women who answer the phones are! Everyone I’ve
                    interacted with at this practice has been so kind and
                    helpful. I highly, highly recommend!!”
                  </p>
                  <hr
                    style={{
                      width: "50%",
                      margin: "20px auto",
                      border: "0",
                      borderTop: "2px solid #000",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <p>
                    “The staff at this location is amazing! The providers are
                    great, easy to schedule with and extremely accommodating!
                    They are so helpful in trying to make sure all of your needs
                    are met and everything goes smoothly in addition to being so
                    responsive and supportive. I also have to mention how great
                    the women who answer the phones are! Everyone I’ve
                    interacted with at this practice has been so kind and
                    helpful. I highly, highly recommend!!”
                  </p>
                  <hr
                    style={{
                      width: "50%",
                      margin: "20px auto",
                      border: "0",
                      borderTop: "2px solid #000",
                    }}
                  />
                </div>
              </SwiperSlide>
              {/* Add more SwiperSlide components as needed */}
            </Swiper>
            <div
              className="swiper-pagination"
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hear;
