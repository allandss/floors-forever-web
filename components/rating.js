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

        <div className="item-banner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>Leonard D. - PALM BAY, FL</p>
                <h2>Great service.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="item-banner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>Lynda S. - The Villages, FL</p>
                <h2>I needed to have LVP installed in my home quickly. Jose quickly
called me and offered to install the plank purchased elsewhere. Later learned
that the product bought elsewhere was lesser quality and more expensive than
Floors Forever product and installation. Jose arranged for an all inclusive
price using a thicker higher quality LVP and saved me several hundred dollars.
The install team were very professional and cared greatly about the quality of
their work. Jose kept in close contact with me throughout the whole project
and the entire team demonstrated excellent customer service. If you want quality
flooring quickly, affordably and installed meticulously, then Floors Forever should
be your 1st call.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="item-banner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>Jenny P. - Longwood, FL</p>
                <h2>I was first a little worried about using a company that l had never
heard of but they were nothing but professional and just plain awesome from the very
beginning to the end. We are so excited and love our floors and would definitely
recommend Floors Forever to any and everyone.</h2>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    );
}