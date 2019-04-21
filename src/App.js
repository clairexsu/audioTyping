import React, { Component } from 'react';
import './App.css';
import { Howl } from 'howler';
import note2 from './assets/note2.mp3'; 
import note1 from './assets/note1.mp3';
import wrong1 from './assets/wrong.mp3'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
           checkStart: false,
           randomNumber: 0,
           soundArr: [note1, note2]
        }
    }

  arrowKeyListener = (e) => {
    let key = e.keyCode ? e.keyCode : e.which;
    var sounda = new Howl({
      src: note1
    });
    var soundb = new Howl({
        src: note2
    })
    var wrong = new Howl({
        src: wrong1
    })
    if(key == 13) {
        this.state.checkStart = true;
    }
    else if (this.state.checkStart) {
        switch(key) {
        case 97:
        case 65:
            sounda.play();
            break;
        case 115:
        case 83:
            soundb.play();
            break;
        case 100:
        case 68:
            
            break;
        case 102:
        case 70:
            
            break;
        case 106:
        case 74:
            
            break;
        case 107:
        case 75:
            
            break;
        case 108:
        case 76:
            
            break;
        case 59:
            
            break;
        default:
            wrong.play();
    }
}
};

componentDidMount(){
    document.addEventListener("keydown", this.arrowKeyListener);
}

componentWillUnmount(){
    document.removeEventListener("keydown", this.arrowKeyListener);
}

render() {
  return (
    <div>
      <h1>Audio Typing</h1>
           <div className = "buttons">
             <button className = "A"> A </button>
             <button className = "S"> S </button>
             <button className = "D"> D </button>
             <button id = 'f' className = "F"> F </button>
             <button id = 'j' className = "J"> J </button>
             <button id = 'k' className = "K"> K </button>
             <button id = 'l' className = "L"> L </button>
             <button id = 'colon' className = "colon">;</button>
           </div>
    </div>
  );
}
}

export default App;




