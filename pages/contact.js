import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Floors Forever - Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3>Contact</h3>
            </div>
            <div className="col-6">
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="info">
          <div className="content">
            <h4><span>Find us</span>Contact Information</h4>
            <ul>
              <li><div className="icon"><img src="/static/icons/phone.svg" alt=""/></div><span>Call Now</span><p>(888) 555-999</p></li>
              <li><div className="icon"><img src="/static/icons/mail.svg" alt=""/></div><span>Feel free to write us</span> <p>sales@floorsforever.com</p></li>
              <li><div className="icon"><img src="/static/icons/place.svg" alt=""/></div><span>8500, Lorem Street,</span> <p>Orlando, IL, 55030</p></li>
            </ul>
          </div>
        </div>
        <div className="message">
          <div className="content">
            <h4>Get In Touch</h4>
            <form action="">
              <input type="text" className="form-control name" placeholder="Your name" />
              <input type="text" className="form-control email" placeholder="Your e-mail" />
              <textarea className="form-control" placeholder="Your message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
