import React, { useState } from 'react';
import Link from 'next/link';
import Nav from './nav';

export default () => {
  const [isNavVisible, setNavVisibility] = useState(false);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link href="/">
            <a><img src="/static/logo-white.png" alt="Logo" className="logo" /></a>
          </Link>
          <button className="navbar-toggler" onClick={toggleNav}>
            <span className="navbar-toggler-icon" />
          </button>
          <div className={ 'navbar-collapse ' + 'nav-'+isNavVisible}>
            <Nav />
          </div>
        </nav>
      </div>
    </header>
  );
};
