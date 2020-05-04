import React from 'react';
import Link from 'next/link';

export default () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <img src="/static/logo-white.png" alt="Logo" className="img-fluid logo-footer" />
          <p>Our company is an operated full-service floor covering retailer. Whether you need carpet, hardwood, tile, laminate or custom rugs, you will find it here.</p>
        </div>
        
        <div className="col-md-3">
          <h4>Get Started Now</h4>
          <ul>
            <Link href="/about">
            <li>About</li>
            </Link>
            <Link href="/products">
            <li>Products</li>
            </Link>
            <Link href="/contact">
            <li>Contact</li>
            </Link>
          </ul>
        </div>

        <div className="col-md-3">
          <div className="info">
            <div className="content">
              <h4>Contact Information</h4>
              <ul>
              {/* <li><span>Call Now</span><p>(888) 555-999</p></li> */}
              <li><span>Feel free to write us</span> <p>floorsforever@outlook.com</p></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 social">
          <h4>Social media</h4>
          <p><img src="/static/icons/instagram.svg" alt="" /></p>
          <p><img src="/static/icons/facebook.svg" alt="" /></p>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <p>Copyright © Floors Forever, All Rights Reserved - 2020</p>
      </div>
    </div>
    <script crossOrigin="anonymous" src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" />
    <script crossOrigin="anonymous" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" />
    <script crossOrigin="anonymous" src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" />
  </footer>
);
