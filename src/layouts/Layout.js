import React from 'react';
import Nav from '../components/Nav/Nav';
import styles from './Layout.scss';

const Layout = ({children}) => (
  <div className="layout">
    <Nav />
    { children }
  </div>
);

export default Layout;
