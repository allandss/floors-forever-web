import React from "react";
import Slider from "react-slick";
import Link from 'next/link';

export default function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true
  }; 
    return (
    <div>
      <Slider {...settings}>
        <div className="item-banner">
          <div className="item" style={{ backgroundImage: "url('/static/bg-2.png')" }}>
            {/* <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>Let us do your <br /><span>home</span> better!</h2>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="item-banner">
          <div className="item" style={{ backgroundImage: "url('/static/bg-1.png')" }}>
            {/* <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>Flooring & tiling advice</h2>
                  <Link href="/contact"><a>Contact us</a></Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Slider>
      <div className="text-banner">
        <h2>$3,99 On SALE now, 100% waterproof flooring, <br /><span>FULLY INSTALLED</span></h2>
      </div>
    </div>
    );
}