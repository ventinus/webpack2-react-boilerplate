import React from 'react';
import { Link } from 'react-router';
import styles from './Nav.scss';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__list__item"><Link to="/">Home</Link></li>
      <li className="nav__list__item"><Link to="/about">About</Link></li>
      <li className="nav__list__item"><Link to="/contact">Contact</Link></li>
      <li className="nav__list__item"><Link to="/nested/home">nested home route</Link></li>
      <li className="nav__list__item"><Link to="/nested/hoasdfme">nested homeasdf route</Link></li>
    </ul>
  </nav>
);

export default Nav;
