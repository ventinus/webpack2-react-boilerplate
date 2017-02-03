import React from 'react';
import Nav from '../../components/Nav/Nav';
import styles from './MainLayout.scss';

const MainLayout = ({children}) => (
  <div className="layout">
    <Nav />
    { children }
  </div>
);

export default MainLayout;
