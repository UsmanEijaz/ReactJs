import React, { Component } from 'react';

import './App.css';
//import Sample from './Comp/Sample'
// class App extends Component {
//   constructor()
//   {
//     super();
//     this.state={
//       namelink:"yahoo"
//     }
//   }
//   onsamplelink(Name)
//   {
//     this.setState({
//       namelink:Name
//     });
//   }
  
//  onmethod()
//   {
//     alert("hello"); 
//   }
//   render() {
//     return (
//       <div >
//       {/* #8 tutorial state #9 communicating b/w parent and child * */}
//       <h3>Age</h3>
      
//         <Sample 
//         Myage={23} 
//         child={this.onmethod}
//         changename={this.onsamplelink.bind(this)} />
// <br/>
//       {this.state.namelink}
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor()
  {
    super();
    this.onAdd=this.onAdd.bind(this);
    this.remove=this.remove.bind(this);
    this.state={
      addArray:[]
    }
  }
  array=[];
  onAdd(){
     let todoValue =this.refs.todo.value;
     this.array=this.array.concat(todoValue);
     this.setState({
       addArray:this.array
     });
    
    
  }
  remove()
  {
    var name = this.state.addArray;
   
  }
  render() {
    return (
      <div >
      <input type="text" ref="todo"/><br/><br/>
      <button onClick={this.onAdd}>Add Todo</button>
      <br/>
      <ul>{this.state.addArray.map((list,i)=><span key={i}><li>{list}<button onClick={this.remove}>Remove</button></li></span>)}</ul>  
    
      </div>
    );
  }
}

export default App;
