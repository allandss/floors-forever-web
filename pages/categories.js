import React, { useState } from 'react';
import Head from 'next/head';
import api from '../services/api';
import Header from '../components/header';
import Footer from '../components/footer';
import CallToAction from '../components/call-to-action';
import Link from 'next/link';
import serverFile from '../services/serverFile';

export default function Categories({itens}) {
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
              <h3>Collections</h3>
            </div>
            <div className="col-6">
            </div>
          </div>
        </div>
      </div>
      <div className="container products">
        <h3>Collections</h3>
        <div className="row">
          {itens.map((item, index) => (
            <Link href={`/products?id=${item._id}`} key={item._id}><a className="col-md-4">
            <div className="item" key={index}>          
              <img className="img-fluid" src={serverFile+item.image} alt=""/>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
            </a></Link>
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

Categories.getInitialProps = async () => {
  const response = await api.get('/serie');

  return {
    itens: response.data.series,
  };
};