import React from 'react';
import { browserHistory} from 'react-router';

export class Back extends React.Component{
   Previous(ev){
      ev.preventDefault();
       browserHistory.goBack();
   }
    render(){
        return(
         <div>
             <span onClick={this.Previous} style={{color:'purple'}}>Previous page...</span>
         </div>
        );
    }
}