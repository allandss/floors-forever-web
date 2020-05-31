import React from "react";
import Slider from "react-slick";

export default function Rating() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: false
  }; 
    return (
    <div className="rating">
      <h3>Testimonials</h3>
      <Slider {...settings}>
        <div className="item-banner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <img src="/static/user2.jpg" alt=""/>
                <p>Jessica Minola, NYC</p>
                <h2>We would highly recommend Floors Forever to anyone: We have used for both buying flooring and also installing the floor. They were excellent on both counts. The technician who installed the floor was great.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="item-banner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <img src="/static/user1.jpg" alt=""/>
                <p>Lila Estrada, NYC</p>
                <h2>You are professionals. Just wanted to pass on to the workman and the projects department that we are very pleased with the job that was done at our house. Many Thanks. We will recommend you to our friends.</h2>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    );
}