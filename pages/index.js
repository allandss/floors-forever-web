import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import Rating from '../components/rating';
import Banner from '../components/banner';
import CallToAction from '../components/call-to-action';
import api from '../services/api';
import serverFile from '../services/serverFile';

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
              <h2>A few words about the company</h2>
              <p>Floors Forever was founded with the purpose of making the flooring purchase experience simple and easy. We are totally committed to providing our customers with the best service possible, every step of the way. We strive for excellence in all we do and always have a passion for flooring.</p>
              <Link href="/about"><a className="read-more">Read more</a></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="products products-custom">
        <div className="container">
          <h5><span>Categories</span></h5>
          <div className="row">
            {itens.map((item, index) => (
              index <= 2 ?
              <Link href={`/category?id=${item._id}`} key={item._id}>
              <div className="col-md-4 item" key={index}>          
                <div className="img-item" style={{backgroundImage: `url(${serverFile+item.image})`}} alt="" />
                <h2>{item.name}</h2>
                {/* <p>{item.description}</p> */}
              </div>
              </Link>
              : ''
            ))}
          </div>
          <Link href="/categories"><a className="btn">Read more</a></Link>
        </div>
      </div>
      <Rating />
      <CallToAction />
      <Footer />
    </div>
  )
}

Home.getInitialProps = async () => {
  const response = await api.get('categories');

  return {
    itens: response.data.categories,
  };
};