import React from 'react';
import {Link} from "react-router-dom";

export default class Buttons extends React.Component{
  render(){
    return(
      <section class = "buttons">
      <Link to = {this.props.previousSite}>
      <button class = "changeSlideBtn" id = "previousSite">
      ←
      </button>
      </Link>
      <Link to = {this.props.nextSite}>
      <button class = "changeSlideBtn" id = "nextSite">
      →
      </button>
      </Link>
      </section>
    );
  }
}
