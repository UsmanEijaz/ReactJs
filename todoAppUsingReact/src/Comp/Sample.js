import React, { Component } from 'react';


class Sample extends Component {
constructor(props)
{
    super();
    this.state={
       age: props.Myage,
       namelink:"Change text"
    };
}
onbtn()
{
    this.setState({
        age: this.state.age + 4 
    });
}

onchangelink()
{
    this.props.onchangelink(this.state.namelink)
}
  render() {
    return (
      <div >
      My age is {this.state.age}
      <br/>
      <button onClick={this.onbtn.bind(this)}>Click me</button>
      <br/>
      <br/>
      <button onClick={this.props.child}>Check</button>
      <br/>
      <br/>
      <button onClick={this.onchangelink.bind(this)}>Check</button>
      
      </div>
    );
  }
}

export default Sample;