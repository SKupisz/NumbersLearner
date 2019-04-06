import React from 'react';
import Example from "./example.jsx";
import {Route} from "react-router-dom";
import Game from "./game.jsx";
import S0 from "./examples/s0.jsx";
import S1 from "./examples/s1.jsx";
import S2 from "./examples/s2.jsx";
import S3 from "./examples/s3.jsx";

export default class MathLesson extends React.Component{
  render(){
    return(
      <div class = "mathContainer">
      <Route exact path = "/tutorial/english/math" component = {S0}/>
      <Route path = "/tutorial/english/math/s2" component = {S1}/>
      <Route path = "/tutorial/english/math/s3" component = {S2}/>
      <Route path = "/tutorial/english/math/s4" component = {S3}/>
      <Route path = "/tutorial/english/math/game" component = {Game}/>
      </div>
    );
    //<Game/>
  }
}
