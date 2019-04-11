import React, { Component } from 'react';
import './App.css';
import keydown from 'react-keydown';

class App extends Component {

render() {
  return (
    <div>
      <h1>Audio Typing</h1>
           <div class = "buttons">
             <button id = 'a' class = "A"> A </button>
             <button id = 's' class = "S"> S </button>
             <button id = 'd' class = "D"> D </button>
             <button id = 'f' class = "F"> F </button>
             <button id = 'j' class = "J"> J </button>
             <button id = 'k' class = "K"> K </button>
             <button id = 'l' class = "L"> L </button>
             <button id = 'm' class = "colon">:</button>
           </div>
    </div>
  );
}
}

export default App;




