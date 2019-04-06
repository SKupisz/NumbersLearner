import React from 'react';
import TextDescription from "./about/description.jsx";
import alpha from "./about/descriptionDataBase.jsx";

export default class About extends React.Component{
  render(){
    return(
      <div class = "container">
      <header class = "about-main-header">
        NumbersLearner - a co to?
      </header>
      <section class = "main-content">
      <TextDescription class = "howDoesItWork" title = "Jak to działa?" content = "Za pomocą NumbersLearner możesz nauczyć się wielu przydatnych słów w kilku językach obcych dostępnych w naszym serwisie. W zakładce Languages Tutorial znajdziesz wszystkie nasze tutoriale językowe, a także nasz e-teacher."/>
      <TextDescription class = "whoAreWe" title = "A kto to tworzy?" content = "Jestem pasjonatem szeroko pojętej informatyki, ale lubię też uczyć się języków. Zdecydowałem się zatem połączyć te dwie pasje i tak właśnie powstał NumbersLearner, czyli strona do nauki liczb i nie tylko w różnych językach"/>
      </section>
      <div class = "background-rect first-rect"></div>
      <div class = "background-rect second-rect"></div>
      </div>
    );
  }
}
