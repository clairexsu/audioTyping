import React, { Component } from 'react';
import './App.css';
import { Howl } from 'howler';
import note2 from './assets/note2.mp3'; 
import note1 from './assets/note1.mp3';
import wrong1 from './assets/wrong.mp3';
import right from './assets/correct.mp3'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
           checkStart: false,
           randomIndex: 0,
           soundArr: [note1, note2],
           userSound: 0
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

    var correct = new Howl({
        src: right
    })

    //if enter key is pressed then game can start
    if(key === 13) {
        this.state.checkStart = true;
        return;
    }
    if(this.state.checkStart && key == 102 || key == 70 || key == 106 || key == 74){
    this.randomIndex = Math.floor(Math.random()*3);
    console.log(this.randomIndex);
    switch(this.randomIndex){
        case 1:
        sounda.play();
        break;
        case 2:
        soundb.play();
        break;
        default:
        wrong.play();
    }
    return;
}
    if (this.state.checkStart) {
        switch(key) {
        case 97:      //A or a              
        case 65:
            sounda.play();
            this.userSound = 1;
            break;
        case 115:   //S or s
        case 83:
            soundb.play();
            this.userSound = 2;
            break;
        case 100:   //D or d
        case 68:
        
            this.userSound = 3;
            break;
        case 102:   //F or f
        case 70:
             this.userSound = 4;
            break;
        case 106:   //J or j
        case 74:
        this.userSound =5;
            break;
        case 107:   //K or k
        case 75:
        this.userSound = 6;
            break;
        case 108:   //L or l
        case 76:
        this.userSound = 7;
            break;
        case 59:    //;
        this.userSound = 8;
            break;
        default:
            wrong.play();
    }
    if(this.userSound === this.randomIndex){
        correct.play();
    }
    else{
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




