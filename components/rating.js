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
        <div className="item-banner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>Ruth H. - Mims, FL</p>
                <h2>Jose, who came to our home, was knowledgeable, accommodating, and COVID19 cautions. Alexander, who installed the flooring, was efficient and meticulous. I would recommend this company in a heartbeat!!!</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="item-banner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>Casey M. - Orlando, FL</p>
                <h2>Great experience with the company - from the sales rep to the office manager and installers. Very pleased.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="item-banner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>Kay C. - Lakeland, FL</p>
                <h2>The owner has impeccable professionalism and is very committed to providing a great experience!</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="item-banner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>Tiffanie K.</p>
                <h2>They have great customer service and are very knowledgeable. They are also efficient and provided quality work.</h2>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    );
}