import React, { Component } from "react";
 
class Main extends Component {
  render() {
    return (
        <div>
          <h1>Audio Typing</h1>
          <div class = "buttons">
            <button class = "A"> A </button>
            <button class = "S"> S </button>
            <button class = "D"> D </button>
            <button class = "F"> F </button>
            <button class = "J"> J </button>
            <button class = "K"> K </button>
            <button class = "L"> L </button>
            <button class = "colon">:</button>
          </div>
          <div className="content">
             
          </div>
        </div>
    );
  }
}
 
export default Main;