import React, { useState } from 'react';
import Head from 'next/head';
import api from '../services/api';
import Header from '../components/header';
import Footer from '../components/footer';
import CallToAction from '../components/call-to-action';
import Link from 'next/link';
import serverFile from '../services/serverFile';

export default function Products({itens}) {
  
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
        <h3>Products</h3>
        <div className="row">
          {itens.map((item, index) => (
            <Link href={`/product-details?id=${item._id}`} key={item._id}><a className="col-md-4">
              <div className="item" key={index}>          
              <div className="img-item" style={{backgroundImage: `url(${serverFile+item.image})`}} alt="" />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <CallToAction />
      <Footer />
    </>
  )
}

Products.getInitialProps = async ({query}) => {
  console.log(query)
  const { id } = query;
  const response = await api.get(`products/serie/${id}`);

  return {
    itens: response.data.products,
  };
};