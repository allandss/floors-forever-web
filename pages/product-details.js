import React, { useState } from 'react';
import Head from 'next/head';
import api from '../services/api';
import Header from '../components/header';
import Footer from '../components/footer';
import CallToAction from '../components/call-to-action';
import Link from 'next/link';
import serverFile from '../services/serverFile';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default function ProductsDetails({product}) {
  const [imagemSelected, setImagemSelected] = useState(product.image);

  function seletctImage(product){
    console.log(product)
    setImagemSelected(product.color)
  }
  return (
    <>
      <Head>
        <title>Floors Forever - Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3>Products</h3>
            </div>
            <div className="col-6">
            </div>
          </div>
        </div>
      </div>
      <div className="container products products-details">
        
        <h3 class="mgB20">{product.name}</h3>
        <div className="row">
            <div className="col-md-5">          
              <div className="img-item img-item-custom" style={{backgroundImage: `url(${serverFile+product.image})`}} alt="" />
              <a className="btn-warranty" href={product.warranty} target="_blank">Warranty</a>
            </div>
            <div className="col-md-7">
              <h6>Product details</h6>
              <div className="">
              { ReactHtmlParser(product.description) }
              </div>
            </div>
        </div>

      </div>
      <CallToAction />
      <Footer />
    </>
  )
}

ProductsDetails.getInitialProps = async ({query}) => {
  console.log(query)
  const { id } = query;
  const response = await api.get(`products/${id}`);

  return {
    product: response.data.products,
  };
};