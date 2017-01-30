import React from 'react';
import styles from './App.scss';

const App = ({children}) => (
  <div className="app">
    <h2 className="app__child">Hello, </h2>
    { children }
  </div>
);

export default App;
