import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Browser from "./components/browser.jsx";
import About from "./components/about.jsx";
import "./css/styles.css";
function App() {
  return (
    <Router>
    <div className="App">
      <nav class = "app-nav">
      <Link to = "/" className = "app-nav-mainsite">NumbersLearner</Link>
      <Link to = "/about" className = "app-nav-about">About us</Link>
      <Link to = "/tutorial" className = "app-nav-tutorial">Languages tutorials</Link>
      <section class = "app-nav-searcher">
      </section>
      </nav>
      <Route exact path="/" component = {Browser}/>
      <Route path = "/about" component = {About}/>
    </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
