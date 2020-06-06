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
                <p>Anthony W. - Tavares, FL</p>
                <h2>They were very professional and on time.They have quality customer service and are a fantastic company. The crew that they sent was very good.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="item-banner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>Carmen D. - Orlando, FL</p>
                <h2>He was very professional, very kind and goes the extra mile to satisfy the customer.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="item-banner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>Ryan L. - West Melbourne, FL</p>
                <h2>Very friendly and quick to the finish.Great work and quality!</h2>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    );
}