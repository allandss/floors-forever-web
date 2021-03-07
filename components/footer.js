import React from 'react';
import Link from 'next/link';

export default () => (
  <>
    <div className="clients-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <img src="/static/clients/01.png" className="img-fluid"/>
          </div>
          <div className="col-sm-2">
            <img src="/static/clients/02.jpg" className="img-fluid"/>
          </div>
          <div className="col-sm-2">
            <img src="/static/clients/03.png" className="img-fluid"/>
          </div>
          <div className="col-sm-2">
            <img src="/static/clients/04.png" className="img-fluid"/>
          </div>
          <div className="col-sm-2">
            <img src="/static/clients/05.jpg" className="img-fluid"/>
          </div>
          <div className="col-sm-2">
            <img src="/static/clients/06.png" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src="/static/logo-white.png" alt="Logo" className="img-fluid logo-footer" />
            <p>Floors Forever was founded with the purpose of making the flooring purchase experience simple and easy.</p>
          </div>
          
          <div className="col-md-2">
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
                <li><span>Call Now</span><p><a href="tel:4072718476">+1 (407) 271-8476</a> <br/><a href="tel:4075769693"> +1 (407) 576-9693</a></p></li>
                <li><span>Feel free to write us</span> <p><a href="mailto:floorsforever@outlook.com">floorsforever@outlook.com</a></p></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-2 social">
            <h4>Social media</h4>
            <p><img src="/static/icons/instagram.svg" alt="" /></p>
            <p><img src="/static/icons/facebook.svg" alt="" /></p>
          </div>
          <div className="col-md-2">
           <div className="row">
             <div className="col-6">
              <div className="accredited">
                <a href="#">
                  <img src="/static/accredited-logo.png" className="img-fluid"/>
                </a>
              </div>
             </div>
             <div className="col-6">
              <div className="home-advisor">
                <a href="https://www.homeadvisor.com/rated.FloorsForever.98375831.html" target="_blank">
                  <img src="/static/home-advisor.png" className="img-fluid" />
                </a>
              </div>
             </div>
           </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>Copyright © Floors Forever, All Rights Reserved - 2020</p>
        </div>
      </div>
      <div className="call-us">
        <a href="tel:4077911098">
          <div class="btn-bottom">
            <span><img src="/static/icons/phone.svg" alt=""/> <b>Call Us</b></span><p>Book an Appointment!</p>
          </div>
        </a>
      </div>
      <script crossOrigin="anonymous" src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" />
      <script crossOrigin="anonymous" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" />
      <script crossOrigin="anonymous" src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" />
    </footer>
  </>
);
