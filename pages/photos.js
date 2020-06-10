import React, { useState } from 'react';
import Head from 'next/head';
import api from '../services/api';
import Header from '../components/header';
import Footer from '../components/footer';
import CallToAction from '../components/call-to-action';
import Link from 'next/link';
import serverFile from '../services/serverFile';

export default function Photos({itens}) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  function selectProduct(product){
    window.scrollTo(0, 0);
    setSelectedProduct(product);
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
              <h3>Photo Gallery</h3>
            </div>
            <div className="col-6">
            </div>
          </div>
        </div>
      </div>
      <div className="container products">
        <h3 className="title-gallery">See Latest <span>Work</span></h3>
        <div className="row">
          {itens.map((item, index) => (
            <div className="col-md-4" onClick={()=>(selectProduct(item))}>
              <div className="item photo-gallery" key={index}>          
                <div className="img-item" style={{backgroundImage: `url(${serverFile+item.image})`}} alt="" />
                {/* <h2>{item.name}</h2> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CallToAction />
      <Footer />
      {selectedProduct ? 
      <div className="modal-product">
        <div className="background"></div>
        <div className="modal-body">
          <div className="content">
            <div className="close-modal" onClick={()=>(selectProduct(null))}>x</div>
            <div className="item">
              <img src={serverFile+selectedProduct.image} alt=""/>
              <div className="info">
                <h2>{selectedProduct.name}</h2>
                <p>{selectedProduct.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      : ''}
    </>
  )
}

Photos.getInitialProps = async () => {
  const response = await api.get('/photo');

  return {
    itens: response.data.photos,
  };
};