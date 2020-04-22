import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/banner';
import CallToAction from '../components/call-to-action';
import api from '../services/api';

export default function Home({ itens }) {
  return (
    <div>
      <Head>
        <title>Floors Forever - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h6>Who We Are</h6>
              <h2>Few words about company</h2>
              <p>Our company is an operated full-service floor covering retailer. Whether you need carpet, hardwood, tile, laminate or custom rugs, you will find it here. Our staff is here to help you design the look you want and our team of installers will add the finishing touches to your flooring vision.</p>
              <Link href="/about"><a className="read-more">Read more</a></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="products products-custom">
        <div className="container">
          <h5>Our <span>products</span></h5>
          <div className="row">
            {itens.map((item, index) => (
              index <= 2 ?
              <div className="col-md-4 item" key={index}>          
                <img className="img-fluid" src={item.image} alt=""/>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
              : ''
            ))}
          </div>
          <Link href="/products"><a className="btn">See All</a></Link>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  )
}

Home.getInitialProps = async () => {
  const response = await api.get('onlyreading');

  return {
    itens: response.data.products,
  };
};