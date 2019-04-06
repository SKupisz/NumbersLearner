import React from 'react';
import {Link} from 'react-router-dom';
import Buttons from "./buttons.jsx";

export default class Example extends React.Component{
  render(){
    return(
      <div class = "example">
      <div class = "exampleContentContainer">
        <label class = "exampleHeader">{this.props.title}</label>
        <span class = "exampleSkipper"> >> </span>
        <label class = "exampleResponse">{this.props.explanation}</label>
        </div>
        <Buttons previousSite = {this.props.previousSite} nextSite = {this.props.nextSite}/>
      </div>
    );
  }
}
