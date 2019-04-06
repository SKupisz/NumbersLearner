import React from 'react';
import support from "./browserSupport.js";

let alpha = support.numberSupport;

let numbers = [];
for(var i = 0 ; i < 11; i++){
  numbers = numbers.concat([i]);
  numbers = numbers.concat(alpha[i]);
}
let languageList = numbers.map((language) => <div class="responseDiv">{language}</div>);
function search() {
  let numeric = document.getElementById("number").value;
  let table = alpha[numeric];
  var numericTest = parseInt(numeric);
  if(numericTest == numeric)
  {
    numbers = [numeric];
    numbers = numbers.concat(table);
    languageList = "";
    for(var i = 0 ; i < numbers.length; i++)
    {
      languageList+="<div class = 'response'>"+numbers[i]+"</div>";
    }
    document.querySelector(".responseContentMain").innerHTML = languageList;
  }

}

class Browser extends React.Component{
  render(){
    languageList = numbers.map((language) => <div class="response">{language}</div>);
    return (
      <div class = "container">
      <header class = "welcome-header">Witaj na NumbersLearner</header>
      <section class = "welcome-quotation-container">
      <q class = "welcome-quotation">Najważniejsze w uczeniu się jest pozytywne nastawienie</q>
      - Bobbi DePorter
      </section>
      <article class = "welcome-quotation-speech">
      Nie pamiętasz, jak zapisać słownie jakąś liczbę? Bez obaw! Postaramy się tobie pomóc przez naszą wyszukiwarkę liczb.
      </article>
      <div class="browserContainer">
        <input type="number" name="Number" min="0" max = "13" id = "number" class="numberBrowser" onInput={search}/>
      </div>
      <div class = "resultContainer">
      <div class = "response main">
      Cyfra
      </div>
      <div class="response main">
      Pol<label class = "notVisible">ski</label>
      </div>
      <div class="response main">
      Ang<label class="notVisible">ielski</label>
      </div>
      <div class="response main">
      Niem<label class="notVisible">iecki</label>
      </div>
          <div class="response main">
            Wł<label class="notVisible">oski</label>
      </div>
          <div class="response main">
            Fr<label class="notVisible">ancuski</label>
      </div>
      <section class = "responseContentMain">
      {languageList}
      </section>
      </div>
      </div>
    );
  };

}
export default Browser;
