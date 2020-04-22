import React from 'react';
import Link from 'next/link';

export default () => {

  return (
    <div className="call-to-action">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h2>Have Any Project for Us? <b>Call</b> Now Or <b>Send A Message</b></h2>
          </div>
          <div className="col-md-3">
            <Link href="/contact"><a className="btn">Send message</a></Link>
          </div>
        </div>
      </div>
    </div>
  );
};