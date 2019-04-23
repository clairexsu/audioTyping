import React, { Component } from 'react';
import './App.css';
import { Howl } from 'howler';
import note2 from './assets/note2.mp3';
import note1 from './assets/note1.mp3';
import wrong1 from './assets/wrong.mp3';
import right from './assets/correct.mp3';
import note3 from './assets/theme.mp3';
import note4 from './assets/whistle.mp3';
import note5 from './assets/metal gear.mp3'
import note6 from './assets/ka-ching sound effect.mp3'
import note7 from './assets/Quack Sound Effect.mp3'
import note8 from './assets/guitar.mp3'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkStart: false,
            randomIndex: 0,
            soundArr: [note1, note2, right, note3, note4, note5, note6, note7, note8, wrong1],
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
        });
        var soundc = new Howl({
            src: note3
        });
        var soundd = new Howl({
            src: note4
        });
        var sounde = new Howl({
            src: note5
        });
        var soundf = new Howl({
            src: note6
        });
        var soundg = new Howl({
            src: note7
        });
        var soundh = new Howl({
            src: note8
        });
        var wrong = new Howl({
            src: wrong1
        });
        var correct = new Howl({
            src: right
        });

        //if enter key is pressed then game can start
        if (key === 13) {
            this.setState({
                checkStart: true,
            });
            return;
        }

        //after the enter key is pressed, if the B key is pressed, a sound should play on its own depending on the index
        if (this.state.checkStart && key === 98 || key === 66){
            this.randomIndex = Math.floor(Math.random() * 8);
            console.log(this.randomIndex);
            switch (this.randomIndex) {
                case 1:
                    sounda.play();
                    break;
                case 2:
                    soundb.play();
                    break;
                case 3:
                    soundc.play();
                    break;
                case 4:
                    soundd.play();
                    break;
                case 5:
                    sounde.play();
                    break;
                case 6:
                    soundf.play();
                    break;
                case 7:
                    soundg.play();
                    break;
                case 8:
                    soundh.play();
                    break;
                default:
                    wrong.play();
            }
            return;
        }

        //this switch case assigns a sound to each key (in ascii) provided 
        if (this.state.checkStart) {
            switch (key) {
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
                    soundc.play();
                    this.userSound = 3;
                    break;
                case 102:   //F or f
                case 70:
                    soundd.play();
                    this.userSound = 4;
                    break;
                case 106:   //J or j
                case 74:
                    sounde.play();
                    this.userSound = 5;
                    break;
                case 107:   //K or k
                case 75:
                    soundf.play();
                    this.userSound = 6;
                    break;
                case 108:   //L or l
                case 76:
                    soundg.play();
                    this.userSound = 7;
                    break;
                case 59:    //;
                case 58:
                    soundh.play();
                    this.userSound = 8;
                    break;
                default:
                    wrong.play();
            }
            //if the sound that was played and the sound clicked is the same then make a correct sound, else play the wrong sound
            if (this.userSound === this.randomIndex) {
                correct.play();
            }
            else {
                wrong.play();
                sounda.stop();
                soundb.stop();
                soundc.stop();
                soundd.stop();
                sounde.stop();
                soundf.stop();
                soundg.stop();
                soundh.stop();
            }
        }
    };

    componentDidMount() {
        document.addEventListener("keydown", this.arrowKeyListener);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.arrowKeyListener);
    }

    render() {
        return (
            <div>
                <h1>Audio Typing</h1>
                <div className="buttons">
                    <button className="A"> A </button>
                    <button className="S"> S </button>
                    <button className="D"> D </button>
                    <button id='f' className="F"> F </button>
                    <button id='j' className="J"> J </button>
                    <button id='k' className="K"> K </button>
                    <button id='l' className="L"> L </button>
                    <button id='colon' className="colon">;</button>
                </div>
            </div>
        );
    }
}

export default App;




