import React from 'react';
import TextDescription from "./description.jsx";

export default class About extends React.Component{
  render(){
    return(
      <div class = "container">
      <header class = "about-main-header">
        NumbersLearner - a co to?
      </header>
      <TextDescription class = "howDoesItWork" title = "Jak to działa?" content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      <TextDescription class = "whoAreWe" title = "A kto to tworzy?" content = "Jestem pasjonatem szeroko pojętej informatyki, ale lubię też uczyć się języków. Zdecydowałem się zatem połączyć te dwie pasje i tak właśnie powstał NumbersLearner, czyli strona do nauki liczb i nie tylko w różnych językach"/>
      </div>
    );
  }
}
