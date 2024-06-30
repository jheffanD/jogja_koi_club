import './index.css';
import React from 'react';
import Nav from './componen/navbar';
import Footer from './componen/footer';

const RootLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default RootLayout;
