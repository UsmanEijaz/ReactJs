 import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../././bootstrap/css/bootstrap.min.css'


class App extends Component {
  constructor(props){
    super(props);
    console.log("hello",this.props.first);
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
   this.reset=this.reset.bind(this);
   this.add=this.add.bind(this);
   this.sub=this.sub.bind(this);
   this.mul=this.mul.bind(this);
   this.divi=this.divi.bind(this);
    this.state={
      initialstate: 0
    }
  }
  increment(){
    this.setState({
    initialstate : this.state.initialstate +1
    });
  }
  decrement(){
    this.setState({
      initialstate: this.state.initialstate -1
    });
  }
  reset(){
    this.setState({
      initialstate: 0
    })
  }
  add(ev){
ev.preventDefault();
let sum = this.refs.adding.value;
sum = parseInt(sum);
this.setState({
  initialstate: this.state.initialstate + sum
});
this.refs.adding.value="";
  }
  sub(ev){
    ev.preventDefault();
    let sub = this.refs.adding.value;
    sub = parseInt(sub);
    this.setState({
      initialstate: this.state.initialstate - sub
    });
    this.refs.adding.value="";
  }
  mul(ev){
    ev.preventDefault();
    let mul=this.refs.adding.value;
    mul=parseInt(mul);
    this.setState({
      initialstate:this.state.initialstate * mul
    });
    this.refs.adding.value="";
  }
  divi(ev){
    ev.preventDefault();
    let divi = this.refs.adding.value;
    divi = parseFloat(divi);
    this.setState({
      initialstate: this.state.initialstate / divi
    });
    this.refs.adding.value="";
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className ="constainer-fluid">
            <h2>{this.state.initialstate}</h2>
            <button className="btn btn-primary" onClick={this.increment}>increment</button>
            <button className="btn btn-primary" onClick={this.decrement}>Decrement</button>
            <button className="btn btn-primary" onClick={this.reset}>Reset</button><br/><br/>
            <form ><input type="text" ref="adding"/><br/><br/>
            <button className="btn btn-primary" onClick={this.add}>Add</button>
            <button className="btn btn-primary" onClick={this.sub}>Subtract</button>
            <button className="btn btn-primary" onClick={this.mul}>Multiply</button>
            <button className="btn btn-primary" onClick={this.divi}>Divide</button>
            </form>
        </div>
      </div>
    );
  }
}

export default App;
