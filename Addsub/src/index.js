import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
 let user="usman"
ReactDOM.render(
   <App first={user} />,
  document.getElementById('root')
);
