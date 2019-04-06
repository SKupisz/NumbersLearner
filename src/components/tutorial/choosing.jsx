import React from 'react';
import {Link} from 'react-router-dom';

export default class ChoosingBar extends React.Component {
  render(){
    return(
      <section class = "choosing-language">
      <Link to = "/tutorial/english">
      <button class = "choosingBtn" id = "english">Angielski</button>
      </Link>
      <button class = "choosingBtn" id = "german">Niemiecki</button>
      </section>
    );
  }
}
