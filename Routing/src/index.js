import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, indexRoute,  browserHistory} from 'react-router';
import {About} from './about/about';
import {Contact} from './contact/contact';
import {Home} from './home/home';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <indexRoute  component={Home} />
        <Route path="home" component={Home} />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />      
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
