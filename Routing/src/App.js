import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';

class App extends Component {
  // constructor(){
  //   super();
  //}
  render() {
    return (
      <div>
       
        <ul style={{listStyleType: 'none'}}>
          <li style={{display:'inline-block',marginRight: 20}}><Link to="/home">Home</Link></li>
          <li style={{display:'inline-block', marginRight: 20}}><Link to="/about">About</Link></li>
          <li style={{display:'inline-block', marginRight:20}}><Link to="/contact">Contact</Link></li>
        </ul>
        <hr />
        {this.props.children}
      </div>
      
    );
  }
}

export default App;
