import React from 'react';
import Example from "../example.jsx";
import Buttons from "../buttons.jsx";

export default class S1 extends React.Component{
  render(){
    return(
      <div class = "example">
      <label class = "exampleHeader">Let's go</label>
      <Buttons previousSite = "/tutorial/english/math/" nextSite = "/tutorial/english/math/s2"/>
      </div>
    );
  }
}
