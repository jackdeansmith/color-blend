import React, { Component } from 'react';
import chroma from 'chroma-js';
import InputPicker from './Components/InputPicker/InputPicker';
import BlendChooser from './Components/BlendChooser/BlendChooser';

import './App.css';
import './Reset.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color1: chroma('hotpink'),
      color2: chroma('cyan'),
      blend: 0.5,
    }
  }

  render() {

    const color1Shadow = {
      textShadow: `-10px 10px 4px ${this.state.color1.hex('rgb')}`,
    };

    const color2Shadow = {
      textShadow: `10px 10px 4px ${this.state.color2.hex('rgb')}`,
    };

    return (
      <div className="app">
        <div className="app-header">
          <h1 className="app-header-text">
          <span style={color1Shadow}>Color</span>
          <span> </span>
          <span style={color2Shadow}>Blend</span>
          </h1>
        </div>
        <InputPicker
          color={this.state.color1}
          onChange={this.onColor1Change}
        />
        <BlendChooser
          value={this.state.blend}
          onChange={this.onBlendChange}
          color1={this.state.color1}
          color2={this.state.color2}
          blendedColor={this.state.blendedColor}
        />
        <InputPicker
          color={this.state.color2}
          onChange={this.onColor2Change}
        />
      </div>
    );
  }

  onBlendChange = (blend) => {
    this.setState({ blend });
  }

  onColor1Change = (color1) => {
    this.setState({ color1 });
  }

  onColor2Change = (color2) => {
    this.setState({ color2 });
  }

}

export default App;
