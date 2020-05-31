import React from 'react';
import Link from './link';

export default props => {
  return (
    
      <ul className="navbar-nav mr-auto">
        <Link activeClassName="active" href="/">
          <a><li className="nav-item">Home</li></a>
        </Link>
        <Link activeClassName="active" href="/about">
          <a><li className="nav-item">About</li></a>
        </Link>
        <Link activeClassName="active" href="/collections">
          <a><li className="nav-item">Products</li></a>
        </Link>
        <Link activeClassName="active" href="/financing">
          <a><li className="nav-item">Financing</li></a>
        </Link>
        <Link activeClassName="active" href="/photos">
          <a><li className="nav-item">Photo Gallery</li></a>
        </Link>
        <Link activeClassName="active" href="/contact">
          <a><li className="nav-item">Contact</li></a>
        </Link>
      </ul>
    
  );
};
