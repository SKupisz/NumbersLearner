import React from "react";
import ReactDOM from "react-dom";

import Browser from "./browser.jsx";
import "./styles.css";


function App() {
  return (
    <div className="App">
      <Browser/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
