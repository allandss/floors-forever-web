import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import CallToAction from '../components/call-to-action';

export default function FullyInstall() {
  return (
    <>
      <Head>
        <title>Floors Forever - Fully Install</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3>Fully Install</h3>
            </div>
            <div className="col-6">
            </div>
          </div>
        </div>
      </div>
      <div className="default">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>What does Fully Installed Include? It Includes</h2>
              <ul>
                <li>Flooring</li>
                <li>Quarter Round</li>
                <li>Standard Furniture</li>
                <li>Taxes</li>
                <li>Installation of Moldings</li>
                <li>All Transition Moldings</li>
                <li>Carpet Tear Out</li>
                <li>Delivery</li>
                <li>Installation of Flooring</li>
                <li>Installation Warranty</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </>
  )
}
