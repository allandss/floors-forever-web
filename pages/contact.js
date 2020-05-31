import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import { Form } from '@unform/web';
import api from '../services/api';

import Input from '../components/Input';

export default function Home() {
  function handleSubmit(data){
    const { name, email, message } = data;
  
    if(!name || !email || !message){
      alert('Erro - Inform required fields');
    }else{
      const response = api.post('/contact', {
        name, 
        email, 
        message
      }).then(function (response) {
        alert('Message sent!');
        window.location.reload();
      })
    }
    
  }
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
              <li><div className="icon"><img src="/static/icons/phone.svg" alt=""/></div><span>Call Now</span><p><a href="tel:4079609437">+1 (407) 960-9437</a> <a href="tel:4077911098"> +1 (407) 791-1098</a></p></li>
              <li><div className="icon"><img src="/static/icons/mail.svg" alt=""/></div><span>Feel free to write us</span> <p><a href="mailto:floorsforever@outlook.com">floorsforever@outlook.com</a></p></li>
              <li><div className="icon"><img src="/static/icons/place.svg" alt=""/></div><span>Orlando</span> <p>USA</p></li>
            </ul>
          </div>
        </div>
        <div className="message">
          <div className="content">
            <h4>Get In Touch</h4>
            <Form onSubmit={handleSubmit}>
              <Input name="name" type="text" className="form-control name" placeholder="Your name" />
              <Input name="email" type="text" className="form-control email" placeholder="Your e-mail" />
              <Input name="message" className="form-control" placeholder="Your message" multiline="true" />
              <button type="submit">Send Message</button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
