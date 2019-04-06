import React from 'react';
import {Route,
  Link} from 'react-router-dom';
import ChoosingBar from "./tutorial/choosing.jsx";
import English from "./tutorial/english.jsx";

export default class Languages extends React.Component {
  render(){
    return(
      <div class = "container">
      <ChoosingBar/>
      <Route path = "/tutorial/english" component = {English}/>
      </div>

    );
  };
}
