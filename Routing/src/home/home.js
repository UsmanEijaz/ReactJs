import React from 'react';
import { Back } from '../back/back';


export class Home extends React.Component{
    // constructor(){
    //     super();
    // }
    render(){
        return(
           <div>
            <h2>Home page</h2>
            <Back />
            </div>
        );
    }
}
