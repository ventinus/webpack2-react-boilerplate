import React from 'react';
import Nav from 'components/Nav';

const MainLayout = ({children}) => (
  <div className="layout">
    <Nav />
    { children }
  </div>
);

export default MainLayout;
