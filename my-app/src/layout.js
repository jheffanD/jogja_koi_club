import './index.css'
import React from 'react';
import Dasboart from './pages/dasboard/pages';

const RootLayout = ({ children }) => {
  return (
    <div>
      <Dasboart />
      <main>{children}</main>
    </div>
  );
};

export default RootLayout;
