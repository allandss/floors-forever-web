import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import CallToAction from '../components/call-to-action';

export default function About() {
  return (
    <>
      <Head>
        <title>Floors Forever - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3>About</h3>
            </div>
            <div className="col-6">
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h6>Who We Are</h6>
              <h2>A few words about the company</h2>
              <p>Floors Forever was founded with the purpose of making the flooring purchase experience simple and easy. We are totally committed to providing our customers with the best service possible, every step of the way. We strive for excellence in all we do and always have a passion for flooring.</p>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-6">
              <h3>OUR MISSION</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="col-md-6">
              <h3>VISION</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div> */}
        </div>
      </div>
      <CallToAction />
      <Footer />
    </>
  )
}
