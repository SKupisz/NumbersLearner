import React from 'react';
var alpha = [
  ["zero", "zero", "null", "zero", "zéro"],
  ["jeden", "one", "eins", "uno", "un"],
  ["dwa","two","zwei","dos","deux"],
  ["trzy","three","drei","tres","trois"],
  ["cztery","four","vier","quattro","quattre"],
  ["pięć", "five","fünf","cinque","cinque"],
  ["sześć","six","sechs","sei","six"],
  ["siedem","seven","sieben","sette","sept"],
  ["osiem", "eight", "acht", "otto", "huit"],
  ["dziewięć", "nein", "neun", "nove", "neuf"],
  ["dziesięć", "ten", "zehn", "dieci", "dix"]
];
let numbers = [];
for(var i = 0 ; i < alpha.length; i++){
  numbers = numbers.concat([i]);
  numbers = numbers.concat(alpha[i]);
}
let languageList = numbers.map((language) => <div class="responseDiv">{language}</div>);
function search() {
  let numeric = document.getElementById("number").value;
  let table = alpha[numeric];
  numbers = [numeric];
  numbers = numbers.concat(table);
  languageList = "";
  for(var i = 0 ; i < numbers.length; i++)
  {
    languageList+="<div class = 'response'>"+numbers[i]+"</div>";
  }
  document.querySelector(".responseContentMain").innerHTML = languageList;
}

class Browser extends React.Component{
  render(){
    languageList = numbers.map((language) => <div class="response">{language}</div>);
    return (
      <div class = "container">
      <div class="browserContainer">
        <input type="number" name="Number" min="0" max = "10" id = "number" class="numberBrowser" onInput={search}/>
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
