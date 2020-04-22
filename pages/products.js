import React, { useState } from 'react';
import Head from 'next/head';
import api from '../services/api';
import Header from '../components/header';
import Footer from '../components/footer';
import CallToAction from '../components/call-to-action';

export default function Products({itens}) {
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
              <h3>Products</h3>
            </div>
            <div className="col-6">
            </div>
          </div>
        </div>
      </div>
      <div className="container products">
        <h3>Our products</h3>
        <div className="row">
          {itens.map((item, index) => (
            <div className="col-md-4 item" key={index} onClick={()=>(selectProduct(item))}>          
              <img className="img-fluid" src={item.image} alt=""/>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
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
              <img src={selectedProduct.image} alt=""/>
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

Products.getInitialProps = async () => {
  const response = await api.get('onlyreading');

  return {
    itens: response.data.products,
  };
};