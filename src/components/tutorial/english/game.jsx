import React from 'react';
import {HashRouter} from 'react-router-dom';
import {answerTable} from "./checkAnwser.jsx";

let barText = "";
let hashLoc = "",localText = "";
let hashTable = Array();
let check = "four to the power of seven ",win = 0;

function usingBarText(helper) {
  if((localText).indexOf(helper) == -1)
  {
    localText += helper+"/";
  }
  else {
    localText = (localText).substr((localText).indexOf(helper)+4,(localText).length);
  }
  
}
function changingText(){
  if(win == 0)
  {
    hashLoc = localText;
      hashTable = hashLoc.split("/");

      barText = "";
      for(let i = 0 ; i < hashTable.length; i++)
      {
        barText+=hashTable[i];
        if(i != hashTable.length - 1)
        {
          barText+=" ";
        }

      }
  }
  else if(win == 1)
  {
    barText = "Correct";
  }
  else {
    barText = "Wrong. Try again";
  }

  setTimeout(changingText, 100);
}
function checkIfRight(){
  if(barText.localeCompare(check))
  {
    win = 2;
  }
  else {
    win = 1;
  }
}
export default class Game extends React.Component{
  render(){
    changingText();
    return(
      <div class = "example game">
      <div class = "game-questionShower" id = "game-questionShower">cztery do potęgi siódmej(słownie)</div>
      <section class = "gameShower">
      <div class = "showingActualAnwser">{barText}</div>
      <input class = "toHide" type = "checkbox" id = "fourClick" onChange = {() => usingBarText("four")}/>
        <label for = "fourClick" class = "gameAnwserBtn" id = "four">
        four
      </label>
      <input class = "toHide" type = "checkbox" id = "ofClick" onChange = {() => usingBarText("of")}/>
        <label for = "ofClick" class = "gameAnwserBtn" id = "of">
          of
      </label>
      <input class = "toHide" type = "checkbox" id = "powerClick" onChange = {() => usingBarText("power")}/>
        <label for = "powerClick" class = "gameAnwserBtn" id = "power">
          power
      </label>
      <input class = "toHide" type = "checkbox" id = "toClick" onChange = {() => usingBarText("to")}/>
        <label for = "toClick" class = "gameAnwserBtn" id = "to">
          to
      </label>
      <input class = "toHide" type = "checkbox" id = "theClick" onChange = {() => usingBarText("the")}/>
        <label for = "theClick" class = "gameAnwserBtn" id = "the">
          the
      </label>
      <input class = "toHide" type = "checkbox" id = "sevenClick" onChange = {() => usingBarText("seven")}/>
        <label for = "sevenClick" class = "gameAnwserBtn" id = "seven">
          seven
      </label>
      </section>
      <button class = "game-check" onClick = {() => checkIfRight()}>
      Sprawdź
      </button>
      </div>
    );
  }
}
