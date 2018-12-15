import React, { Component } from 'react';
import './App.css';
import chroma from 'chroma-js';
import Blender from './Components/Blender/Blender'
import Output from './Components/Output/Output'

function blend(color1, color2, blendAmmount){
  return chroma.mix(color1, color2 , blendAmmount, 'lab');
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color1: chroma('hotpink'),
      color2: chroma('cyan'),
      blendAmmount: 0.5,
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>Color Blender</h1>
        </div>
        <Blender
          color1={this.state.color1}
          color2={this.state.color2}
          blendAmmount={this.state.blendAmmount}
          onBlendChange={this.onBlendChange}
          onColor1Change={this.onColor1Change}
          onColor2Change={this.onColor2Change}
        />
        <Output
          colorOut={blend(this.state.color1, this.state.color2, this.state.blendAmmount)}
          color1={this.state.color1}
          color2={this.state.color2}
        />
      </div>
    );
  }

  onBlendChange = (blendAmmount) => {
    this.setState({ blendAmmount });
  }

  onColor1Change = (color1) => {
    this.setState({ color1 });
  }

  onColor2Change = (color2) => {
    this.setState({ color2 });
  }

}

export default App;
