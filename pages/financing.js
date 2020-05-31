import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import CallToAction from '../components/call-to-action';
import { Accordion, Card } from 'react-bootstrap';

export default function Financing() {
  return (
    <>
      <Head>
        <title>Floors Forever - Financing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3>Financing</h3>
            </div>
            <div className="col-6">
            </div>
          </div>
        </div>
      </div>
      <div className="financing">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img src="/static/card.png" className="img-fluid img-card" alt=""/>
            </div>
            <div className="col-md-7">
              <h2>The flooring of you dreams just became more affordable!*</h2>
              <p>with an Integrity Laminate Flooring Credit Card.<br />Apply in store or online today!</p>
              <a className="btn" href="https://www.mysynchrony.com/apply-for-home-credit-card.html" target="_blank">Apply now</a>
            </div>
          </div>
        </div>
        <div className="months">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Get 6 – 24 Months Special Financing*</h2>
                <h5>on all in-store purchases</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2>Apply In Store or Online</h2>
                <ul>
                  <li>A dedicated credit line to use again and again at Integrity Laminate Flooring.</li>
                  <li>Convenient monthly payments.</li>
                  <li>Payment options – online or by mail.</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h2>Access 24/7</h2>
                <ul>
                  <li>Make payments</li>
                  <li>View your balance</li>
                  <li>Update account info</li>
                  <li>Schedule up to your next 24 payments</li>
                  <li>And more</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h2>Easy Use</h2>
                <ul>
                  <li>Use your card for future purchases of products we offer.</li>
                  <li>No expiration date</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="asked">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Frequently Asked Questions</h1>
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      What is the Integrity Laminate Flooring Credit Card?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>Integrity Laminate Flooring offers customers a credit card through Synchrony Bank with a revolving credit line to use again and again at Integrity Laminate Flooring locations.*</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    How do I get an Integrity Laminate Flooring Credit Card?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>You can apply for an Integrity Laminate Flooring Credit Card* at any of our conventional locations or <a href="https://www.mysynchrony.com/mysyf/apply-for-home-credit-card.html" target="_blank">apply online</a></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    Where do I check the status of my account?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                      <p>To check the status of your Integrity Laminate Flooring Credit Card, click on the Manage My Account link above to go to Synchrony Financial’s website. After logging into your account, you will be able to:</p>
                      <ul>
                        <li>Make a payment</li>
                        <li>View your balance</li>
                        <li>Update your account information</li>
                        <li>Schedule up to your next 24 payments</li>
                      </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                    How can I make a payment on my Integrity Laminate Flooring Credit Card?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                      <p>Integrity Laminate Flooring offers three convenient ways to pay your credit card bill.</p>
                      <ul>
                        <li><b>Pay Online: </b><a href="https://www.mysynchrony.com/" target="_blank">Click here</a> to manage your account and make payments online.</li>
                        <li><b>Pay by Phone:</b> Contact Synchrony Bank Customer Service at 1-866-396-8254 during the hours listed below to make a payment by phone.<br />
                        M-F – 7:30 am to 12:00 midnight EST<br />
                        Sat – 10:00 am to 7:00 pm EST<br />
                        Sun – Closed<br />
                        </li>
                        <li><b>Pay by Mail:</b> Mail payments to the address below. Ensure that you have plenty of time for your payment to arrive prior to the due date.
                        Synchrony Bank<br />
                        PO Box 960061<br />
                        Orlando, FL 32896-0061<br />
                        </li>  
                      </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                <p className="info-footer">
                *Subject to credit approval. Minimum monthly payments required. See store clerk for details. We reserve the right to discontinue or alter the terms of this offer at any time. Credit is extended by Synchrony Bank.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </>
  )
}
