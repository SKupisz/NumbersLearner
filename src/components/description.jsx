import React from 'react';

export default class TextDescription extends React.Component{
  render(){
    return(
      <div class = {this.props.class}>
      <header class = "textDesc-title">
      {
        this.props.title
      }
      </header>
      <main class = "textDesc-content">
      {
        this.props.content
      }
      </main>
      </div>
    );
  }
}
