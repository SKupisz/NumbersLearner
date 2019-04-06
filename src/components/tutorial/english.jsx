import React from 'react';
import {Route, Link} from 'react-router-dom';

import MathLesson from "./english/math.jsx";

export default class English extends React.Component{
  render(){
    return(
      <main class = "englishSection">
          <aside class = "englishMenu">
            <Link to = "/tutorial/english/math">
            <div class = "lesson lessonActive">Matematyka</div>
            </Link>
            <Link to = "/tutorial/english/chemistry">
            <div class = "lesson">Chemia</div>
            </Link>
            <Link to = "/tutorial/english/math">
            <div class = "lesson">Lekcja 3</div>
            </Link>
            <Link to = "/tutorial/english/math">
            <div class = "lesson">Lekcja 4</div>
            </Link>
            <Link to = "/tutorial/english/math">
            <div class = "lesson">Lekcja 5</div>
            </Link>
          </aside>
          <main class = "englishLessonSection">
          <Route path = "/tutorial/english/math" component = {MathLesson}/>
          </main>
      </main>
    );
  }
}
